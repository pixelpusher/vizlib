import {
  LineBasicMaterial,
  LineDashedMaterial,
  LineSegments,
  BufferGeometry,
  Float32BufferAttribute,
  DynamicDrawUsage,
  ConeGeometry,
  MeshBasicMaterial,
  Mesh,
  BufferAttribute,
  DataTexture,
  RGBAFormat,
  LinearFilter,
  ClampToEdgeWrapping,
  ShaderMaterial,
  //DoubleSide,
} from "three";

import { Vector3 } from "three";
// import { Line2 } from 'three/addons/lines/Line2.js'
// import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
// import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

import chroma from 'chroma-js';


const MAX_SEGMENTS = 300000; // for lines, times 2
const MAX_VERTICES = MAX_SEGMENTS * 2; // LineSegments requires 2 vertices per segment

let extrudeGeometry, travelGeometry, animationLineGeometry; // geometry float array objects
let travelLine, extrudeLine; // ThreeJS line objects
let printHeadMarker;

let travelPoints = 0; // count of all draw line segments
let extrudePoints = 0; // count of all draw line segments
let currentWidth = 1; // Track current viewport width
let currentHeight = 1; // Track current viewport height

// for normalising colours and mapping speeds to the full colour pallete (@see travelColours/extrudeColours)
let maxSpeed = 150; // max printer speed in mm/s (varies by model)
let minSpeed = 1; // min printer speed in mm/s (not physical min, but practical min!)

export function setMaxSpeed(s) {
  maxSpeed = s;
}

export function getMaxSpeed() {
  return maxSpeed;
}

export function setMinSpeed(s) {
  minSpeed = s;
}

export function getMinSpeed() {
  return minSpeed;
}

// lines of gcode rendered and returned from printer events
let gcodeLines = [];

// line colours to map to the speed range for the printer
let travelColours = ['#ff43ba', '#ffb949', '#00d2ff'];

export function getTravelColours() {
  return travelColours;
}

/**
* Set travel colours but keep original array
* @param {Array} colours 
*/
export function setTravelColours(colours) {
  travelColours.length = 0;
  travelColours.push(...colours);
}

// line colours to map to the speed range for the printer
let extrudeColours = ['#3243e0', '#ec0505', '#d034c5','#1bace5', '#d87306', '#f5e323'];

export function getExtrudeColours() {
  return extrudeColours;
}

/**
* Set travel colours but keep original array
* @param {Array} colours 
*/
export function setExtrudeColours(colours) {
  extrudeColours.length = 0;
  extrudeColours.push(...colours);
}


// Map speed in mm/s to the scale 0-1 logarithmically
function normaliseSpeedLog(speed) {
  const minLog = Math.log10(minSpeed);
  const maxLog = Math.log10(maxSpeed);
  
  // Clamp frequency to audible range
  const clamped = Math.max(minSpeed, Math.min(maxSpeed, speed));

  // Logarithmic normalization: maps 20Hz -> 0.0 and 20000Hz -> 1.0
  const normalized = (Math.log10(clamped) - minLog) / (maxLog - minLog);

  return normalized;
}

/**
* Function to create colour palettes for speed-based colour sampling in travel and extrusion lines
*  
* @param {Object} chromaScale Scale from chromajs object, example chroma.scale(['#0f0c29', '#00d2ff', '#fffb00']).mode('oklch')
* @param {Integer} resolution Number of colours 
* @returns {DataTexture} ThreeJS data texture for mapping with a shader
*/
function createPaletteDataTexture(chromaScale, resolution = 256) {
  const data = new Uint8Array(resolution * 4);
  
  for (let i = 0; i < resolution; i++) {
    const t = i / (resolution - 1);
    const [r, g, b, a] = chromaScale(t).rgba();
    
    const offset = i * 4;
    data[offset]     = r;
    data[offset + 1] = g;
    data[offset + 2] = b;
    data[offset + 3] = Math.round(a * 255);
  }
  
  const texture = new DataTexture(
    data,
    resolution, // Width
    1,          // Height (1 pixel tall = 1D texture)
    RGBAFormat
  );
  
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.needsUpdate = true; // Signals Three.js to upload to GPU
  
  return texture;
}

/**
* Get GCode returned by the printer via callback
* @returns {String} GCode as string
*/
export function getGcode() {
  return gcodeLines.join("\n");
}

