import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import helvetiker from './helvetiker_regular.typeface.json';


export const DnaAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    containerRef.current.appendChild(renderer.domElement);
    resize();

    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    const particlesCount = 200;
    const radius = 0.5;
    const height = 4;

    const positions1 = new Float32Array(particlesCount * 3);
    const positions2 = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const tealColor = new THREE.Color('#6EC6B0');
    const darkColor = new THREE.Color('#30382F');

    for (let i = 0; i < particlesCount; i++) {
      const t = i / particlesCount;
      const angle = t * Math.PI * 8;

      const x1 = Math.cos(angle) * radius;
      const y = t * height - height / 2;
      const z1 = Math.sin(angle) * radius;

      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      positions1.set([x1, y, z1], i * 3);
      positions2.set([x2, y, z2], i * 3);

      const color = i % 2 === 0 ? tealColor : darkColor;
      colors.set([color.r, color.g, color.b], i * 3);
    }

    const geometry1 = new THREE.BufferGeometry();
    geometry1.setAttribute('position', new THREE.BufferAttribute(positions1, 3));
    geometry1.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const geometry2 = new THREE.BufferGeometry();
    geometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));
    geometry2.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    dnaGroup.add(new THREE.Points(geometry1, material));
    dnaGroup.add(new THREE.Points(geometry2, material));

    // Connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x6ec6b0, transparent: true, opacity: 0.3 });
    for (let i = 0; i < particlesCount; i++) {
      const lineGeo = new THREE.BufferGeometry();
      const linePos = new Float32Array(6);
      linePos.set(positions1.slice(i * 3, i * 3 + 3), 0);
      linePos.set(positions2.slice(i * 3, i * 3 + 3), 3);
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
      dnaGroup.add(new THREE.Line(lineGeo, lineMaterial));
    }

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(0x6ec6b0, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    camera.position.z = 4;

    dnaGroup.rotation.x = 0.5; // tilt forward
    dnaGroup.rotation.z = -0.5; // tilt slightly to the right
    dnaGroup.scale.set(1.4, 1.4, 1.4); // increase size


    // Add floating text (e.g., "JavaScript", "React", "Three.js")

const font = new FontLoader().parse(helvetiker);

const keywords = ['JavaScript', 'React', 'Three.js', 'Adobe', 'HTML', 'CSS'];
keywords.forEach((word, i) => {
  const textGeo = new TextGeometry(word, {
    font,
    size: 0.09,
    depth: 0.02,
  });
  const textMat = new THREE.MeshBasicMaterial({ color: 0x6EC6B0 });
  const text = new THREE.Mesh(textGeo, textMat);
  const angle = (i / keywords.length) * Math.PI * 2;
  text.position.set(Math.cos(angle) * 1.2, (i - 2) * 0.4, Math.sin(angle) * 1.2);
  text.rotation.y = angle;
  text.userData.angle = angle;
  text.userData.index = i;
  dnaGroup.add(text);
});


    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      dnaGroup.rotation.y += 0.004;

      dnaGroup.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.geometry instanceof TextGeometry) {
          const angle = child.userData.angle += 0.005;
          const index = child.userData.index;
          child.position.x = Math.cos(angle) * 1;
          child.position.z = Math.sin(angle) * 1;
          child.rotation.y = -angle;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ maxWidth: '100%', overflow: 'hidden' }} />;
};
