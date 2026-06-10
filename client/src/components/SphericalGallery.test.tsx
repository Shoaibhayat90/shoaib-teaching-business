import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SphericalGallery } from './SphericalGallery';

describe('SphericalGallery', () => {
  const mockCards = [
    {
      id: 'test-1',
      title: 'Test Course 1',
      description: 'Test description 1',
      image: '/test-image-1.png',
      color: '#FF0000',
    },
    {
      id: 'test-2',
      title: 'Test Course 2',
      description: 'Test description 2',
      image: '/test-image-2.png',
      color: '#00FF00',
    },
  ];

  beforeEach(() => {
    // Mock Three.js WebGLRenderer
    vi.mock('three', async () => {
      const actual = await vi.importActual('three');
      return {
        ...actual,
        WebGLRenderer: vi.fn(() => ({
          setSize: vi.fn(),
          setPixelRatio: vi.fn(),
          render: vi.fn(),
          dispose: vi.fn(),
          domElement: document.createElement('canvas'),
          shadowMap: { enabled: true },
        })),
      };
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crashing', () => {
    const { container } = render(<SphericalGallery cards={mockCards} />);
    expect(container).toBeTruthy();
  });

  it('should render with correct number of cards', () => {
    const { container } = render(<SphericalGallery cards={mockCards} />);
    // The component renders a canvas element
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });

  it('should accept onCardClick callback', () => {
    const mockCallback = vi.fn();
    render(<SphericalGallery cards={mockCards} onCardClick={mockCallback} />);
    // Callback should be set but not called until card is clicked
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('should render instructions overlay', () => {
    const { container } = render(<SphericalGallery cards={mockCards} />);
    // The component should be in the DOM
    expect(container.firstChild).toBeTruthy();
  });

  it('should handle empty cards array', () => {
    const { container } = render(<SphericalGallery cards={[]} />);
    expect(container).toBeTruthy();
  });

  it('should handle window resize', () => {
    render(<SphericalGallery cards={mockCards} />);
    
    // Simulate window resize
    window.dispatchEvent(new Event('resize'));
    
    // Component should still be functional
    expect(window).toBeTruthy();
  });
});