/**
* Reset the travel geometry 
*/
function resetTravelGeometry() {
  if (travelGeometry) {
    travelGeometry.dispose();
  }
  if (travelLine && travelLine.material) travelLine.material.dispose();
  
  travelGeometry = new BufferGeometry();
  travelGeometry.name = "travel_geom";
  travelPoints = 0;
  
  const positions = new Float32Array(MAX_VERTICES * 3);
  const noteValues = new Float32Array(MAX_VERTICES * 1);
  
  travelGeometry.setAttribute(
    "position",
    new BufferAttribute(positions, 3)
  );
  travelGeometry.setAttribute(
    "noteValue",
    new BufferAttribute(noteValues, 1)
  );
  
  travelGeometry.attributes.position.usage = DynamicDrawUsage;
  travelGeometry.setDrawRange(0, 0);
}

function resetExtrudeGeometry() {
  if (extrudeGeometry) {
    extrudeGeometry.dispose();    
  }
  if (extrudeLine && extrudeLine.material) extrudeLine.material.dispose();
  
  extrudeGeometry = new BufferGeometry();
  extrudeGeometry.name = "extrude_geom";
  extrudePoints = 0;
  
  const positions = new Float32Array(MAX_VERTICES * 3);
  const noteValues = new Float32Array(MAX_VERTICES * 1);
  
  extrudeGeometry.setAttribute(
    "position",
    new BufferAttribute(positions, 3)
  );
  extrudeGeometry.setAttribute(
    "noteValue",
    new BufferAttribute(noteValues, 1)
  );
  extrudeGeometry.attributes.position.usage = DynamicDrawUsage;
  extrudeGeometry.setDrawRange(0, 0);
}

/**
* Resize all vertices in travelGeometry and extrudeGeometry
* @param {Number} newWidth New viewport width
* @param {Number} newHeight New viewport height
*/
export function resizeGeometries(newWidth, newHeight) {
  if (newWidth <= 0 || newHeight <= 0) {
    console.warn(`Invalid dimensions for geometry resize: ${newWidth}x${newHeight}`);
    return;
  }
  
  // Calculate scale factors
  const scaleX = newWidth / currentWidth;
  const scaleY = newHeight / currentHeight;
  
  // Resize travel geometry
  if (travelGeometry && travelPoints > 0) {
    const travelPositions = travelGeometry.attributes.position;
    for (let i = 0; i < travelPoints; i++) {
      const x = travelPositions.getX(i) * scaleX;
      const y = travelPositions.getY(i) * scaleY;
      const z = travelPositions.getZ(i);
      travelPositions.setXYZ(i, x, y, z);
    }
    travelPositions.needsUpdate = true;
    travelGeometry.computeBoundingSphere();
  }
  
  // Resize extrude geometry
  if (extrudeGeometry && extrudePoints > 0) {
    const extrudePositions = extrudeGeometry.attributes.position;
    for (let i = 0; i < extrudePoints; i++) {
      const x = extrudePositions.getX(i) * scaleX;
      const y = extrudePositions.getY(i) * scaleY;
      const z = extrudePositions.getZ(i);
      extrudePositions.setXYZ(i, x, y, z);
    }
    extrudePositions.needsUpdate = true;
    extrudeGeometry.computeBoundingSphere();
  }
  
  // Update current dimensions
  currentWidth = newWidth;
  currentHeight = newHeight;
}

/**
* Set the viewport dimensions for the resize function
* @param {Number} width Viewport width
* @param {Number} height Viewport height
*/
export function setGeometryDimensions(width, height) {
  currentWidth = width;
  currentHeight = height;
}

/**
* Set emissive intensity for travel lines (for glow effect)
* @param {Number} intensity Intensity value (0-1 recommended)
*/
export function setTravelLineGlow(intensity) {
  travelEmissiveIntensity = intensity;
  if (travelLine && travelLine.material) {
    travelLine.material.emissiveIntensity = intensity;
    if (intensity > 0) {
      travelLine.material.emissive.copy(travelLine.material.color);
    } else {
      travelLine.material.emissive.setHex(0x000000);
    }
  }
}

/**
* Set emissive intensity for extrude lines (for glow effect)
* @param {Number} intensity Intensity value (0-1 recommended)
*/
export function setExtrudeLineGlow(intensity) {
  extrudeEmissiveIntensity = intensity;
  if (extrudeLine && extrudeLine.material) {
    extrudeLine.material.emissiveIntensity = intensity;
    if (intensity > 0) {
      extrudeLine.material.emissive.copy(extrudeLine.material.color);
    } else {
      extrudeLine.material.emissive.setHex(0x000000);
    }
  }
}


