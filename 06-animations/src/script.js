import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

console.log("gsap: ", gsap);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Time
let time = Date.now();

// Clock
const clock = new THREE.Clock();

// GSAP

gsap.to(mesh.position, { delay: 1, duration: 1, x: 2 });
gsap.to(mesh.position, { delay: 2, duration: 1, x: 0 });

// Animations
const tick = () => {
  //   Clock
//   const elapsedTime = clock.getElapsedTime();

//   // Update objects
//   camera.position.y = Math.sin(elapsedTime);
//   camera.position.x = Math.cos(elapsedTime);
//   camera.lookAt(mesh.position);

//   // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
