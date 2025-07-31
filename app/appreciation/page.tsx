'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedButton from '@/components/AnimatedButton';
import PageTransition from '@/components/PageTransition';

const loveStatements = [
  "I love how you make me believe that change is possible...",
  "I love that you've endured life with me by your side...",
  "I love that you still choose me, even when I'm not 'that' man...",
  "I love how we laugh together even after crying the day before...",
  "I love that you're perfect for me—for my eyes only...",
  "I love that you exist, and that's already more than enough..."
];

export default function AppreciationPage() {
  const router = useRouter();
  const [currentStatement, setCurrentStatement] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  useEffect(() => {
    // Initial page fade-in animation
    const pageTimer = setTimeout(() => setShowPage(true), 300);

    // Start statement animations after page is shown
    const statementTimer = setTimeout(() => {
      const timer = setInterval(() => {
        // Start slide-out animation
        setIsSlidingOut(true);
        
        // After slide-out completes, move to next statement
        setTimeout(() => {
          setIsSlidingOut(false);
          setCurrentStatement(prev => {
            if (prev < loveStatements.length - 1) {
              // Show button after statement 5 (index 4) and stop timer
              if (prev === 4) {
                setTimeout(() => setShowButton(true), 1000);
                clearInterval(timer);
              }
              return prev + 1;
            } else {
              clearInterval(timer);
              return prev;
            }
          });
        }, 600); // Match the slide-out animation duration
      }, 5000); // Changed to 5 seconds

      return () => clearInterval(timer);
    }, 1000);

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(statementTimer);
    };
  }, []);

  const handleNext = () => {
    router.push('/memories');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-pink-50 flex flex-col items-center justify-center p-6">
      <PageTransition className={`text-center max-w-2xl mx-auto transition-all duration-1000 ${showPage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="space-y-12">
          <h1 className="font-sacramento text-4xl md:text-5xl text-gray-800 mb-12">
            What I Love About You
          </h1>
          
          <div className="love-card rounded-3xl p-8 md:p-12 shadow-lg min-h-[200px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {loveStatements[currentStatement] && (
                <p
                  key={currentStatement}
                  className={`text-xl md:text-2xl text-gray-700 leading-relaxed ${
                    isSlidingOut ? 'animate-slide-out-to-right' : 'animate-slide-from-left'
                  }`}
                >
                  {loveStatements[currentStatement]}
                </p>
              )}
            </div>
          </div>
          
          {showButton && (
            <div className="animate-fade-in-up">
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