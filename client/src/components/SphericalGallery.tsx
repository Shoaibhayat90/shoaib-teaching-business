import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import Lenis from 'lenis';

interface GalleryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

interface SphericalGalleryProps {
  cards: GalleryCard[];
  onCardClick?: (card: GalleryCard) => void;
}

export const SphericalGallery: React.FC<SphericalGalleryProps> = ({ cards, onCardClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Group | null>(null);
  const cardsRef = useRef<THREE.Mesh[]>([]);
  const lenisRef = useRef<Lenis | null>(null);

  // Mouse interaction state
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // ============ SCENE SETUP ============
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ============ LIGHTING ============
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    pointLight.castShadow = true;
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xff6b5b, 0.4);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // ============ SPHERE GROUP ============
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);
    sphereRef.current = sphereGroup;

    // ============ CREATE CARDS ON SPHERE ============
    const cardMeshes: THREE.Mesh[] = [];
    const sphereRadius = 3;
    const cardCount = cards.length;

    cards.forEach((card, index) => {
      // Distribute cards evenly on sphere using fibonacci sphere algorithm
      const phi = Math.acos(-1 + (2 * index) / cardCount);
      const theta = Math.sqrt(cardCount * Math.PI) * phi;

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      // Create card geometry
      const cardGeometry = new THREE.PlaneGeometry(1.2, 1.5);
      
      // Create canvas texture for card
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 640;
      const ctx = canvas.getContext('2d')!;

      // Background
      ctx.fillStyle = card.color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

      // Add semi-transparent overlay for better text readability
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(20, 30, canvas.width - 40, canvas.height - 60);

      // Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(card.title, canvas.width / 2, 80);

      // Description
      ctx.font = 'bold 18px Arial';
      ctx.fillStyle = '#ffffff';
      const words = card.description.split(' ');
      let line = '';
      let y_offset = 150;

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > canvas.width - 40) {
          ctx.fillText(line, canvas.width / 2, y_offset);
          line = words[i] + ' ';
          y_offset += 25;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, canvas.width / 2, y_offset);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.3,
        roughness: 0.7,
        emissive: new THREE.Color(card.color),
        emissiveIntensity: 0.1,
      });

      const cardMesh = new THREE.Mesh(cardGeometry, material);
      cardMesh.position.set(x, y, z);
      cardMesh.lookAt(0, 0, 0);
      cardMesh.castShadow = true;
      cardMesh.receiveShadow = true;
      cardMesh.userData = { card, index };

      sphereGroup.add(cardMesh);
      cardMeshes.push(cardMesh);
    });

    cardsRef.current = cardMeshes;

    // ============ LENIS SMOOTH SCROLL ============
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    } as any);

    lenisRef.current = lenis;

    // ============ MOUSE CONTROLS ============
    const onMouseDown = (e: MouseEvent) => {
      dragRef.current.isDragging = true;
      dragRef.current.startX = e.clientX;
      dragRef.current.startY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (dragRef.current.isDragging) {
        const deltaX = e.clientX - dragRef.current.startX;
        const deltaY = e.clientY - dragRef.current.startY;

        mouseRef.current.targetX += deltaX * 0.005;
        mouseRef.current.targetY += deltaY * 0.005;

        dragRef.current.startX = e.clientX;
        dragRef.current.startY = e.clientY;
      }
    };

    const onMouseUp = () => {
      dragRef.current.isDragging = false;
    };

    const onMouseWheel = (e: WheelEvent) => {
      mouseRef.current.targetY += e.deltaY * 0.001;
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onMouseWheel, { passive: true });

    // ============ RAYCASTER FOR CLICK DETECTION ============
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClickHandler = (e: MouseEvent) => {
      if (dragRef.current.isDragging) return; // Ignore if dragging

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cardMeshes);

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object as THREE.Mesh;
        const cardData = clickedMesh.userData.card as GalleryCard;

        // Animate card to center
        gsap.to(clickedMesh.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: 'power2.inOut',
        });

        gsap.to(clickedMesh.scale, {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          duration: 1,
          ease: 'power2.inOut',
        });

        // Call callback after animation
        setTimeout(() => {
          if (onCardClick) {
            onCardClick(cardData);
          }
        }, 1000);
      }
    };

    renderer.domElement.addEventListener('click', onClickHandler);

    // ============ ANIMATION LOOP ============
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation with easing
      rotationRef.current.x += (mouseRef.current.targetY - rotationRef.current.x) * 0.1;
      rotationRef.current.y += (mouseRef.current.targetX - rotationRef.current.y) * 0.1;

      if (sphereGroup) {
        sphereGroup.rotation.x = rotationRef.current.x;
        sphereGroup.rotation.y = rotationRef.current.y;
      }

      // Update Lenis
      lenis.raf(Date.now());

      renderer.render(scene, camera);
    };

    animate();

    // ============ HANDLE WINDOW RESIZE ============
    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onWindowResize);

    // ============ CLEANUP ============
    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('wheel', onMouseWheel);
      renderer.domElement.removeEventListener('click', onClickHandler);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      lenis.destroy();
    };
  }, [cards, onCardClick]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950"
      style={{ cursor: 'grab' }}
    />
  );
};
