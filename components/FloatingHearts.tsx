'use client';

import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    setHearts(Array.from({ length: 9 }, (_, i) => i));
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div key={heart} className="heart">
          💖
        </div>
      ))}
    </div>
  );
}