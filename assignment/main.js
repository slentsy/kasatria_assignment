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

const people = [
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "Prabowo Subianto", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }
]

function createTile(person, index){
    const square = document.createElement('div');

    square.className = "element";

    square.innerHTML = `
        <img class="photo" src="${person.photo}" alt="${person.name}">
        <div class="name">${person.name}</div>
        <div class="age">${person.age}</div>
        <div class="country">${person.country}</div>
        <div class="interest">${person.interest}</div>
        <div class="netWorth">${person.netWorth}</div>
    `

    const objectCss = new CSS3DObject(square);

    objectCss.position.x = index * 250;
    objectCss.position.y = 0;
    objectCss.position.z = 0;

    scene.add(objectCss);
}

let index = 0;

//membuat personnya
for (const person of people){
    createTile(person, index);
    index++;
}

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



