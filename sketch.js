/**
* Visualising 3D printing algos with LivePrinter https://github.com/pixelpusher/liveprinter
*
* by Evan Raskob <evan@flkr.com>
* 
* Might be buggy, but hey!
*/

import { LivePrinter } from "liveprinter-core"

// import main library
import { makeVisualiser } from "./lib/main.js";

/**
* Dumb, I know, but easier I guess
* @param {String} text Text to log
*/
function loginfo(text) {
  console.log(text);
}

/**
 * Generates a log-uniform random number between min and max.
 * @param {number} min - Lower bound (must be > 0)
 * @param {number} max - Upper bound
 * @returns {number}
 */
function randomLogUniform(min, max) {
  const logMin = Math.log(min);
  const logMax = Math.log(max);
  const sample = logMin + Math.random() * (logMax - logMin);
  return Math.exp(sample);
}

/**
* Run it!
* @returns 
*/
async function main() {
  const lp = new LivePrinter();
  
  // do the main thing we came here for
  const visualiser = makeVisualiser(lp, "c", 
    { title: "LivePrinter", debug: false, delay: true, 
      printHeadColor: 0xffbb55, printHeadRadius: 3,
      fogEnabled: true, fogColor: 0x0f0f0f, fogNear: 5000, fogFar: 7800,
      glowEnabled: true,
      glowStrength: 0.6,
      glowRadius: 0.2,
      glowThreshold: 0.1,
      travelLineGlow: 0.5,
      extrudeLineGlow: 2.0,
    });
    
    globalThis.visualiser = visualiser;
    
    // download
    document.getElementById('download').addEventListener('click', (e)=>{
      console.log('click');
      visualiser.downloadGCode();
    });
    
    document.getElementById('reset').addEventListener('click', (e)=>{
      console.log('reset scene');
      visualiser.resetScene();
    });
    
    // position on paper
    const offsetx = lp.maxx / 2;
    const offsety = lp.maxy / 2;
    // const offsetx = 0;
    // const offsety = 0;
    const layerHeight = 0.5;
    const minz = 0.25; // start z
    //const minthick = lp.t2mm("1/32b");
    
    //--------------------------------------------------
    //---- LivePrinter setup
    //--------------------------------------------------
    
    // was beat 1/2, beatHeight = 1/2, interval 1b
    
    lp.bpm(125); // set bpm for piece
    lp.psp('C7');
    lp.tsp('E8'); // travel speed 
    lp.interval("1/4b");
    const beatLengthMM = lp.t2mm("1/2b");
    lp.thick(layerHeight);
    
    loginfo(`beat lenth mm: ${beatLengthMM}`);
    loginfo(`travel speed: ${lp.travelspeed()}`);
    loginfo(`print speed: ${lp.printspeed()}`);
    loginfo(`1/2 width in window: ${visualiser.bedXtoScene(lp.maxx / 2)}`);
    
    //----------------------------------------------
    // MOVE INTO POSITION
    //----------------------------------------------
    
    window.bail = false; // bail out (stop) if true
    
    visualiser.closeFactor(50);
    
    let _time = performance.now();
    console.info(`start of move time: ${_time}`);
    await lp.mov2({ x: offsetx, y: offsety, z: minz });
    console.info(`move took: ${performance.now()-_time}`);
    _time = performance.now();
    
    console.info(`start of extrude time: ${_time}`);
    
    await lp.extrude({ x: 5, y: 5, z: 0 });
    console.info(`extrude took: ${performance.now()-_time}`);
    _time = performance.now();
    
    
    const totalLayers = 6;
    let layers = totalLayers;
    const radiusX = lp.maxx / 12;
    const radiusY = lp.maxy / 16;
    const pointsPerLayer = 12;
    
    await lp.moveto({x:lp.cx, y:lp.cy, z:minz});
    while(layers--)
      {
        
        console.info("SHAPE 1");
      const _ppl = 5;
      let ppl = _ppl;
      while(ppl--)
        {
          const speed = randomLogUniform(2,60);

      
        lp.speed(speed);
        lp.turn(360/_ppl);
        lp.t2d('1/4b');
        await lp.draw();
      }
      await lp.up(layerHeight);
      
    }
    
    
    visualiser.closeFactor(30);
    
    await lp.moveto({x:lp.cx, y:lp.cy, z:minz});
    
    layers = totalLayers;
            console.info("SHAPE 2");

    while(layers--)
      {
      let ppl = pointsPerLayer;
      while(ppl--)
        {
        const speed = randomLogUniform(10,120);
        lp.speed(speed);
        const angle  = 2*Math.PI * ppl/pointsPerLayer;
        await lp.extrudeto({ x: offsetx + radiusX*Math.cos(angle), y: offsety + radiusY*Math.sin(angle), speed});
      }
      await lp.up(layerHeight);
    }
    
    layers = totalLayers;
            console.info("SHAPE 3");

    while(layers--)
      {
      let ppl = pointsPerLayer;
      while(ppl--)
        {
        const speed = randomLogUniform(2,60);
          lp.speed(speed);
        const angle  = 2*Math.PI * ppl/pointsPerLayer;
        await lp.extrudeto({ x: offsetx + radiusX*Math.cos(angle), y: offsety + radiusY*Math.sin(angle), speed});
        console.info(`speed: ${speed}`);
      }
      await lp.up(layerHeight);
    }
    
    
    //----------------------------------------------
    //--END SETUP------------------------------------
    //----------------------------------------------
    console.log("LOOP FINISHED!");
    window.bail = true;
    lp.tsp(50);
    await lp.up(30); // | fan fansp | thick newthick
  }
  
  
  // no need to await, just fire and forget
  main();
  