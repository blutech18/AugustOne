'use client';

import { useRouter } from 'next/navigation';
import FloatingHearts from '@/components/FloatingHearts';
import AnimatedButton from '@/components/AnimatedButton';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  const router = useRouter();

  const handleBeginJourney = () => {
    router.push('/appreciation');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 to-white flex flex-col items-center justify-center p-6">
      <FloatingHearts />
      
      <PageTransition className="text-center max-w-md mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-sacramento text-5xl md:text-6xl text-gray-800 leading-tight">
              Happy Girlfriend's Day
            </h1>
            <div className="text-6xl md:text-7xl mb-6">💖</div>
          </div>
          
          <div className="love-card rounded-3xl p-8 shadow-lg">
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-6">
              Hi Palangga...
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Naa koy something special para nimo today. A little journey through 
              tanan nga reasons ngano nimo gi-brighten akong world ug ngano grateful kaayo ko every moment with you.
            </p>
          </div>
          
          <AnimatedButton onClick={handleBeginJourney} className="mt-8">
            Tap to Begin ✨
          </AnimatedButton>
        </div>
      </PageTransition>
    </div>
  );
}