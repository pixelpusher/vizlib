import {
  Scene,
  Group,
  Object3D,
  Mesh,
  BoxGeometry,
  GridHelper,
  Color,
  SRGBColorSpace,
  DoubleSide,
  PointLight,
  AmbientLight,
  MeshPhongMaterial,
  WebGLRenderer,
  OrthographicCamera,
  PerspectiveCamera,
} from "three";

import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

import { helvetiker_regular_typeface } from "../fonts/helvetiker_regular.typeface.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import {
  makeExtrudeLineSegments,
  makeTravelLineSegments,
  makePrinterEventHandler,
  makePrintHeadMarker,
  getGcode,
} from "./PrintGeometry.js";

import { LivePrinter, GCODE_HEADER } from "liveprinter-core";

const PI = Math.PI; // for laziness

/**
 * Create visualiser for LivePrinter instance. In the future, should take colour properties for lights, etc.
 * @param {LivePrinter} lp LivePrinter instance, will draw off of callbacks
 * @param {String} domElementID ID of HTML element to put 3D canvas into
 * @param {Object} props Keys of properties like "title" for displayed 3D title
 * @returns {Object} object with initialised variables and functions, like bedXToScreen etc.
 */
export function makeVisualiser(
  lp,
  domElementID,
  props = { title: "LivePrinter", debug: false, delay: true }
) {
  /**
   * Functions that we might need to do things later, like bedXToScreen
   */
  const export_funcs = {};

  /**
   * Expose method for downloading GCode, in progress or at end
   */
  function downloadGCode(filename = "lines.gcode") {
    const GCode = GCODE_HEADER[lp.model].join("\n") + "\n" + getGcode();
    const urlGcode = URL.createObjectURL(new Blob([GCode], { type: "text" }));
    const aGcode = document.createElement("a");
    aGcode.href = urlGcode;
    aGcode.download = filename;
    aGcode.click();
  }

  export_funcs.downloadGCode = downloadGCode;

  // setup renderer -----------------------------------
  const container = document.getElementById(domElementID);

  function sceneWidth() {
    return container.clientWidth;
  }
  export_funcs.sceneWidth = sceneWidth;

  function sceneHeight() {
    return (sceneWidth() * lp.maxy) / lp.maxx;
  }
  export_funcs.sceneHeight = sceneHeight;

  function bedXtoScene(x) {
    return sceneWidth() * (x / lp.maxx - 1);
  }
  export_funcs.bedXtoScene = bedXtoScene;

  function bedYtoScene(y) {
    return sceneHeight() * (y / lp.maxy - 1);
  }
  export_funcs.bedYtoScene = bedYtoScene;

  function bedZtoScene(z) {
    return (sceneWidth() * z) / lp.maxx;
  }
  export_funcs.bedZtoScene = bedZtoScene;

  const renderer = new WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
    alpha: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(sceneWidth(), sceneHeight());

  container.appendChild(renderer.domElement);
  // end setup renderer -----------------------------------

  const lineSegmentsTravel = makeTravelLineSegments();
  // lineSegmentsTravel.computeLineDistances();
  const lineSegmentsExtrude = makeExtrudeLineSegments();
  //lineSegmentsExtrude.computeLineDistances();

  const printHeadMarker = makePrintHeadMarker();

  const scene = new Scene();
  const HUDObject = new Object3D();

  HUDObject.translateX(-sceneWidth());
  HUDObject.translateY(-sceneHeight() / 2);
  HUDObject.rotateX(PI / 2);
  // HUDObject.rotateY(-PI / 4);
  //HUDObject.translateX(-sceneWidth() / 2);
  HUDObject.translateY((2 * sceneHeight()) / 3);

  const bedGroup = new Group();
  const printGroup = new Group();
  const lightGroup = new Group();

  scene.add(HUDObject);

  printGroup.add(lineSegmentsTravel);
  printGroup.add(lineSegmentsExtrude);
  printGroup.add(printHeadMarker);

  const testCubesDims = { x: sceneWidth() / 40, y: sceneWidth() / 60 };

  const testcube = new Mesh(
    new BoxGeometry(testCubesDims.x, testCubesDims.y, testCubesDims.y),
    new MeshPhongMaterial({ color: 0xa90077 })
  );
  const testcube2 = new Mesh(
    new BoxGeometry(testCubesDims.x, testCubesDims.y, testCubesDims.y),
    new MeshPhongMaterial({ color: 0xe96222 })
  );

  scene.add(bedGroup);

  // centre print and lights
  printGroup.translateX(sceneWidth() / 2);
  printGroup.translateY(sceneHeight() / 2);

  lightGroup.translateX(sceneWidth() / 2);
  lightGroup.translateY(sceneHeight() / 2);

  // far cube
  testcube.position.x = bedXtoScene(lp.maxx) - testCubesDims.x / 2;
  testcube.position.y = bedYtoScene(lp.maxy) - testCubesDims.y / 2;
  testcube.position.z = testCubesDims.y / 2;

  // near cube
  testcube2.position.x = bedXtoScene(0) - testCubesDims.x / 2;
  testcube2.position.y = bedYtoScene(0) - testCubesDims.y / 2;
  testcube2.position.z = testCubesDims.y / 2;

  console.log(
    `Test cube position: ${JSON.stringify(testcube2.position, null, 2)}`
  );

  printGroup.add(testcube2);
  printGroup.add(testcube);

  bedGroup.add(printGroup);
  bedGroup.add(lightGroup);

  scene.background = new Color(0x0f0f0f);

  const grid3D = new GridHelper(
    sceneWidth(),
    Math.round(lp.maxx / 5),
    0x444444,
    0x222222
  );
  grid3D.scale.set(1, lp.maxy / lp.maxx, 1);

  grid3D.name = "ref-grid";
  bedGroup.add(grid3D);

  grid3D.rotateX(PI / 2);
  // TOGGLE
  // grid.visible = false;

  const cameras = new Group();
  // center on scene
  // cameras.translateX(sceneWidth()/2);
  // cameras.translateY(sceneHeight()/2);

  let zoom = 4/5;

  let _viewX = 0;
  let _viewY = 1/8;
  let _viewWidth = 1;
  let _viewHeight = 1;

  function viewX() {
    return sceneWidth() * _viewX;
  }

  function viewY() {
    return sceneHeight() * _viewY;
  }

  function viewWidth() {
    return _viewWidth * sceneWidth();
  }

  function viewHeight() {
    return _viewHeight * sceneHeight();
  }


  // setup camera -----------------------------------
  const camera = new OrthographicCamera(
    (-zoom * sceneWidth()) / 2, // left
    (zoom * sceneWidth()) / 2, // right
    (zoom * sceneHeight()) / 2, // top
    (-zoom * sceneHeight()) / 2, // bottom
    0, //near
    sceneWidth() * 100 // far
  );


  function updateCamera()
  {
    camera.left = -zoom*(viewWidth()/ 2 + viewX());
    camera.right = zoom*(viewWidth() / 2 - viewX());
    camera.top = zoom*(viewHeight() / 2 - viewY());
    camera.bottom = -zoom*(viewHeight() / 2 + viewY());
    camera.updateProjectionMatrix();
  }

  updateCamera();

  /**
   * set zoom level
   * @param {Float} z Zoom level from 0-1
   */
  export_funcs.setZoom = (z) => {
    zoom = 1 - Math.max(0, Math.min(z, 1));
    updateCamera();
  };

  // export_funcs.setViewX = (vx) => viewX = sceneWidth()*vx*zoom;
  // export_funcs.setViewY = (vy) => viewY = sceneHeight()*vy*zoom;
  // export_funcs.setViewWidth = (vw) => viewWidth = sceneWidth()*vw*zoom;
  // export_funcs.setViewHeight = (vh) => viewHeight = sceneHeight()*vh*zoom;

  export_funcs.setViewX = (vx) => {_viewX = vx; updateCamera();};
  export_funcs.getViewX = () => (_viewX); 

  export_funcs.setViewY = (vy) => {_viewY = vy; updateCamera();};
  export_funcs.getViewY = () => (_viewY); 

  export_funcs.setViewWidth = (vw) => {_viewWidth = vw; updateCamera();};
  export_funcs.getViewwidth = () => (_viewWidth); 

  export_funcs.setViewHeight = (vh) => {_viewHeight = vh; updateCamera();};
  export_funcs.getViewHeight = () => (_viewHeight); 


  let _closeFactor = 30;

  const closeCamera = new OrthographicCamera(
    -sceneWidth() / _closeFactor, // left
    sceneWidth() / _closeFactor, // right
    sceneHeight() / _closeFactor, // top
    -sceneHeight() / _closeFactor, // bottom
    0.01, //near
    2000 // far
  );

  function closeFactor(f) {
    _closeFactor = f;
    closeCamera.left = -sceneWidth() / _closeFactor;
    closeCamera.right = sceneWidth() / _closeFactor;
    closeCamera.top = sceneHeight() / _closeFactor;
    closeCamera.bottom = -sceneHeight() / _closeFactor;
    closeCamera.updateProjectionMatrix();
  }

  export_funcs.closeFactor = closeFactor;

  cameras.add(camera, closeCamera);
  bedGroup.add(cameras);

  const controls = new OrbitControls(camera, renderer.domElement);

  // camera.zoom = 0.2;
  camera.up.set(0, 0, 1);
  camera.position.set(
    bedXtoScene(-3 * lp.maxx),
    bedYtoScene(-3 * lp.maxy),
    bedZtoScene(2 * lp.maxz)
  );
  camera.lookAt(
    bedXtoScene(lp.maxx / 2) + sceneWidth() / 2,
    bedYtoScene(lp.maxy / 2) + sceneHeight() / 2,
    bedZtoScene(0)
  );

  // camera.zoom = 0.2;
  closeCamera.up.set(0, 0, 1);
  closeCamera.position.set(
    bedXtoScene(2 * lp.maxx),
    bedYtoScene(2 * lp.maxy),
    bedZtoScene(lp.maxz / 2)
  );
  closeCamera.lookAt(
    bedXtoScene(lp.minx / 2) + sceneWidth() / 2,
    bedYtoScene(lp.miny / 2) + sceneHeight() / 2,
    bedZtoScene(0)
  );

  controls.dampingFactor = 0.1;
  controls.maxPolarAngle = PI;
  controls.minPolarAngle = PI / 2;
  controls.minAzimuthAngle = -PI / 2;
  controls.maxAzimuthAngle = 0.001;
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled

  //   controls.update();

  // end setup camera -----------------------------------

  // const stats = new Stats();
  // container.appendChild(stats.dom);

  //renderer.autoClearColor = false;

  // setup lights
  (() => {
    const color = 0xffffff;
    const intensity = 1.0;
    const light = new PointLight(color, intensity, 3 * sceneWidth(), 0.8);
    light.position.set(
      bedXtoScene(lp.maxx / 2),
      bedYtoScene(-lp.maxy),
      bedZtoScene(lp.maxx / 2)
    );
    lightGroup.add(light);

    // to visualise light pos
    // const l2 = new SphereGeometry(8,4,4);
    // const l2mat = new MeshBasicMaterial();
    // const l2mesh = new Mesh(l2,l2mat);
    // l2mesh.position.copy(light.position);
    // lightGroup.add(l2mesh);

    const light2 = new PointLight(color, intensity, sceneWidth(), 0.2);
    light2.position.set(
      bedXtoScene(lp.maxx / 2),
      bedYtoScene(lp.maxy / 2),
      bedZtoScene(lp.maxx / 4)
    );
    lightGroup.add(light2);

    lightGroup.add(new AmbientLight(color, 0.2));
  })();

  // take coordinates from printer events and translate to points on screen
  const eventHandler = makePrinterEventHandler({
    x: bedXtoScene,
    y: bedYtoScene,
    z: bedZtoScene,
    delay: props.delay,
    debug: props.debug,
  });

  export_funcs.eventHandler = eventHandler;

  lp.addPrintListener(eventHandler);
  lp.addErrorListener(eventHandler);
  lp.addGCodeListener(eventHandler);

  const camPrintHandler = {
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
      switch (type) {
        case "extrude":
        case "travel":
          {
            closeCamera.position.set(
              bedXtoScene(lp.maxx) - sceneWidth() / 2,
              bedYtoScene(lp.maxy) - sceneHeight() / 2,
              bedZtoScene(newPosition.z + lp.maxz / 8)
            );
            // console.log(`${JSON.stringify(newPosition,null, 2)}`);
            closeCamera.lookAt(
              bedXtoScene(newPosition.x) + sceneWidth() / 2,
              bedYtoScene(newPosition.y) + sceneHeight() / 2,
              bedZtoScene(newPosition.z)
            );
          }
          break;
      }
    },
  };

  lp.addPrintListener(camPrintHandler);

  /**
   * TODO: debounce this
   */
  function onWindowResize() {
    const oldAspect = camera.aspect;

    // TODO: update all points based on new aspect

    camera.aspect = sceneWidth() / sceneHeight();
    camera.updateProjectionMatrix();

    closeCamera.aspect = camera.aspect;

    closeFactor(_closeFactor);

    geometry.size = sceneWidth() / 20;
    geometry.height = sceneWidth() / 24;
    geometry.computeBoundingBox();

    renderer.setSize(sceneWidth(), sceneHeight());
  }

  // TODO: did we need these? Why?
  //window.removeEventListener("resize", onWindowResize);
  //window.addEventListener("resize", onWindowResize);

  const loader = new FontLoader();

  // Make title
  const font = loader.parse(helvetiker_regular_typeface);

  const geometry = new TextGeometry(props.title ? props.title : "LivePrinter", {
    font: font,
    size: sceneWidth() / 20,
    height: sceneWidth() / 24,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 2,
    transparent: true,
    opacity: 0.2,
  });
  geometry.computeBoundingBox();
  //geometry.boundingBox.getCenter(mesh.position).multiplyScalar(- 1);

  const hue = 0.74;
  const saturation = 0.8;
  const luminance = 0.3;

  const meshMaterial = new MeshPhongMaterial({
    side: DoubleSide,
    opacity: 0.8,
    transparent: true,
  });
  meshMaterial.color.setHSL(hue, saturation, luminance);

  const mesh = new Mesh(geometry, meshMaterial);
  mesh.scale.setComponent(2, 2.5);

  const parent = new Object3D();
  parent.add(mesh);
  HUDObject.add(parent);

  // GO!
  let startTime = 0,
    previousTime = 0;

  // set up initial animation frame and start animating
  // requestAnimationFrame((timestamp) => {
  //     startTime = previousTime = timestamp;
  //     requestAnimationFrame(draw);
  // });

  let closeViewX = (sceneWidth() * 4) / 5;
  let closeViewY = (sceneHeight() * 4) / 5;
  let closeViewWidth = (sceneWidth() * 1) / 5;
  let closeViewHeight = (sceneHeight() * 1) / 5;

  export_funcs.setCloseViewX = (vx) => (closeViewX = sceneWidth() * vx);
  export_funcs.setCloseViewY = (vy) => (closeViewY = sceneHeight() * vy);
  export_funcs.setCloseViewWidth = (vw) => (closeViewWidth = sceneWidth() * vw);
  export_funcs.setCloseViewHeight = (vh) =>
    (closeViewHeight = sceneHeight() * vh);

/**
 * DRAW
 * @param {BigInteger} timestamp 
 */
  function draw(timestamp) {
    //startTime = previousTime = timestamp;

    // controls.update();

    // top, bottom, width, height
    renderer.setViewport(0, 0, sceneWidth(), sceneHeight());
    renderer.setScissor(0, 0, sceneWidth(), sceneHeight());
    renderer.setScissorTest(true);
    renderer.setClearColor(new Color().setRGB(0, 0, 0, SRGBColorSpace));
    renderer.render(scene, camera);

    renderer.setViewport(
      closeViewX,
      closeViewY,
      closeViewWidth,
      closeViewHeight
    );
    renderer.setScissor(
      closeViewX,
      closeViewY,
      closeViewWidth,
      closeViewHeight
    );
    renderer.setScissorTest(true);

    renderer.setClearColor(new Color().setRGB(0, 0, 0, SRGBColorSpace));
    renderer.render(scene, closeCamera);

    //requestAnimationFrame(draw);
  }

  window.addEventListener("resize", onWindowResize);
  renderer.setAnimationLoop(draw);

  return export_funcs;
}
