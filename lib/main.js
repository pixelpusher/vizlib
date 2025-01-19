
import {
    Scene,
    Group,
    Object3D,
    Mesh,
    BoxGeometry,
    GridHelper,
    Color,
    DoubleSide,
    PointLight,
    AmbientLight,
    MeshPhongMaterial,
    WebGLRenderer,
    OrthographicCamera
} from "three";

import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

import { helvetiker_regular_typeface } from "../fonts/helvetiker_regular.typeface.js";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import {
    makeExtrudeLineSegments,
    makeTravelLineSegments,
    makePrinterEventHandler,
    makePrintHeadMarker,
    getGcode
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
export function makeVisualiser(lp, domElementID, props = { title: "LivePrinter", delay: true }) {
    /**
     * Functions that we might need to do things later, like bedXToScreen
     */
    const export_funcs = {};

    function sceneWidth() {
        return window.innerWidth;
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

    /**
     * Expose method for downloading GCode, in progress or at end
     */
    function downloadGCode(filename = "lines.gcode") {
        const GCode = GCODE_HEADER[lp.model].join('\n') + '\n' + getGcode();
        const urlGcode = URL.createObjectURL(
            new Blob([GCode], { type: "text" })
        );
        const aGcode = document.createElement("a");
        aGcode.href = urlGcode;
        aGcode.download = filename;
        aGcode.click();
    };

    export_funcs.downloadGCode =  downloadGCode;

    // setup renderer -----------------------------------
    const container = document.getElementById(domElementID);

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
    // lineSegmentsExtrude.computeLineDistances();

    const printHeadMarker = makePrintHeadMarker();

    const scene = new Scene();
    const HUDObject = new Object3D();

    HUDObject.translateX(-sceneWidth());
    HUDObject.translateY(-sceneHeight() / 2);
    HUDObject.rotateX(PI / 2);
    // HUDObject.rotateY(-PI / 4);
    //HUDObject.translateX(-sceneWidth() / 2);
    HUDObject.translateY(2*sceneHeight() / 3);

    const bedGroup = new Group();
    const printGroup = new Group();
    const lightGroup = new Group();

    scene.add(HUDObject);

    printGroup.add(lineSegmentsTravel);
    printGroup.add(lineSegmentsExtrude);
    printGroup.add(printHeadMarker);

    const testCubesDims = {x: sceneWidth() / 40, y:sceneWidth() / 60};

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



    // setup camera -----------------------------------
    const camera = (() => {
        const near = -sceneWidth() / 2;
        const far = sceneWidth() * 1.25;
        const sizeY = sceneHeight() * 1.25;
        return new OrthographicCamera(
            -far / 2,
            far / 2,
            sizeY / 2,
            -sizeY / 2,
            near,
            far * 2
        );
    })();

    const controls = new OrbitControls( camera, renderer.domElement );

    // camera.zoom = 0.2;
    camera.up.set(0, 0, 1);
    camera.position.set(
        bedXtoScene(0),
        bedYtoScene(0),
        bedZtoScene(lp.maxx / 2)
    );
    camera.lookAt(bedXtoScene(lp.maxx / 2), bedYtoScene(lp.maxy / 2), bedZtoScene(0));
    controls.dampingFactor = 0.1;
    controls.maxPolarAngle = PI;
    controls.minPolarAngle = PI/2;
    controls.minAzimuthAngle = -PI/2;
    controls.maxAzimuthAngle = 0.001;
	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.update();

    // end setup camera -----------------------------------


    // const stats = new Stats();
    // container.appendChild(stats.dom);

    //renderer.autoClearColor = false;

    // setup lights
    (() => {
        const color = 0xffffff;
        const intensity = 1.0;
        const light = new PointLight(color, intensity, 3 * sceneWidth(), 0.8);
        light.position.set(bedXtoScene(lp.maxx/2), bedYtoScene(-lp.maxy), bedZtoScene(lp.maxx/2));
        lightGroup.add(light);

        // to visualise light pos
        // const l2 = new SphereGeometry(8,4,4);
        // const l2mat = new MeshBasicMaterial();
        // const l2mesh = new Mesh(l2,l2mat);
        // l2mesh.position.copy(light.position);
        // lightGroup.add(l2mesh);

        const light2 = new PointLight(color, intensity, sceneWidth(), 0.2);
        light2.position.set(bedXtoScene(lp.maxx/2), bedYtoScene(lp.maxy/2), bedZtoScene(lp.maxx/4));
        lightGroup.add(light2);

        lightGroup.add(new AmbientLight(color, 0.2));
    })();

    // take coordinates from printer events and translate to points on screen
    const eventHandler = makePrinterEventHandler({
        x: bedXtoScene,
        y: bedYtoScene,
        z: bedZtoScene,
        delay: props.delay,
        debug: props.debug
    });

    export_funcs.eventHandler = eventHandler;

    lp.addPrintListener(eventHandler);
    lp.addErrorListener(eventHandler);
    lp.addGCodeListener(eventHandler);

    function onWindowResize() {
        camera.aspect = lp.maxx / lp.maxy;
        camera.updateProjectionMatrix();

        renderer.setSize(sceneWidth(), sceneHeight());
    }

    window.removeEventListener("resize", onWindowResize);
    window.addEventListener("resize", onWindowResize);

    const loader = new FontLoader();

    // Make title
    const font = loader.parse(
        helvetiker_regular_typeface
    );

    const geometry = new TextGeometry(props.title ? props.title : "LivePrinter", {
        font: font,
        size: sceneWidth() / 20,
        height: sceneWidth() / 24,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.10,
        bevelSize: 0.1,
        bevelSegments: 2,
    });
    geometry.computeBoundingBox();
    //geometry.boundingBox.getCenter(mesh.position).multiplyScalar(- 1);

    const hue = 0.74;
    const saturation = 0.8;
    const luminance = 0.3;

    const meshMaterial = new MeshPhongMaterial({
        side: DoubleSide,
        opacity: 0.8,
        transparent: true
    });
    meshMaterial.color.setHSL(hue, saturation, luminance);

    const mesh = new Mesh(geometry, meshMaterial);
    mesh.scale.setComponent(2,2.5);


    const parent = new Object3D();
    parent.add(mesh);
    HUDObject.add(parent);


    // GO!
    let startTime = 0,
        previousTime = 0;

    // set up initial animation frame and start animating
    requestAnimationFrame((timestamp) => {
        startTime = previousTime = timestamp;
        requestAnimationFrame(draw);
    });

    function draw(timestamp) {
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(draw);
    }

    return export_funcs;
}