import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.150.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.150.1/examples/jsm/loaders/GLTFLoader.js';

const viewer = document.getElementById('viewer');
let scene, camera, renderer, controls;

function initViewer() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, viewer.clientWidth / viewer.clientHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(viewer.clientWidth, viewer.clientHeight);
  viewer.innerHTML = '';
  viewer.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  camera.position.z = 3;

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

document.getElementById('loadGLB').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.glb';
  input.onchange = e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const loader = new GLTFLoader();
    loader.load(url, gltf => {
      scene.add(gltf.scene);
    });
  };
  input.click();
});

// Init viewer on load
initViewer();
