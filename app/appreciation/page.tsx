'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedButton from '@/components/AnimatedButton';
import PageTransition from '@/components/PageTransition';

const loveStatements = [
  "I love how you make me believe that change is possible...",
  "I love that you've endured life with me by your side...",
  "I love that you still choose me, even when I'm not perfect...",
  "I love how we laugh together even after crying the day before...",
  "I love that you're perfect for me—for my eyes only...",
  "I love that you exist, and that's already more than enough..."
];

export default function AppreciationPage() {
  const router = useRouter();
  const [currentStatement, setCurrentStatement] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatement(prev => {
        if (prev < loveStatements.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => setShowButton(true), 1000);
          return prev;
        }
      });
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    router.push('/memories');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-pink-50 flex flex-col items-center justify-center p-6">
      <PageTransition className="text-center max-w-2xl mx-auto">
        <div className="space-y-12">
          <h1 className="font-sacramento text-4xl md:text-5xl text-gray-800 mb-12">
            What I Love About You
          </h1>
          
          <div className="love-card rounded-3xl p-8 md:p-12 shadow-lg min-h-[200px] flex items-center justify-center">
            <div className="space-y-8">
              {loveStatements.map((statement, index) => (
                <p
                  key={index}
                  className={`
                    text-xl md:text-2xl text-gray-700 leading-relaxed transition-all duration-1000
                    ${index <= currentStatement ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    ${index < currentStatement ? 'fade-in-up' : ''}
                  `}
                >
                  {statement}
                </p>
              ))}
            </div>
          </div>
          
          {showButton && (
            <div className="fade-in-up">
              <AnimatedButton onClick={handleNext}>
                Next → 
              </AnimatedButton>
            </div>
          )}
        </div>
      </PageTransition>
    </div>
  );
}