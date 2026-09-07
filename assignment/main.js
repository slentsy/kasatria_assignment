import * as THREE from 'three';

import TWEEN from 'three/addons/libs/tween.module.js';

import { TrackballControls } from 'three/addons/controls/TrackballControls.js'; 

import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
// import { color } from 'three/src/nodes/tsl/TSLCore.js';

let camera;
let scene; 
let renderer; 
let controls; 

const objects = [];

const targets = {
    table:[],
    sphere: [],
    helix:[], 
    grid:[]
}

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
camera.position.z = 5000; 

renderer = new CSS3DRenderer();

renderer.setSize(
    window.innerWidth, 
    window.innerHeight
)

document.getElementById('container').appendChild(renderer.domElement);

let people = [];

function createTile(person, index){
    
    const square = document.createElement('div');

    square.className = "element";

    if (person.netWorth < 100000){
        square.style.backgroundColor = "red"
    } else if (person.netWorth <= 200000){
        square.style.backgroundColor = "orange"
    } else {
        square.style.backgroundColor = "green"
    }

    square.innerHTML = `
        <img class="photo" src="${person.photo}" alt="${person.name}">
        <div class="name">${person.name}</div>
        <div class="age">${person.age}</div>
        <div class="country">${person.country}</div>
        <div class="interest">${person.interest}</div>
        <div class="netWorth">${person.netWorth}</div>
    `

    const objectCss = new CSS3DObject(square);
    const column = index % 20; 
    const row = Math.floor(index/20);

    objectCss.position.x = column * 150 - 1425;
    objectCss.position.y = -row * 320 + 1440;
    objectCss.position.z = 0;

    scene.add(objectCss);
    objects.push(objectCss);

    const tableTarget = new THREE.Object3D();

    tableTarget.position.x = column * 150 - 1425;
    tableTarget.position.y = -row * 320 + 1440;
    tableTarget.position.z = 0;

    targets.table.push(tableTarget);
}

controls = new TrackballControls(camera, renderer.domElement);

controls.minDistance = 500;
controls.maxDistance = 6000;
controls.target.set(0,0,0);

function animate(){
    requestAnimationFrame(animate);

    TWEEN.update();
    controls.update();
    render();
}

function render(){
    renderer.render(scene, camera);
}

function transform(targets, duration){
    TWEEN.removeAll();

    for ( let i = 0; i < objects.length; i ++ ) {
        
        const object = objects[ i ];
		const target = targets[ i ];

		new TWEEN.Tween(object.position).to({ 
            x: target.position.x, 
            y: target.position.y, 
            z: target.position.z 
        }, 
        Math.random() * duration + duration).easing(TWEEN.Easing.Exponential.InOut).start();

		new TWEEN.Tween(object.rotation).to({ 
            x: target.rotation.x, 
            y: target.rotation.y, 
            z: target.rotation.z 
        }, 
        Math.random() * duration + duration).easing(TWEEN.Easing.Exponential.InOut).start();

	}

    
}

// Auth Goole 
const CLIENT_ID = '594045206423-vf9jtit7ondi1o91j05r57jqcpadbi23.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

let client; 

window.onGoogleLibraryLoad = () =>{
    client = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID, 
        scope: SCOPES, 
        callback: onTokenResponse 
    });

    client.requestAccessToken({
        prompt: ''
    })
}

const layoutButtons = document.getElementById('layout-buttons')
const authControls = document.getElementById('auth-controls');
const googleLoginButton = document.getElementById('google-login');
const tableButton = document.getElementById('table-button') 
const sphereButton = document.getElementById('sphere-button');
const helixButton = document.getElementById('helix-button');
const gridButton = document.getElementById('grid-button');

googleLoginButton.addEventListener('click', ()=> {
    client.requestAccessToken();
})

tableButton.addEventListener('click', ()=> {
    // client.requestAccessToken();
    transform(targets.table, 2000);
})

sphereButton.addEventListener('click', ()=> {
    // client.requestAccessToken();
    transform(targets.sphere, 2000);
})

helixButton.addEventListener('click', ()=> {
    // client.requestAccessToken();
    transform(targets.helix, 2000);
})

gridButton.addEventListener('click', ()=> {
    // client.requestAccessToken();
    transform(targets.grid, 2000);
})

// Spreadsheets
const SPREADSHEETS_ID = '1wYeH6s9TFiMBJkJglY_b8H0WlQyFifhMBrr1PpZfm3o';
const RANGE = 'Data Template.csv!A1:F201';

function onTokenResponse(response){

    const accessToken = response.access_token;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEETS_ID}/values/${encodeURIComponent(RANGE)}`

    fetch(url,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    }).then((response) => response.json()).then((data) => {

        const values = data.values; 

        people = values.slice(1).map((row) =>{
            return{
                name: row[0], 
                photo:row[1], 
                age:Number(row[2]),
                country: row[3], 
                interest:row[4], 
                netWorth:Number(row[5].replace(/[$,]/g, ''))
            };
        }); 

        let index = 0;

        //membuat personnya
        for (const person of people){
            createTile(person, index);
            index++;
        }

        // sphere
        const vector = new THREE.Vector3();

        for(let i = 0, l = objects.length; i < l; i ++) {
            
            const phi = Math.acos( - 1 + ( 2 * i ) / l );
            const theta = Math.sqrt( l * Math.PI ) * phi;
            const object = new THREE.Object3D();

            object.position.setFromSphericalCoords(1300, phi, theta);

            vector.copy(object.position).multiplyScalar(2);

            object.lookAt(vector);

            targets.sphere.push(object);
        }

        // helix 
        for ( let i = 0, l = objects.length; i < l; i ++ ) {
            
            const theta = i * 0.175 + Math.PI;
			const y = - ( i * 8 ) + 450;

			const object = new THREE.Object3D();

			object.position.setFromCylindricalCoords( 900, theta, y );

			vector.x = object.position.x * 2;
			vector.y = object.position.y;
			vector.z = object.position.z * 2;

			object.lookAt( vector );

			targets.helix.push( object );

		}

        // grid 
        for ( let i = 0; i < objects.length; i ++ ) {

			const object = new THREE.Object3D();

			object.position.x = ( ( i % 5 ) * 400 ) - 800;
			object.position.y = ( - ( Math.floor( i / 5 ) % 4) * 400) + 800;
			object.position.z = ( Math.floor( i / 20 ) ) * 1000 - 2000;

			targets.grid.push( object );

		}

        // disable button
        tableButton.disabled = false;
        sphereButton.disabled = false;
        helixButton.disabled = false; 
        gridButton.disabled = false;

        // display 
        layoutButtons.style.display = 'flex';

        // none authControls
        authControls.style.display = 'none';

        // none login 
        googleLoginButton.style.display = 'none';

    }).catch((error) => {
        console.error(error);
    });
}

animate();