/**
* Create line segments object and associated internal geometry
* @returns {LineSegments} ThreeJS object
*/
export function makeTravelLineSegments({color, opacity, emissiveIntensity}={color:0xea4488, opacity:0.8, emissiveIntensity:0}) {
  
  resetTravelGeometry();
  
  const paletteTexture = createPaletteDataTexture(
    chroma.scale(travelColours).mode('oklch')
  );
  
  const travelMaterial = new ShaderMaterial({
    uniforms: {
      uPalette: { value: paletteTexture }
    },
    vertexShader: `
      attribute float noteValue; // Custom attribute per vertex
      varying float vNoteValue;
    
      void main() {
        vNoteValue = noteValue;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D uPalette;
      varying float vNoteValue;
    
      void main() {
        // Clamp to ensure coordinate stays strictly inside [0.0, 1.0]
        float u = clamp(vNoteValue, 0.0, 1.0);
        gl_FragColor = texture2D(uPalette, vec2(u, 0.5));
      }
    `,
    transparent: true,
    opacity,
    name: "travel",
    alphaToCoverage: true,
    emissive: emissiveIntensity > 0 ? color : 0x000000,
    emissiveIntensity: emissiveIntensity,
  });
  
  travelLine = new LineSegments(travelGeometry, travelMaterial);
  return travelLine;
}

