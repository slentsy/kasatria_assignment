import * as THREE from 'three';

import TWEEN from 'three/addons/libs/tween.module.js';

import { TrackballControls } from 'three/addons/controls/TrackballControls.js'; 

import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

let camera;
let scene; 
let renderer; 
let controls; 

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
camera.position.z = 3000; 

renderer = new CSS3DRenderer();

renderer.setSize(
    window.innerWidth, 
    window.innerHeight
)

document.getElementById('container').appendChild(renderer.domElement);

const square = document.createElement('div');

square.className = "element";

square.textContent = "Hello three.js"

const objectCss = new CSS3DObject(element);

objectCss.position.x = 0;
objectCss.position.y = 0;
objectCss.position.z = 0;

scene.add(objectCss);

controls = new TrackballControls(camera, renderer.domElement);

controls.minDistance = 500;
controls.maxDistance = 6000; 

function animate(){
    requestAnimationFrame(animate);

    controls.update();
    render();
}

function render(){
    renderer.render(scene, camera);
}

animate();



