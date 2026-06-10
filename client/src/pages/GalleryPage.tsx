import React, { useState } from 'react';
import { SphericalGallery } from '@/components/SphericalGallery';
import { useLocation } from 'wouter';

interface GalleryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const GALLERY_CARDS: GalleryCard[] = [
  {
    id: 'microsoft-office',
    title: 'Microsoft Office Suite',
    description: 'Master Word, Excel, PowerPoint, and Outlook. Industry-standard tools for professionals.',
    image: '/manus-storage/logo-microsoft-word.png',
    color: '#2B579A',
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security Fundamentals',
    description: 'Learn network security, threat detection, and protection strategies for the modern workplace.',
    image: '/manus-storage/google-cybersecurity-logo.png',
    color: '#EA4335',
  },
  {
    id: 'ai-tools',
    title: 'Modern AI Tools',
    description: 'Explore ChatGPT, Claude, Gemini, and other cutting-edge AI tools transforming work.',
    image: '/manus-storage/logo-chatgpt.png',
    color: '#10A37F',
  },
  {
    id: 'google-essentials',
    title: 'Google AI Essentials',
    description: 'Get certified in Google\'s AI fundamentals and practical applications.',
    image: '/manus-storage/google-ai-essentials-logo.png',
    color: '#4285F4',
  },
  {
    id: 'excel-advanced',
    title: 'Advanced Excel',
    description: 'Data analysis, pivot tables, macros, and financial modeling with Excel.',
    image: '/manus-storage/logo-microsoft-excel.png',
    color: '#217346',
  },
  {
    id: 'professional-dev',
    title: 'Professional Development',
    description: 'Soft skills, communication, leadership, and career advancement strategies.',
    image: '/manus-storage/logo-option-2.png',
    color: '#FF6B5B',
  },
  {
    id: 'google-sheets',
    title: 'Google Workspace',
    description: 'Master Google Sheets, Docs, Slides, and collaborative cloud tools.',
    image: '/manus-storage/logo-manus.png',
    color: '#34A853',
  },
];

export default function GalleryPage() {
  const [, setLocation] = useLocation();

  const handleCardClick = (card: GalleryCard) => {
    // Navigate to course detail page
    setLocation(`/courses#${card.id}`);
  };

  return (
    <div className="w-full h-screen">
      <SphericalGallery cards={GALLERY_CARDS} onCardClick={handleCardClick} />
      
      {/* Instructions overlay */}
      <div className="fixed top-8 left-8 text-white text-sm z-10 pointer-events-none">
        <p className="font-semibold">Drag to rotate • Scroll to zoom • Click to explore</p>
      </div>
    </div>
  );
}
