import React, { useEffect, useRef } from 'react';
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

/** Open the selected course outline without changing the 3D gallery state. */
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
  const booksRef = useRef<THREE.Group[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const hoveredBookRef = useRef<THREE.Group | null>(null);
  const raycasterRef = useRef<THREE.Raycaster | null>(null);
  const mouseVectorRef = useRef<THREE.Vector2 | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const mouseRef = useRef({ targetX: 0, targetY: 0 });
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080b20);

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = window.innerWidth < 640 ? 8 : 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.setAttribute('aria-label', 'Interactive course titles');
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const tealLight = new THREE.PointLight(0x00e5ff, 1.1, 12);
    tealLight.position.set(-3, 3, 4);
    scene.add(tealLight);

    const goldLight = new THREE.PointLight(0xd4af37, 0.45, 12);
    goldLight.position.set(4, -2, 2);
    scene.add(goldLight);

    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    const textGroups: THREE.Group[] = [];
    const sphereRadius = window.innerWidth < 640 ? 3.5 : 3.25;
    const titleCount = cards.length;

    cards.forEach((card, index) => {
      const phi = Math.acos(-1 + (2 * index) / Math.max(titleCount, 1));
      const theta = Math.sqrt(Math.max(titleCount, 1) * Math.PI) * phi;

      const titleGroup = new THREE.Group();
      titleGroup.position.set(
        sphereRadius * Math.cos(theta) * Math.sin(phi),
        sphereRadius * Math.sin(theta) * Math.sin(phi),
        sphereRadius * Math.cos(phi),
      );
      titleGroup.userData = { card, index };

      const glowSprite = createNeonTitleSprite(card, true);
      glowSprite.scale.set(2.85, 0.92, 1);
      glowSprite.material.opacity = 0.42;
      titleGroup.add(glowSprite);

      const titleSprite = createNeonTitleSprite(card, false);
      titleSprite.scale.set(2.6, 0.78, 1);
      titleSprite.material.opacity = 0.96;
      titleGroup.add(titleSprite);

      sphereGroup.add(titleGroup);
      textGroups.push(titleGroup);
    });

    booksRef.current = textGroups;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    } as any);
    lenisRef.current = lenis;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(0, 0);
    raycasterRef.current = raycaster;
    mouseVectorRef.current = mouse;

    const onMouseDown = (event: MouseEvent) => {
      dragRef.current.isDragging = true;
      dragRef.current.startX = event.clientX;
      dragRef.current.startY = event.clientY;
      renderer.domElement.style.cursor = 'grabbing';
    };

    const onMouseMove = (event: MouseEvent) => {
      if (dragRef.current.isDragging) {
        const deltaX = event.clientX - dragRef.current.startX;
        const deltaY = event.clientY - dragRef.current.startY;

        mouseRef.current.targetX += deltaX * 0.005;
        mouseRef.current.targetY += deltaY * 0.005;
        dragRef.current.startX = event.clientX;
        dragRef.current.startY = event.clientY;
      }

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onMouseUp = () => {
      dragRef.current.isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    };

    const onMouseLeave = () => {
      dragRef.current.isDragging = false;
      renderer.domElement.style.cursor = 'grab';
      mouse.set(10, 10);
    };

    const onMouseWheel = (event: WheelEvent) => {
      mouseRef.current.targetY += event.deltaY * 0.001;
    };

    const onClickHandler = (event: MouseEvent) => {
      if (dragRef.current.isDragging) return;

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(textGroups, true);
      if (intersects.length === 0) return;

      let clickedTitle: THREE.Group | null = null;
      for (let object: THREE.Object3D | null = intersects[0].object; object; object = object.parent) {
        if (textGroups.includes(object as THREE.Group)) {
          clickedTitle = object as THREE.Group;
          break;
        }
      }

      if (clickedTitle) {
        openBookCourseOutline(clickedTitle, onCardClick);
      }
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('mouseleave', onMouseLeave);
    renderer.domElement.addEventListener('wheel', onMouseWheel, { passive: true });
    renderer.domElement.addEventListener('click', onClickHandler);

    const animate = (time: number) => {
      animationFrameRef.current = requestAnimationFrame(animate);

      rotationRef.current.x += (mouseRef.current.targetY - rotationRef.current.x) * 0.1;
      rotationRef.current.y += (mouseRef.current.targetX - rotationRef.current.y) * 0.1;
      sphereGroup.rotation.x = rotationRef.current.x;
      sphereGroup.rotation.y = rotationRef.current.y;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(textGroups, true);
      const nextHoveredBook = findParentGroup(intersects[0]?.object, textGroups);

      if (nextHoveredBook !== hoveredBookRef.current) {
        if (hoveredBookRef.current) {
          animateTitleGlow(hoveredBookRef.current, false);
        }
        if (nextHoveredBook) {
          animateTitleGlow(nextHoveredBook, true);
        }
        hoveredBookRef.current = nextHoveredBook;
      }

      lenis.raf(time);
      renderer.render(scene, camera);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('mouseleave', onMouseLeave);
      renderer.domElement.removeEventListener('wheel', onMouseWheel);
      renderer.domElement.removeEventListener('click', onClickHandler);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lenis.destroy();
      renderer.dispose();
      renderer.domElement.remove();
      booksRef.current.forEach((group) => {
        group.children.forEach((child) => {
          const sprite = child as THREE.Sprite;
          const material = sprite.material as THREE.SpriteMaterial;
          material.map?.dispose();
          material.dispose();
        });
      });
    };
  }, [cards, onCardClick]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900"
      style={{ cursor: 'grab' }}
    />
  );
};

