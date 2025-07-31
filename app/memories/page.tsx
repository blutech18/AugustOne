'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AnimatedButton from '@/components/AnimatedButton';
import PageTransition from '@/components/PageTransition';

const memories = [
  {
    image: "/us (1).jpeg",
    caption: "Our first date 🍜",
    description: "Remember how nervous we both were?"
  },
  {
    image: "/us (3).jpeg",
    caption: "Beach day 🌊",
    description: "The sunset was beautiful, but you were more beautiful"
  },
  {
    image: "/us (6).jpeg",
    caption: "School uniform 🎓",
    description: "Looking back at our days in uniform together"
  },
  {
    image: "/us (5).jpeg",
    caption: "Movie nights 🎬",
    description: "Even the bad movies are good with you"
  },
  {
    image: "/us (2).jpeg",
    caption: "Long ride 🏍️",
    description: "That spontaneous moment that made us laugh for hours"
  },
  {
    image: "/us (4).jpeg",
    caption: "Just Us 💕",
    description: "Every moment with you is perfect"
  }
];

export default function MemoriesPage() {
  const router = useRouter();
  const [currentMemory, setCurrentMemory] = useState(0);

  const handleNext = () => {
    router.push('/letter');
  };

  const nextMemory = () => {
    setCurrentMemory((prev) => (prev + 1) % memories.length);
  };

  const prevMemory = () => {
    setCurrentMemory((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-light-gray flex flex-col items-center justify-center p-6">
      <PageTransition className="text-center max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          <h1 className="font-sacramento text-4xl md:text-5xl text-gray-800">
            Our Moments Together
          </h1>
          
          <div className="relative">
            {/* Mobile Swipe Gallery */}
            <div className="md:hidden">
              <div className="photo-card love-card rounded-3xl p-6 shadow-lg">
                <div className="relative mb-4">
                  <img
                    src={memories[currentMemory].image}
                    alt={memories[currentMemory].caption}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm">
                    {currentMemory + 1} / {memories.length}
                  </div>
                </div>
                <h3 className="font-sacramento text-2xl text-gray-800 mb-2">
                  {memories[currentMemory].caption}
                </h3>
                <p className="text-gray-600 text-sm">
                  {memories[currentMemory].description}
                </p>
                
                <div className="flex justify-between mt-6">
                  <button
                    onClick={prevMemory}
                    className="px-4 py-2 bg-white/80 rounded-full text-gray-600 hover:bg-white transition-colors"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={nextMemory}
                    className="px-4 py-2 bg-white/80 rounded-full text-gray-600 hover:bg-white transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Grid Gallery */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {memories.map((memory, index) => (
                <div key={index} className="photo-card love-card rounded-2xl p-4 shadow-lg">
                  <div className="relative mb-3">
                    <img
                      src={memory.image}
                      alt={memory.caption}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="font-sacramento text-xl text-gray-800 mb-1">
                    {memory.caption}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {memory.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-8">
            <AnimatedButton onClick={handleNext}>
              One Last Thing... 💌
            </AnimatedButton>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}