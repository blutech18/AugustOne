'use client';

import { useEffect, useState } from 'react';

interface AnimatedFlowerProps {
  className?: string;
}

export default function AnimatedFlower({ className = '' }: AnimatedFlowerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Flower Container */}
      <div className={`relative w-40 h-40 mx-auto transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        
        {/* Outer Petals Layer */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`outer-${index}`}
            className="absolute w-12 h-16 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400 rounded-full transform origin-bottom shadow-lg"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-24px',
              marginTop: '-32px',
              transform: `rotate(${index * 30}deg) translateY(-30px)`,
              animation: `petal-bloom 2s ease-out ${index * 0.08}s both`
            }}
          />
        ))}

        {/* Middle Petals Layer */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`middle-${index}`}
            className="absolute w-10 h-14 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 rounded-full transform origin-bottom shadow-md"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-20px',
              marginTop: '-28px',
              transform: `rotate(${index * 45}deg) translateY(-25px)`,
              animation: `petal-bloom 1.8s ease-out ${index * 0.1 + 0.5}s both`
            }}
          />
        ))}

        {/* Inner Petals Layer */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`inner-${index}`}
            className="absolute w-8 h-12 bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 rounded-full transform origin-bottom shadow-sm"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-16px',
              marginTop: '-24px',
              transform: `rotate(${index * 60}deg) translateY(-20px)`,
              animation: `petal-bloom 1.6s ease-out ${index * 0.12 + 1}s both`
            }}
          />
        ))}

        {/* Center of flower */}
        <div 
          className="absolute w-12 h-12 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 rounded-full shadow-lg"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-24px',
            marginTop: '-24px',
            animation: 'center-bloom 1.2s ease-out 1.5s both'
          }}
        />

        {/* Inner center detail */}
        <div 
          className="absolute w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-12px',
            marginTop: '-12px',
            animation: 'center-bloom 1s ease-out 1.8s both'
          }}
        />

        {/* Stem */}
        <div 
          className="absolute w-3 h-24 bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-full shadow-md"
          style={{
            left: '50%',
            top: '100%',
            marginLeft: '-6px',
            animation: 'stem-grow 1.5s ease-out 0.3s both'
          }}
        />

        {/* Leaves */}
        <div 
          className="absolute w-8 h-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transform -rotate-45 shadow-sm"
          style={{
            left: '50%',
            top: '85%',
            marginLeft: '-16px',
            marginTop: '-8px',
            animation: 'leaf-left 1.2s ease-out 1.2s both'
          }}
        />
        <div 
          className="absolute w-8 h-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transform rotate-45 shadow-sm"
          style={{
            left: '50%',
            top: '85%',
            marginLeft: '8px',
            marginTop: '-8px',
            animation: 'leaf-right 1.2s ease-out 1.2s both'
          }}
        />

        {/* Additional smaller leaves */}
        <div 
          className="absolute w-6 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform -rotate-30 shadow-sm"
          style={{
            left: '50%',
            top: '75%',
            marginLeft: '-20px',
            marginTop: '-6px',
            animation: 'leaf-left 1s ease-out 1.4s both'
          }}
        />
        <div 
          className="absolute w-6 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform rotate-30 shadow-sm"
          style={{
            left: '50%',
            top: '75%',
            marginLeft: '14px',
            marginTop: '-6px',
            animation: 'leaf-right 1s ease-out 1.4s both'
          }}
        />
      </div>

      {/* Floating petals effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-3 h-4 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full opacity-70 shadow-sm"
            style={{
              left: `${15 + index * 10}%`,
              top: '0%',
              animation: `float-petal 4s ease-in-out infinite ${index * 0.6}s`
            }}
          />
        ))}
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`sparkle-${index}`}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-80"
            style={{
              left: `${20 + index * 12}%`,
              top: `${10 + index * 15}%`,
              animation: `sparkle 2s ease-in-out infinite ${index * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
} 