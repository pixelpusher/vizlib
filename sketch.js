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
 * Run it!
 * @returns 
 */
async function main() {
  const lp = new LivePrinter();

  // do the main thing we came here for
  const visualiser = makeVisualiser(lp, "c", { title: "LivePrinter", delay:true, debug:true });
  
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
    const _ppl = 5;
    let ppl = _ppl;
    while(ppl--)
    {
      lp.turn(360/_ppl);
      lp.t2d('1/4b');
      await lp.draw();
    }
    await lp.up(layerHeight);
  }

  
  await lp.moveto({x:lp.cx, y:lp.cy, z:minz});

  layers = totalLayers;
  
  while(layers--)
  {
    let ppl = pointsPerLayer;
    while(ppl--)
    {
      const angle  = 2*Math.PI * ppl/pointsPerLayer;
      await lp.extrudeto({ x: offsetx + radiusX*Math.cos(angle), y: offsety + radiusY*Math.sin(angle)});
    }
    await lp.up(layerHeight);
  }

  layers = totalLayers;

  while(layers--)
    {
      let ppl = pointsPerLayer;
      while(ppl--)
      {
        const angle  = 2*Math.PI * ppl/pointsPerLayer;
        await lp.extrudeto({ x: offsetx + radiusX*Math.cos(angle), y: offsety + radiusY*Math.sin(angle)});
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

  // download
  visualiser.downloadGCode();
}


// no need to await, just fire and forget
main();
