import { useEffect, useState } from 'react';

interface Raindrop {
  id: number;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  length: number;
}

const RainEffect = () => {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

  useEffect(() => {
    const createRaindrop = (id: number): Raindrop => ({
      id,
      x: Math.random() * window.innerWidth,
      y: -20,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.3 + 0.1,
      length: Math.random() * 20 + 10,
    });

    // Create initial raindrops
    const initialRaindrops = Array.from({ length: 100 }, (_, i) => 
      createRaindrop(i)
    );
    setRaindrops(initialRaindrops);

    const animateRain = () => {
      setRaindrops(prev => 
        prev.map(drop => {
          const newY = drop.y + drop.speed;
          if (newY > window.innerHeight) {
            return createRaindrop(drop.id);
          }
          return { ...drop, y: newY };
        })
      );
    };

    const interval = setInterval(animateRain, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {raindrops.map(drop => (
        <div
          key={drop.id}
          className="absolute bg-blue-300"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            width: '1px',
            height: `${drop.length}px`,
            opacity: drop.opacity,
            transform: 'rotate(10deg)',
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;