function findParentGroup(
  object: THREE.Object3D | null | undefined,
  groups: THREE.Group[],
): THREE.Group | null {
  for (let current = object; current; current = current.parent) {
    if (groups.includes(current as THREE.Group)) {
      return current as THREE.Group;
    }
  }
  return null;
}

function animateTitleGlow(group: THREE.Group, active: boolean) {
  const glowSprite = group.children[0] as THREE.Sprite;
  const titleSprite = group.children[1] as THREE.Sprite;
  const glowMaterial = glowSprite.material as THREE.SpriteMaterial;
  const titleMaterial = titleSprite.material as THREE.SpriteMaterial;

  gsap.to(glowMaterial, {
    opacity: active ? 0.95 : 0.42,
    duration: 0.24,
    ease: 'power2.out',
  });
  gsap.to(titleMaterial, {
    opacity: active ? 1 : 0.96,
    duration: 0.24,
    ease: 'power2.out',
  });
  gsap.to(group.scale, {
    x: active ? 1.12 : 1,
    y: active ? 1.12 : 1,
    z: active ? 1.12 : 1,
    duration: 0.24,
    ease: 'power2.out',
  });
}

function createNeonTitleSprite(card: GalleryCard, glow: boolean): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 360;
  const context = canvas.getContext('2d');
  if (!context) {
    return new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true }));
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.font = '700 82px Arial, sans-serif';

  const lines = wrapText(context, card.title, 1040);
  const lineHeight = 88;
  const firstLineY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;

  context.shadowColor = card.color;
  context.shadowBlur = glow ? 56 : 28;
  context.lineJoin = 'round';

  // A translucent backing keeps the neon title readable when it passes behind
  // the hero copy or another orbiting title.
  drawRoundedRect(context, 18, 24, canvas.width - 36, canvas.height - 48, 28);
  context.fillStyle = glow ? 'rgba(5, 12, 38, 0.32)' : 'rgba(5, 12, 38, 0.74)';
  context.fill();
  context.shadowBlur = glow ? 28 : 12;
  context.strokeStyle = card.color;
  context.lineWidth = glow ? 14 : 5;
  context.stroke();
  context.shadowBlur = glow ? 56 : 28;

  lines.forEach((line, index) => {
    const y = firstLineY + index * lineHeight;
    context.lineWidth = glow ? 18 : 8;
    context.strokeStyle = card.color;
    context.strokeText(line, canvas.width / 2, y);
    context.fillStyle = glow ? card.color : '#f5ffff';
    context.fillText(line, canvas.width / 2, y);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    depthTest: true,
  });
  return new THREE.Sprite(material);
}

function drawRoundedRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function wrapText(context: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  words.forEach((word) => {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (currentLine && context.measureText(candidate).width > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = candidate;
    }
  });

  if (currentLine) lines.push(currentLine);
  return lines.length > 0 ? lines : [text];
}
