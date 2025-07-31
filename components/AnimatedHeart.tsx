'use client';

import { useEffect, useState } from 'react';

interface AnimatedHeartProps {
  className?: string;
}

export default function AnimatedHeart({ className = '' }: AnimatedHeartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Main Heart Container */}
      <div className={`relative w-48 h-48 mx-auto transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        
        {/* Outer Glow Layer */}
        <div 
          className="absolute w-full h-full bg-gradient-to-br from-pink-200 to-red-300 rounded-full blur-xl opacity-60"
          style={{
            animation: 'heart-pulse 2s ease-in-out infinite'
          }}
        />

        {/* Main Heart Shape - Proper Heart */}
        <div 
          className="absolute w-32 h-32"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-64px',
            marginTop: '-64px',
            animation: 'heart-beat 1.5s ease-in-out infinite'
          }}
        >
          <div 
            className="absolute w-16 h-16 bg-gradient-to-br from-red-400 via-pink-500 to-red-600 rounded-full"
            style={{
              left: '0px',
              top: '0px'
            }}
          />
          <div 
            className="absolute w-16 h-16 bg-gradient-to-br from-red-400 via-pink-500 to-red-600 rounded-full"
            style={{
              right: '0px',
              top: '0px'
            }}
          />
          <div 
            className="absolute w-32 h-16 bg-gradient-to-br from-red-400 via-pink-500 to-red-600"
            style={{
              left: '0px',
              bottom: '0px',
              borderRadius: '0 0 32px 32px'
            }}
          />
        </div>

        {/* Inner Heart Layer - Proper Heart */}
        <div 
          className="absolute w-24 h-24"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-48px',
            marginTop: '-48px',
            animation: 'heart-beat 1.5s ease-in-out infinite 0.2s'
          }}
        >
          <div 
            className="absolute w-12 h-12 bg-gradient-to-br from-red-500 via-pink-600 to-red-700 rounded-full"
            style={{
              left: '0px',
              top: '0px'
            }}
          />
          <div 
            className="absolute w-12 h-12 bg-gradient-to-br from-red-500 via-pink-600 to-red-700 rounded-full"
            style={{
              right: '0px',
              top: '0px'
            }}
          />
          <div 
            className="absolute w-24 h-12 bg-gradient-to-br from-red-500 via-pink-600 to-red-700"
            style={{
              left: '0px',
              bottom: '0px',
              borderRadius: '0 0 24px 24px'
            }}
          />
        </div>

        {/* Core Heart - Proper Heart */}
        <div 
          className="absolute w-16 h-16"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-32px',
            marginTop: '-32px',
            animation: 'heart-beat 1.5s ease-in-out infinite 0.4s'
          }}
        >
          <div 
            className="absolute w-8 h-8 bg-gradient-to-br from-red-600 via-pink-700 to-red-800 rounded-full"
            style={{
              left: '0px',
              top: '0px'
            }}
          />
          <div 
            className="absolute w-8 h-8 bg-gradient-to-br from-red-600 via-pink-700 to-red-800 rounded-full"
            style={{
              right: '0px',
              top: '0px'
            }}
          />
          <div 
            className="absolute w-16 h-8 bg-gradient-to-br from-red-600 via-pink-700 to-red-800"
            style={{
              left: '0px',
              bottom: '0px',
              borderRadius: '0 0 16px 16px'
            }}
          />
        </div>

        {/* Sparkle Effects */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`sparkle-${index}`}
            className="absolute w-3 h-3 bg-yellow-300 rounded-full"
            style={{
              left: `${20 + index * 8}%`,
              top: `${15 + index * 10}%`,
              animation: `sparkle-heart 2s ease-in-out infinite ${index * 0.2}s`
            }}
          />
        ))}

        {/* Floating Hearts */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`float-${index}`}
            className="absolute w-4 h-4"
            style={{
              left: `${10 + index * 15}%`,
              top: `${5 + index * 12}%`,
              animation: `float-heart 3s ease-in-out infinite ${index * 0.5}s`
            }}
          >
            <div 
              className="absolute w-2 h-2 bg-gradient-to-br from-pink-300 to-red-400 rounded-full"
              style={{ left: '0px', top: '0px' }}
            />
            <div 
              className="absolute w-2 h-2 bg-gradient-to-br from-pink-300 to-red-400 rounded-full"
              style={{ right: '0px', top: '0px' }}
            />
            <div 
              className="absolute w-4 h-2 bg-gradient-to-br from-pink-300 to-red-400"
              style={{ left: '0px', bottom: '0px', borderRadius: '0 0 4px 4px' }}
            />
          </div>
        ))}

        {/* Energy Rings */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`ring-${index}`}
            className="absolute border-2 border-pink-300 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              width: `${80 + index * 20}px`,
              height: `${80 + index * 20}px`,
              marginLeft: `-${40 + index * 10}px`,
              marginTop: `-${40 + index * 10}px`,
              animation: `energy-ring 2s ease-in-out infinite ${index * 0.3}s`
            }}
          />
        ))}

        {/* Love Particles */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-pink-400 rounded-full"
            style={{
              left: `${25 + index * 5}%`,
              top: `${20 + index * 6}%`,
              animation: `love-particle 2.5s ease-in-out infinite ${index * 0.15}s`
            }}
          />
        ))}
      </div>

      {/* Text Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="text-white font-bold text-lg opacity-80"
          style={{
            animation: 'text-glow 2s ease-in-out infinite'
          }}
        >
          LOVE
        </div>
      </div>
    </div>
  );
} 