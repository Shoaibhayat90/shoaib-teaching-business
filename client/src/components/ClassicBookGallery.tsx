import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import Lenis from 'lenis';

export interface GalleryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

interface ClassicBookGalleryProps {
  cards: GalleryCard[];
  onCardClick?: (card: GalleryCard) => void;
}

export function openBookCourseOutline(
  book: THREE.Group,
  onCardClick?: (card: GalleryCard) => void,
) {
  if (onCardClick) {
    onCardClick(book.userData.card as GalleryCard);
  }
}

export const ClassicBookGallery: React.FC<ClassicBookGalleryProps> = ({ cards, onCardClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Group | null>(null);
  const booksRef = useRef<THREE.Group[]>([]);
  const lenisRef = useRef<Lenis | null>(null);

  // Mouse interaction state
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const hoveredBookRef = useRef<THREE.Group | null>(null);
  const raycasterRef = useRef<THREE.Raycaster | null>(null);
  const mouseVectorRef = useRef<THREE.Vector2 | null>(null);

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    pointLight.castShadow = true;
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xd4af37, 0.3);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // ============ SPHERE GROUP ============
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);
    sphereRef.current = sphereGroup;

    // ============ CREATE CLASSIC BOOKS ON SPHERE ============
    const bookMeshes: THREE.Group[] = [];
    const sphereRadius = 3;
    const bookCount = cards.length;

    cards.forEach((card, index) => {
      // Distribute books evenly on sphere
      const phi = Math.acos(-1 + (2 * index) / bookCount);
      const theta = Math.sqrt(bookCount * Math.PI) * phi;

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      // Create book group
      const bookGroup = new THREE.Group();
      bookGroup.position.set(x, y, z);
      bookGroup.lookAt(0, 0, 0);
      bookGroup.userData = { card, index };

      // Book dimensions
      const bookWidth = 0.8;
      const bookHeight = 1.2;
      const bookDepth = 0.15;

      // ===== FRONT COVER =====
      const frontCoverGeometry = new THREE.PlaneGeometry(bookWidth, bookHeight);
      const frontCoverCanvas = createBookCoverTexture(card, bookWidth * 256, bookHeight * 256);
      const frontCoverTexture = new THREE.CanvasTexture(frontCoverCanvas);
      const frontCoverMaterial = new THREE.MeshStandardMaterial({
        map: frontCoverTexture,
        metalness: 0.1,
        roughness: 0.6,
      });
      const frontCover = new THREE.Mesh(frontCoverGeometry, frontCoverMaterial);
      frontCover.position.z = bookDepth / 2;
      frontCover.castShadow = true;
      frontCover.receiveShadow = true;
      bookGroup.add(frontCover);

      // ===== SPINE =====
      const spineGeometry = new THREE.PlaneGeometry(bookDepth, bookHeight);
      const spineMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(card.color).multiplyScalar(0.7),
        metalness: 0.05,
        roughness: 0.7,
      });
      const spine = new THREE.Mesh(spineGeometry, spineMaterial);
      spine.position.x = -bookWidth / 2;
      spine.position.z = 0;
      spine.rotation.y = Math.PI / 2;
      spine.castShadow = true;
      bookGroup.add(spine);

      // ===== BACK COVER =====
      const backCoverGeometry = new THREE.PlaneGeometry(bookWidth, bookHeight);
      const backCoverMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(card.color).multiplyScalar(0.8),
        metalness: 0.1,
        roughness: 0.6,
      });
      const backCover = new THREE.Mesh(backCoverGeometry, backCoverMaterial);
      backCover.position.z = -bookDepth / 2;
      backCover.rotation.y = Math.PI;
      backCover.castShadow = true;
      bookGroup.add(backCover);

      // ===== BOOK EDGES =====
      const edgeGeometry = new THREE.PlaneGeometry(bookWidth, bookDepth);
      const edgeMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a2a2a,
        metalness: 0,
        roughness: 0.8,
      });
      const topEdge = new THREE.Mesh(edgeGeometry, edgeMaterial);
      topEdge.position.y = bookHeight / 2;
      topEdge.rotation.x = Math.PI / 2;
      bookGroup.add(topEdge);

      const bottomEdge = new THREE.Mesh(edgeGeometry, edgeMaterial);
      bottomEdge.position.y = -bookHeight / 2;
      bottomEdge.rotation.x = Math.PI / 2;
      bookGroup.add(bottomEdge);

      sphereGroup.add(bookGroup);
      bookMeshes.push(bookGroup);
    });

    booksRef.current = bookMeshes;

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

      // Update mouse position for hover detection
      const mouse = mouseVectorRef.current!;
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
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

    // ============ RAYCASTER FOR CLICK & HOVER DETECTION ============
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    raycasterRef.current = raycaster;
    mouseVectorRef.current = mouse;

    const onClickHandler = (e: MouseEvent) => {
      if (dragRef.current.isDragging) return;

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(bookMeshes, true);

      if (intersects.length > 0) {
        let clickedBook: THREE.Group | null = null;
        for (let obj: any = intersects[0].object; obj; obj = obj.parent) {
          if (bookMeshes.includes(obj)) {
            clickedBook = obj;
            break;
          }
        }

        if (clickedBook) {
          // Open the course outline modal immediately. The 3D book remains in
          // the sphere, so clicking does not move, scale, or open the book.
          openBookCourseOutline(clickedBook, onCardClick);
        }
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

      // ============ HOVER GLOW EFFECT ============
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(bookMeshes, true);

      if (hoveredBookRef.current && intersects.length === 0) {
        const frontCover = hoveredBookRef.current.children[0] as THREE.Mesh;
        const material = frontCover.material as THREE.MeshStandardMaterial;
        gsap.to(material, {
          emissiveIntensity: 0,
          duration: 0.3,
        });
        hoveredBookRef.current = null;
      }

      if (intersects.length > 0) {
        let hoveredBook: THREE.Group | null = null;
        for (let obj: any = intersects[0].object; obj; obj = obj.parent) {
          if (bookMeshes.includes(obj)) {
            hoveredBook = obj;
            break;
          }
        }

        if (hoveredBook && hoveredBookRef.current !== hoveredBook) {
          if (hoveredBookRef.current) {
            const prevFrontCover = hoveredBookRef.current.children[0] as THREE.Mesh;
            const prevMaterial = prevFrontCover.material as THREE.MeshStandardMaterial;
            gsap.to(prevMaterial, {
              emissiveIntensity: 0,
              duration: 0.3,
            });
          }

          hoveredBookRef.current = hoveredBook;
          const frontCover = hoveredBook.children[0] as THREE.Mesh;
          const material = frontCover.material as THREE.MeshStandardMaterial;
          gsap.to(material, {
            emissiveIntensity: 0.4,
            duration: 0.3,
          });

          gsap.to(hoveredBook.scale, {
            x: 1.15,
            y: 1.15,
            z: 1.15,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      } else if (hoveredBookRef.current) {
        gsap.to(hoveredBookRef.current.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
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

// ============ HELPER FUNCTION: CREATE CLASSIC BOOK COVER TEXTURE ============
function createBookCoverTexture(card: GalleryCard, width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Classic book background with gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, card.color);
  gradient.addColorStop(1, adjustBrightness(card.color, -30));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Decorative border
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 8;
  ctx.strokeRect(15, 15, width - 30, height - 30);

  // Inner decorative border
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2;
  ctx.strokeRect(30, 30, width - 60, height - 60);

  // Decorative corner elements
  const cornerSize = 30;
  ctx.fillStyle = '#d4af37';
  ctx.fillRect(30, 30, cornerSize, 3);
  ctx.fillRect(30, 30, 3, cornerSize);
  ctx.fillRect(width - 30 - cornerSize, 30, cornerSize, 3);
  ctx.fillRect(width - 33, 30, 3, cornerSize);
  ctx.fillRect(30, height - 33, cornerSize, 3);
  ctx.fillRect(30, height - 30 - cornerSize, 3, cornerSize);
  ctx.fillRect(width - 30 - cornerSize, height - 33, cornerSize, 3);
  ctx.fillRect(width - 33, height - 30 - cornerSize, 3, cornerSize);

  // Title
  ctx.fillStyle = '#f5f5dc';
  ctx.font = `bold ${Math.floor(width / 8)}px Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Wrap title
  const titleWords = card.title.split(' ');
  let titleLine = '';
  let titleY = height / 3;
  
  for (let word of titleWords) {
    const testLine = titleLine + word + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > width - 60) {
      ctx.fillText(titleLine, width / 2, titleY);
      titleLine = word + ' ';
      titleY += Math.floor(width / 6);
    } else {
      titleLine = testLine;
    }
  }
  ctx.fillText(titleLine, width / 2, titleY);

  // Decorative line
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width / 4, titleY + Math.floor(width / 8));
  ctx.lineTo((width * 3) / 4, titleY + Math.floor(width / 8));
  ctx.stroke();

  // Description (smaller text)
  ctx.font = `italic ${Math.floor(width / 16)}px Georgia, serif`;
  ctx.fillStyle = '#e8e8d0';
  const descriptionY = titleY + Math.floor(width / 5);
  const words = card.description.split(' ');
  let line = '';
  let y = descriptionY;

  for (let word of words) {
    const testLine = line + word + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > width - 80) {
      ctx.fillText(line, width / 2, y);
      line = word + ' ';
      y += Math.floor(width / 20);
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, width / 2, y);

  return canvas;
}

// ============ HELPER FUNCTION: ADJUST COLOR BRIGHTNESS ============
function adjustBrightness(color: string, percent: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, (num >> 16) + amt);
  const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
  const B = Math.min(255, (num & 0x0000FF) + amt);
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
}
