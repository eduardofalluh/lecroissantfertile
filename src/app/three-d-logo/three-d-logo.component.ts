import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls

@Component({
  selector: 'app-three-d-logo',
  templateUrl: './three-d-logo.component.html',
  styleUrls: ['./three-d-logo.component.scss']
})
export class ThreeDLogoComponent implements AfterViewInit {
  @ViewChild('logoContainer', { static: true }) logoContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private sphere!: THREE.Mesh;
  private controls!: OrbitControls; // Declare controls

  ngAfterViewInit() {
    this.initThreeJS();
    this.animate();
  }

  private initThreeJS(): void {
    const width = this.logoContainer.nativeElement.offsetWidth;
    const height = this.logoContainer.nativeElement.offsetHeight;

    // Create a scene
    this.scene = new THREE.Scene();

    // Create a camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 3; // Adjust camera position for better viewing

    // Create a renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true }); // transparent background
    this.renderer.setSize(width, height);
    this.logoContainer.nativeElement.appendChild(this.renderer.domElement);

    // Create a sphere geometry and a material with your logo as a texture
    const geometry = new THREE.SphereGeometry(1, 64, 64); // Smooth sphere
    const texture = new THREE.TextureLoader().load('assets/images/logo.png'); // Your logo path
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create a mesh with the geometry and material, and add it to the scene
    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    // Add OrbitControls for user interaction
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false; // Disable zoom if not desired
    this.controls.enableDamping = true; // Add damping (inertia) for smoother interaction
    this.controls.dampingFactor = 0.1; // Adjust as needed
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    // Rotate the sphere automatically (optional)
    this.sphere.rotation.y += 0.01;

    // Update the controls (required for damping to work)
    this.controls.update();

    // Render the scene from the perspective of the camera
    this.renderer.render(this.scene, this.camera);
  };
}
