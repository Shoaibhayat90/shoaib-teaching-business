import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface BookModalProps {
  isOpen: boolean;
  course: {
    title: string;
    description: string;
    fullDescription: string;
    duration: string;
    price: string;
    outcomes: string[];
    icon: string;
  } | null;
  onClose: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ isOpen, course, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Animate modal in
      gsap.fromTo(
        '.book-modal-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.book-pages',
        { scale: 0.8, opacity: 0, rotationY: 90 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 0.6, ease: 'back.out', delay: 0.2 }
      );

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !course) return null;

  return (
    <div
      className="book-modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="book-pages relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-r from-[#f5e6d3] to-[#f9ede0] rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          perspective: '1000px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all"
        >
          <X size={24} />
        </button>

        {/* Book Content */}
        <div className="flex h-full overflow-hidden">
          {/* Left Page */}
          <div className="w-1/2 p-8 border-r-4 border-amber-900/20 overflow-y-auto">
            <div className="space-y-6">
              {/* Icon and Title */}
              <div className="text-center">
                <div className="text-6xl mb-4">{course.icon}</div>
                <h1 className="text-3xl font-bold text-amber-900 font-serif">
                  {course.title}
                </h1>
              </div>

              {/* Decorative Line */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-amber-900/30"></div>
                <div className="text-amber-900/50">✦</div>
                <div className="flex-1 h-px bg-amber-900/30"></div>
              </div>

              {/* Course Info */}
              <div className="space-y-3 text-amber-900/80">
                <p className="text-sm">
                  <span className="font-semibold">Duration:</span> {course.duration}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Investment:</span> {course.price}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-sm leading-relaxed text-amber-900/70 italic">
                  {course.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="text-center text-amber-900/30 text-2xl">❦</div>
            </div>
          </div>

          {/* Right Page */}
          <div className="w-1/2 p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Section Title */}
              <div>
                <h2 className="text-2xl font-bold text-amber-900 font-serif mb-2">
                  Course Outline
                </h2>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-900 to-amber-700"></div>
              </div>

              {/* Full Description */}
              <p className="text-sm leading-relaxed text-amber-900/75">
                {course.fullDescription}
              </p>

              {/* Learning Outcomes */}
              <div>
                <h3 className="text-lg font-semibold text-amber-900 font-serif mb-3">
                  What You'll Learn
                </h3>
                <ul className="space-y-2">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index} className="flex gap-3 text-sm text-amber-900/75">
                      <span className="text-amber-900 font-bold mt-0.5">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Footer */}
              <div className="pt-4 border-t border-amber-900/20 text-center">
                <p className="text-xs text-amber-900/50 italic">
                  IT Insight Academy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Paper Texture Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    </div>
  );
};
