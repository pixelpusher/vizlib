import {
  LineBasicMaterial,
  LineSegments,
  BufferGeometry,
  Float32BufferAttribute,
  DynamicDrawUsage,
  SphereGeometry,
  MeshBasicMaterial,
  Mesh
} from "three";

const numVerts = 600000; // must be divisible by 3

let extrudeGeometry, travelGeometry;
let printHeadMarker;
let travelPoints = 0; // count of all draw line segments
let extrudePoints = 0; // count of all draw line segments

let gcodeLines = [];

export function getGcode() {
  return gcodeLines.join('\n');
}

/**
 * Create line segments object and associated internal geometry
 * @returns {LineSegments} ThreeJS object
 */
export function makeTravelLineSegments() {
  travelGeometry = new BufferGeometry();
  travelGeometry.name = "travel_geom";
  travelPoints = 0;

  const travelMaterial = new LineBasicMaterial({
    vertexColors: false,
    color: 0xea4488,
    opacity: 0.8,
    transparent: true,
    name: "travel",
    linewidth: 20, // in world units with size attenuation, pixels otherwise
    //resolution:  // to be set by renderer, eventually
    alphaToCoverage: true,
  });

  travelGeometry.setAttribute(
    "position",
    new Float32BufferAttribute(numVerts, 3)
  );
  // travelGeometry.setAttribute('color', new Float32BufferAttribute(numVerts, 3));
  travelGeometry.attributes.position.usage = DynamicDrawUsage;
  travelGeometry.setDrawRange(0, 0);

  return new LineSegments(travelGeometry, travelMaterial);
}

/**
 * Create line segments object and associated internal geometry
 * @returns {LineSegments} ThreeJS object
 */
export function makeExtrudeLineSegments() {
  extrudeGeometry = new BufferGeometry();
  extrudePoints = 0;
  extrudeGeometry.name = "extrude_geom";

  const extrudeMaterial = new LineBasicMaterial({
    vertexColors: false,
    color: 0x4488ea,
    opacity: 0.7,
    transparent: true,
    name: "extrude",
    linewidth: 20, // in world units with size attenuation, pixels otherwise
    //resolution:  // to be set by renderer, eventually
    fog: false,
    alphaToCoverage: true,
  });

  extrudeGeometry.setAttribute(
    "position",
    new Float32BufferAttribute(numVerts, 3)
  );
  // travelGeometry.setAttribute('color', new Float32BufferAttribute(numVerts, 3));
  extrudeGeometry.attributes.position.usage = DynamicDrawUsage;
  extrudeGeometry.setDrawRange(0, 0);

  return new LineSegments(extrudeGeometry, extrudeMaterial);
}

export function makePrintHeadMarker({radius}={radius:2}) {
  const geometry = new SphereGeometry( radius, 16, 12 ); 
  const material = new MeshBasicMaterial( { color: 0xffff55 } ); 
  printHeadMarker = new Mesh( geometry, material ); 
  return printHeadMarker;
}

/**
 * Run a delay function or just delay some number of ms
 * @argument {Number} ms number of millis if arg1 is function otherwise ignored
 */
async function _runDelay(ms)
{
  //console.log(`delay:${ms}`);

  if (Number.isNaN(ms) )
  {
    throw new Error(`Bad non-numeric argument to delay for visualiser: ${JSON.stringify(ms)}`);
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
export function makePrinterEventHandler({ x, y, z, delay, debug } = {delay:false, debug:false}) {

  return {
    printEvent: async ({
      type,
      newPosition,
      oldPosition,
      speed,
      moveTime,
      totalMoveTime,
      layerHeight,
      length,
    }) => {
      if (debug) {
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
        case "extrude":
          {
            if (!extrudeGeometry) return;

            // add line segment
            const positions = extrudeGeometry.attributes.position;
            //console.log('setting pos');
            positions.setXYZ(
              extrudePoints++,
              x(oldPosition.x),
              y(oldPosition.y),
              z(oldPosition.z)
            );
            //console.log('set pos');
            positions.setXYZ(
              extrudePoints++,
              x(newPosition.x),
              y(newPosition.y),
              z(newPosition.z)
            );
            extrudeGeometry.setDrawRange(0, extrudePoints - 1);
            // update on GPU
            positions.needsUpdate = true;
            // console.log('e');

            // move print head
            printHeadMarker.position.set(
              x(newPosition.x),
              y(newPosition.y),
              z(newPosition.z)
            );
          }
          break;

        case "travel":
          {
            if (!travelGeometry) return;
            // add line segment
            const positions = travelGeometry.attributes.position;
            positions.setXYZ(
              travelPoints++,
              x(oldPosition.x),
              y(oldPosition.y),
              z(oldPosition.z)
            );
            positions.setXYZ(
              travelPoints++,
              x(newPosition.x),
              y(newPosition.y),
              z(newPosition.z)
            );
            travelGeometry.setDrawRange(0, travelPoints - 1);
            positions.needsUpdate = true;
            // console.log('t');


          }
          break;

        case "retract":
          // nothing
          console.log("RETRACT!");
          break;

        case "unretract":
          // nothing
          console.log("RETRACT!");
          break;

        
        default:
          //throw new Error(`handlePrintEvent() => unknown event type: ${type}`);
      }
      if (delay)
        await _runDelay(moveTime);
      return;
    },

    errorEvent: (err) => console.error(`LivePrinter Error Event: ${err}`),
    gcodeEvent: async (data) => {
      gcodeLines.push(data);
    }, // wait 20 ms
  };
}
