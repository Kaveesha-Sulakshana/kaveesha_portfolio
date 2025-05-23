import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export const DnaAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    resize();
    // DNA Structure
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);
    // Create helix strands
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, -2, 0), new THREE.Vector3(0, 2, 0)]);
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    // Create particles for the helix
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const tealColor = new THREE.Color('#6EC6B0');
    const darkColor = new THREE.Color('#30382F');
    for (let i = 0; i < particlesCount; i++) {
      const t = i / particlesCount;
      const angle = t * Math.PI * 8;
      const radius = 0.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = t * 4 - 2;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      const color = i % 2 === 0 ? tealColor : darkColor;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    dnaGroup.add(particles);
    // Add connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6ec6b0,
      transparent: true,
      opacity: 0.3
    });
    for (let i = 0; i < particlesCount; i += 2) {
      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array(6);
      linePositions[0] = positions[i * 3];
      linePositions[1] = positions[i * 3 + 1];
      linePositions[2] = positions[i * 3 + 2];
      linePositions[3] = positions[(i + 1) * 3];
      linePositions[4] = positions[(i + 1) * 3 + 1];
      linePositions[5] = positions[(i + 1) * 3 + 2];
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      const line = new THREE.Line(lineGeometry, lineMaterial);
      dnaGroup.add(line);
    }
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    // Add point light
    const pointLight = new THREE.PointLight(0x6ec6b0, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);
    camera.position.z = 4;
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      dnaGroup.rotation.y += 0.005;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.remove(dnaGroup);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{
    maxWidth: '100%',
    overflow: 'hidden'
  }} />;
};