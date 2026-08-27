import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';
import { openBookCourseOutline } from './ClassicBookGallery';

const card = {
  id: 'microsoft-office',
  title: 'Microsoft Office Suite',
  description: 'Learn Word, Excel, PowerPoint, and Outlook.',
  image: '/course-image.png',
  color: '#2B579A',
};

describe('openBookCourseOutline', () => {
  it('opens the selected course outline immediately through the callback', () => {
    const book = new THREE.Group();
    book.userData.card = card;
    const onCardClick = vi.fn();

    openBookCourseOutline(book, onCardClick);

    expect(onCardClick).toHaveBeenCalledOnce();
    expect(onCardClick).toHaveBeenCalledWith(card);
  });

  it('does nothing when no callback is provided', () => {
    const book = new THREE.Group();
    book.userData.card = card;

    expect(() => openBookCourseOutline(book)).not.toThrow();
  });
});

it('does not contain the previous delayed book-opening animation', async () => {
  const source = await import('./ClassicBookGallery?raw');

  expect(source.default).not.toContain('setTimeout');
  expect(source.default).not.toContain('Open book animation');
});
