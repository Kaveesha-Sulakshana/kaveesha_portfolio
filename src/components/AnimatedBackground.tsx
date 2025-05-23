import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    // Create gradient waves
    const geometry = new THREE.PlaneGeometry(20, 20, 100, 100);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: {
          value: 0
        },
        colorA: {
          value: new THREE.Color('#6EC6B0')
        },
        colorB: {
          value: new THREE.Color('#30382F')
        }
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vWave;
        uniform float time;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float wave = sin(pos.x * 2.0 + time) * 0.1;
          wave += sin(pos.y * 2.0 + time) * 0.1;
          pos.z += wave;
          vWave = wave;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vWave;
        uniform vec3 colorA;
        uniform vec3 colorB;
        void main() {
          vec3 color = mix(colorA, colorB, vUv.y + vWave);
          gl_FragColor = vec4(color, 0.5);
        }
      `,
      transparent: true
    });
    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI * 0.5;
    waves.position.y = -2;
    scene.add(waves);
    camera.position.z = 5;
    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.time.value = elapsedTime * 0.5;
      waves.rotation.z = elapsedTime * 0.05;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);
  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-50" />;
};