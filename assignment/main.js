import * as THREE from 'three';

import TWEEN from 'three/addons/libs/tween.module.js';

import { TrackballControls } from 'three/addons/controls/TrackballControls.js'; 

import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
// import { color } from 'three/src/nodes/tsl/TSLCore.js';

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
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    },
    {
        name: "Sophia Madlentsy Tambunan", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 25, 
        country: "CN", 
        interest: "Writing", 
        netWorth: 251260.8
    }, 
    {
        name: "New Yee Chian", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 23, 
        country: "CN", 
        interest: "Cooking", 
        netWorth: 60393.60
    }, 
    {
        name: "Wong Thiam Fook", 
        photo: "https://static.kasatria.com/pivot-img/photo/019.jpg", 
        age: 30, 
        country: "CN", 
        interest: "Travelling", 
        netWorth: 146174.4
    }
]

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

    objectCss.position.x = column * 150 - 1495;
    objectCss.position.y = -row * 320;
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

    console.log('Google Oauth Ready');
}

const googleLoginButton = document.getElementById('google-login'); 

googleLoginButton.addEventListener('click', ()=>{
    client.requestAccessToken();
})

// function onTokenResponse(response) {
//     console.log(response);
// }

// Spreadsheets
const SPREADSHEETS_ID = '1wYeH6s9TFiMBJkJglY_b8H0WlQyFifhMBrr1PpZfm3o';
const RANGE = 'Data Template.csv!A1:F201';

function onTokenResponse(response){
    console.log(response);

    const accessToken = response.access_token;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEETS_ID}/values/${encodeURIComponent(RANGE)}`

    fetch(url,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    }).then((response) => response.json()).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}

animate();