/**
* Create line segments object for animation
* @returns {LineSegments} ThreeJS object
*/
export function makeAnimationLine() {
  animationLineGeometry = new BufferGeometry();
  const positions = new Float32Array(2 * 3);
  animationLineGeometry.setAttribute('position', new BufferAttribute(positions, 3));

  const animationLineMaterial = new LineDashedMaterial({
    color: 0xffffff,
    dashSize: 2.5,
    gapSize: 2.5,
    dashSize: 5,
    gapSize: 5,
    transparent: true,
    opacity: 0.3,
  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

  const animationLine = new LineSegments(animationLineGeometry, animationLineMaterial);
  animationLine.visible = false;
  animationLine.frustumCulled = false;

  return animationLine;
}

/**
* Create line segments object and associated internal geometry
* @returns {LineSegments} ThreeJS object
*/
export function makeExtrudeLineSegments({color, opacity, emissiveIntensity}={color:0x4488ea, opacity:0.7, emissiveIntensity:0}) {
  
  resetExtrudeGeometry();
  
  const paletteTexture = createPaletteDataTexture(
    chroma.scale(extrudeColours).mode('oklch')
  );
  
  const extrudeMaterial = new ShaderMaterial({
    uniforms: {
      uPalette: { value: paletteTexture }
    },
    vertexShader: `
      attribute float noteValue; // Custom attribute per vertex
      varying float vNoteValue;
    
      void main() {
        vNoteValue = noteValue;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D uPalette;
      varying float vNoteValue;
    
      void main() {
        float u = clamp(vNoteValue, 0.0, 1.0);
        gl_FragColor = texture2D(uPalette, vec2(u, 0.5));
      }
    `,
    transparent: true,
    opacity,
    name: "extrude",
    alphaToCoverage: true,
    emissive: emissiveIntensity > 0 ? color : 0x000000,
    emissiveIntensity: emissiveIntensity,
  });
  
  extrudeLine = new LineSegments(extrudeGeometry, extrudeMaterial);
  return extrudeLine;
}

/**
* @param {Array} geometry BufferAttribute
* @param {Object} moveData in the form { p1: [x,y,z], p2: [x,y,z], speedStart: 8, speedEnd: 80 }
*/
function updateGeometryWithMoveData(geometry, index, moveData) {
  const posAttr = geometry.attributes.position;
  const noteAttr = geometry.attributes.noteValue;
    
  // Start point
  posAttr.setXYZ(index, ...moveData.p1);
  noteAttr.setX(index, normaliseSpeedLog(moveData.speedStart)); 
  
  // End point
  posAttr.setXYZ(index+1, ...moveData.p2);
  noteAttr.setX(index+1, normaliseSpeedLog(moveData.speedEnd));
  
  // Tell Three.js how many vertices to draw this frame
  geometry.setDrawRange(0, index + 2);
  
  // Mark attributes dirty so GPU uploads updated buffers
  posAttr.needsUpdate = true;
  noteAttr.needsUpdate = true;
  geometry.computeBoundingSphere();
}


export function makePrintHeadMarker({ radius, height, color } = { radius: 2, height: 5, color: 0xffff55 }) {
  // ConeGeometry by default has its axis along the Y-axis, base centered at (0,0,0), tip at (0, height/2, 0).
  // To make the tip the origin and its axis along positive Z for lookAt(), we translate and rotate it.
  // We also set flatShading for a more distinct cone appearance.
  const geometry = new ConeGeometry(radius, height, 8).rotateZ(Math.PI / 2).translate(0, 0, -1.2*height);
  const material = new MeshBasicMaterial({ color, flatShading: true, wireframe: true });
  printHeadMarker = new Mesh(geometry, material);
  return printHeadMarker;
}

/**
* Run a delay function or just delay some number of ms
* @argument {Number} ms number of millis if arg1 is function otherwise ignored
*/
async function _runDelay(ms) {
  //console.log(`delay:${ms}`);
  
  if (Number.isNaN(ms)) {
    throw new Error(
      `Bad non-numeric argument to delay for visualiser: ${JSON.stringify(ms)}`
    );
  }
  
  if (ms > 0) {
    await new Promise((resolve) => setTimeout(resolve, Math.round(ms)));
  }
  return 0;
}

/**
* Set up printer event callbacks for travel and extrude position updates
* @param {Object} position_functions x,y,z functions for translating bed coords to scene coords
* @returns {Object} Event handler with keys for LivePrinter function callbacks
*/
export function makePrinterEventHandler(
  { x, y, z, delay, debug } = { delay: false, debug: false}
) {
  let _delay = delay;
  let _debug = debug;
  
  let animationFrameId = null;
  return {
    
    set delay(d) {
      _delay = d;
    },
    get delay() {
      return _delay;
    },
    set debug(d) {
      _debug = d;
    },
    get debug() {
      return _debug;
    },
    
    async printEvent ({
      type,
      newPosition,
      oldPosition,
      speed,
      moveTime,
      time,
      totalMoveTime,
      layerHeight,
      length,
    }) {
      if (_debug) {
        console.log(
          `PRINT EVENT: ${type},
          old: ${JSON.stringify(oldPosition)},
          new: ${JSON.stringify(newPosition)},
          speed: ${speed},
          moveTime: ${moveTime},
          totalMoveTime: ${totalMoveTime},
          layerHeight: ${layerHeight},
          length: ${length}`
        );
      }
      
      switch (type) {
        case "extrude-start":
        case "travel-start":
        {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }

          const startPos = new Vector3(x(oldPosition.x), y(oldPosition.y), z(oldPosition.z));
          const endPos = new Vector3(x(newPosition.x), y(newPosition.y), z(newPosition.z));

          // const direction = new Vector3().subVectors(endPos, startPos).normalize();
          const positions = animationLineGeometry.attributes.position;
          positions.setXYZ(0, startPos.x, startPos.y, startPos.z);
          positions.setXYZ(1, endPos.x, endPos.y, endPos.z);
          positions.needsUpdate = true;
          animationLineGeometry.computeBoundingSphere();

          const animationLine = travelLine.parent.getObjectByName('animation-line');
          if (animationLine) {
            animationLine.visible = true;
            animationLine.computeLineDistances();
          }

          const startTime = performance.now();
          const duration = moveTime;

          const animate = () => {
            const now = performance.now();
            const elapsed = now - startTime;
            const t = Math.min(1, elapsed / duration);

            const currentPos = new Vector3().lerpVectors(startPos, endPos, t);
            printHeadMarker.position.copy(currentPos);
            printHeadMarker.lookAt(endPos);

            if (t < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              if (animationLine) {
                animationLine.visible = false;
              }
              animationFrameId = null;
            }
          };
          animate();
        }
        break;

        case "extrude-end":
        {
          if (!extrudeGeometry) return;
          
          updateGeometryWithMoveData(extrudeGeometry, extrudePoints, {
            p1: [x(oldPosition.x), y(oldPosition.y), z(oldPosition.z)],
            p2: [x(newPosition.x), y(newPosition.y), z(newPosition.z)],
            speedStart: speed,
            speedEnd: speed,
          });
          extrudePoints += 2;
          
        }
        break;
        case "travel-end":
        {
          if (!travelGeometry) return;
          
          updateGeometryWithMoveData(travelGeometry, travelPoints, {
            p1: [x(oldPosition.x), y(oldPosition.y), z(oldPosition.z)],
            p2: [x(newPosition.x), y(newPosition.y), z(newPosition.z)],
            speedStart: speed,
            speedEnd: speed,
          });
          travelPoints += 2;
        }
        break;
        
        case "retract":
        // nothing
        if (_debug) console.log("RETRACT!");
        break;
        
        case "unretract":
        // nothing
        if (_debug) console.log("UNRETRACT!");
        break;
        
        default:
        //throw new Error(`handlePrintEvent() => unknown event type: ${type}`);
      }
      if (_delay) {
        if (Number.isFinite(_delay)) {
          await _runDelay(_delay);
        } else await _runDelay(moveTime || time);
      }
      return;
    },
    
    errorEvent: (err) => console.error(`LivePrinter Error Event: ${err}`),
    gcodeEvent: async (data) => {
      gcodeLines.push(data);
    }, // wait 20 ms
  };
}
