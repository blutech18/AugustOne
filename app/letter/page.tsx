'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedButton from '@/components/AnimatedButton';
import PageTransition from '@/components/PageTransition';

const letterText = `Dear Palangga nako na Bibang,

Thank you.

Even though I’m not the perfect partner, thank you for still trusting me. Thank you for being alive, and for being in my life. I owe you my time, because through you, I learned that change is possible.

From the very beginning, I already knew we started off wrong. I never really expected this to last, but look at us now—we made it this far. We accepted the consequences, endured the pain, and I still hope that you'll continue to endure life with me by your side.

That time you cheated—I went crazy. I lost my direction, my peace, and my trust. But even so, there was still a small part of me that hoped—maybe, just maybe, we could still make it. That hope is what carried me through, because no matter what happens, I find happiness in you.

I hope you’ll still choose me.
I hope you won’t get tired of us.
We’ve come so far. Please, don’t give up now.

Sometimes, I even dream that I’d still choose you even when there are others out there who might seem better. I haven’t given in to temptation—there were chances, but I didn’t take them. I still choose you and this love. We both know this isn’t perfect, but I’m still happy because I have you.

It’s tiring. It’s draining. It suffocates at times. But look at us now—we still laugh together even after crying the day before.

There are moments when you probably feel like I’m too much to handle. I know I’m insecure, jealous, intense, sometimes irrational. I’ve gone overboard. But even with all of that, I stayed. I endured it all.

People have talked about us—said things like we’re not enough, or compared us to others. It hurts, but this is love. This is real. I love you. I really do.

Even when you made me question if love was even worth it, I still chose to believe it is—because love like ours is worth the fight. Despite everything that has happened, love still exists in us. I believe this is real. I hope our love will last until our final breath.

I don’t want anyone else. No other woman compares to you. You are perfect for me—for my eyes only.

I’m sorry if sometimes I seem lustful—but honestly, it’s not lust. It’s just that you’re incredibly attractive. I can’t help myself. So really, it’s your fault for being too hot. Haha.

I know you’re facing a big problem right now. I’m willing to help, no matter what it is or what it costs me. There’s no problem that can’t be solved. You’re lucky to have me—a “problem-solver.” I’m here, and I’ll always be here for you. 

And please, don’t let this problem break you. Let it shape you, not destroy you. You are stronger than this, and you don’t have to face it alone.

This isn’t hard—as long as we’re together. I’m strong, for you.
Thank you for existing. That’s already more than enough. Don’t let anyone change who you are.

Let’s fight for our freedom.
Life is beautiful. Love is real. We are worth fighting for.

I LOVE YOU ALWAYS. HAPPY 9TH MONTHSARY! 💙

Forever yours,
Cristan 💙`;

const girlfriendPhotos = [
  "/bibang1.jpeg",
  "/bibang2.jpeg",
  "/bibang3.jpeg",
  "/bibang4.jpeg",
  "/bibang6.jpeg",
  "/bibang5.jpeg"
];

export default function LetterPage() {
  const router = useRouter();
  const [showLetter, setShowLetter] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLetter(true), 500);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    if (showLetter && currentIndex < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(letterText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        // Auto-scroll to the bottom of the letter container as it grows (only if enabled)
        if (autoScrollEnabled) {
          const letterElement = document.querySelector('.love-card');
          if (letterElement) {
            letterElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'end' 
            });
          }
        }
      }, 15); // Faster typing speed (15ms instead of 30ms)

      return () => clearTimeout(timer);
    } else if (showLetter && currentIndex >= letterText.length) {
      // Letter has finished typing, show photos after a short delay
      const timer = setTimeout(() => {
        setShowPhotos(true);
        setShowConfetti(true);
      }, 1000); // 1 second delay after letter finishes

      // Scroll to photos section after 5 seconds
      const scrollTimer = setTimeout(() => {
        const photosSection = document.querySelector('.fade-in-up');
        if (photosSection) {
          photosSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 3000); // 3 seconds after letter finishes

      return () => {
        clearTimeout(timer);
        clearTimeout(scrollTimer);
      };
    }
  }, [showLetter, currentIndex]);

  const handleReplay = () => {
    router.push('/');
  };

  // Handle page click to disable auto-scroll
  const handlePageClick = () => {
    setAutoScrollEnabled(false);
  };

  // Handle scroll to re-enable auto-scroll if user scrolls to bottom
  const handleScroll = () => {
    const letterElement = document.querySelector('.love-card');
    if (letterElement) {
      const rect = letterElement.getBoundingClientRect();
      const isNearBottom = rect.bottom <= window.innerHeight + 10;
      
      if (isNearBottom) {
        setAutoScrollEnabled(true);
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-light-gray via-pink-50 to-white relative overflow-hidden"
      onClick={handlePageClick}
    >
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <PageTransition>
          <div className="text-center space-y-12">
            <h1 className="font-sacramento text-5xl md:text-6xl text-gray-800">
              A Letter Just For You
            </h1>
            
            {showLetter && (
              <div className="love-card rounded-3xl p-8 md:p-12 shadow-lg text-left max-w-3xl mx-auto">
                <div className="font-light text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line">
                  {displayedText}
                  <span className="typing-cursor">|</span>
                </div>
              </div>
            )}
            
            {showPhotos && (
              <div className="fade-in-up">
                <h2 className="font-sacramento text-3xl text-gray-800 mb-8">
                  Beautiful Memories of You 📸
                </h2>
                
                {/* Mobile: Vertical Stack */}
                <div className="md:hidden space-y-4">
                  {girlfriendPhotos.slice(0, 3).map((photo, index) => (
                    <div key={index} className="photo-card rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={photo}
                        alt={`Beautiful memory ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {girlfriendPhotos.map((photo, index) => (
                    <div key={index} className="photo-card rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={photo}
                        alt={`Beautiful memory ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 space-y-4">
                  <p className="text-gray-600 text-lg">
                    Your beauty shines in every photo, your smile lights up my world ✨
                  </p>
                  
                  <AnimatedButton onClick={handleReplay} className="mt-8">
                    Replay This Journey 💕
                  </AnimatedButton>
                </div>
              </div>
            )}
          </div>
        </PageTransition>
      </div>
    </div>
  );
}