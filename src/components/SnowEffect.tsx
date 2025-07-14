import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  size: number;
  drift: number;
}

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const createSnowflake = (id: number): Snowflake => ({
      id,
      x: Math.random() * window.innerWidth,
      y: -20,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      size: Math.random() * 3 + 2,
      drift: Math.random() * 2 - 1,
    });

    // Create initial snowflakes
    const initialSnowflakes = Array.from({ length: 50 }, (_, i) => 
      createSnowflake(i)
    );
    setSnowflakes(initialSnowflakes);

    const animateSnow = () => {
      setSnowflakes(prev => 
        prev.map(flake => {
          const newY = flake.y + flake.speed;
          const newX = flake.x + flake.drift * 0.5;
          if (newY > window.innerHeight || newX < -10 || newX > window.innerWidth + 10) {
            return createSnowflake(flake.id);
          }
          return { ...flake, y: newY, x: newX };
        })
      );
    };

    const interval = setInterval(animateSnow, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute text-white select-none"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            opacity: flake.opacity,
            fontSize: `${flake.size * 3}px`,
          }}
        >
          ❅
        </div>
      ))}
    </div>
  );
};

export default SnowEffect;