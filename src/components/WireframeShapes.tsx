import { useEffect, useState, useRef } from "react";

interface ShapeState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  offsetX: number;
  offsetY: number;
}

const WireframeShapes = () => {
  const [shapes, setShapes] = useState<ShapeState[]>([
    { x: 10, y: 20, vx: 0.08, vy: 0.05, offsetX: 0, offsetY: 0 },
    { x: 80, y: 15, vx: -0.06, vy: 0.04, offsetX: 0, offsetY: 0 },
    { x: 8, y: 60, vx: 0.05, vy: -0.06, offsetX: 0, offsetY: 0 },
    { x: 85, y: 55, vx: -0.07, vy: -0.05, offsetX: 0, offsetY: 0 },
  ]);
  
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setShapes(prevShapes => 
        prevShapes.map(shape => {
          let { x, y, vx, vy, offsetX, offsetY } = shape;
          
          // Float movement
          x += vx;
          y += vy;
          
          // Bounce off edges with some padding
          if (x <= 5 || x >= 90) vx = -vx;
          if (y <= 5 || y >= 85) vy = -vy;
          
          // Keep in bounds
          x = Math.max(5, Math.min(90, x));
          y = Math.max(5, Math.min(85, y));
          
          // Mouse repulsion
          const mx = mouseRef.current.x;
          const my = mouseRef.current.y;
          const dx = x - mx;
          const dy = y - my;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 25;
          const repelStrength = 50;

          if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius;
            const angle = Math.atan2(dy, dx);
            offsetX = Math.cos(angle) * force * repelStrength;
            offsetY = Math.sin(angle) * force * repelStrength;
          } else {
            // Smoothly return to position
            offsetX *= 0.9;
            offsetY *= 0.9;
          }

          return { x, y, vx, vy, offsetX, offsetY };
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Dodecahedron */}
      <div 
        className="absolute pointer-events-none transition-transform duration-100"
        style={{
          left: `${shapes[0].x}%`,
          top: `${shapes[0].y}%`,
          transform: `translate(-50%, -50%) translate(${shapes[0].offsetX}px, ${shapes[0].offsetY}px)`,
        }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 opacity-60">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <polygon points="100,15 175,60 155,150 45,150 25,60" strokeWidth="0.8" fill="none" />
            <polygon points="100,45 145,75 130,130 70,130 55,75" strokeWidth="0.8" fill="none" />
            <line x1="100" y1="15" x2="100" y2="45" strokeWidth="0.8" />
            <line x1="175" y1="60" x2="145" y2="75" strokeWidth="0.8" />
            <line x1="155" y1="150" x2="130" y2="130" strokeWidth="0.8" />
            <line x1="45" y1="150" x2="70" y2="130" strokeWidth="0.8" />
            <line x1="25" y1="60" x2="55" y2="75" strokeWidth="0.8" />
            <line x1="100" y1="45" x2="145" y2="75" strokeWidth="0.5" opacity="0.5" />
            <line x1="145" y1="75" x2="130" y2="130" strokeWidth="0.5" opacity="0.5" />
            <line x1="130" y1="130" x2="70" y2="130" strokeWidth="0.5" opacity="0.5" />
            <line x1="70" y1="130" x2="55" y2="75" strokeWidth="0.5" opacity="0.5" />
            <line x1="55" y1="75" x2="100" y2="45" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Abstract curves */}
      <div 
        className="absolute pointer-events-none transition-transform duration-100"
        style={{
          left: `${shapes[1].x}%`,
          top: `${shapes[1].y}%`,
          transform: `translate(-50%, -50%) translate(${shapes[1].offsetX}px, ${shapes[1].offsetY}px)`,
        }}
      >
        <div className="w-28 h-24 md:w-36 md:h-28 opacity-50">
          <svg viewBox="0 0 150 100" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <path d="M10,50 Q40,10 75,30 T140,20" strokeWidth="0.8" fill="none" />
            <path d="M10,60 Q50,20 85,45 T140,35" strokeWidth="0.8" fill="none" />
            <path d="M10,70 Q45,35 80,55 T140,50" strokeWidth="0.8" fill="none" />
            <path d="M10,80 Q55,45 90,65 T140,60" strokeWidth="0.8" fill="none" />
            <circle cx="75" cy="30" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="110" cy="40" r="1.5" fill="currentColor" opacity="0.6" />
            <circle cx="45" cy="55" r="1.5" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Geodesic sphere */}
      <div 
        className="absolute pointer-events-none transition-transform duration-100"
        style={{
          left: `${shapes[2].x}%`,
          top: `${shapes[2].y}%`,
          transform: `translate(-50%, -50%) translate(${shapes[2].offsetX}px, ${shapes[2].offsetY}px)`,
        }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 opacity-50">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <circle cx="100" cy="100" r="70" strokeWidth="0.8" fill="none" />
            <ellipse cx="100" cy="100" rx="70" ry="25" strokeWidth="0.6" fill="none" />
            <ellipse cx="100" cy="100" rx="25" ry="70" strokeWidth="0.6" fill="none" />
            <line x1="30" y1="100" x2="100" y2="30" strokeWidth="0.5" opacity="0.6" />
            <line x1="100" y1="30" x2="170" y2="100" strokeWidth="0.5" opacity="0.6" />
            <line x1="170" y1="100" x2="100" y2="170" strokeWidth="0.5" opacity="0.6" />
            <line x1="100" y1="170" x2="30" y2="100" strokeWidth="0.5" opacity="0.6" />
            <polygon points="100,55 145,100 100,145 55,100" strokeWidth="0.5" fill="none" opacity="0.5" />
            <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Hourglass mesh */}
      <div 
        className="absolute pointer-events-none transition-transform duration-100"
        style={{
          left: `${shapes[3].x}%`,
          top: `${shapes[3].y}%`,
          transform: `translate(-50%, -50%) translate(${shapes[3].offsetX}px, ${shapes[3].offsetY}px)`,
        }}
      >
        <div className="w-28 h-36 md:w-32 md:h-44 opacity-50">
          <svg viewBox="0 0 120 180" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <ellipse cx="60" cy="25" rx="40" ry="15" strokeWidth="0.8" fill="none" />
            <ellipse cx="60" cy="155" rx="40" ry="15" strokeWidth="0.8" fill="none" />
            <ellipse cx="60" cy="90" rx="15" ry="6" strokeWidth="0.6" fill="none" />
            <path d="M20,25 Q45,90 20,155" strokeWidth="0.5" fill="none" />
            <path d="M35,15 Q55,90 35,165" strokeWidth="0.5" fill="none" />
            <path d="M60,10 Q60,90 60,170" strokeWidth="0.5" fill="none" />
            <path d="M85,15 Q65,90 85,165" strokeWidth="0.5" fill="none" />
            <path d="M100,25 Q75,90 100,155" strokeWidth="0.5" fill="none" />
            <path d="M25,35 Q60,70 95,35" strokeWidth="0.4" fill="none" opacity="0.5" />
            <path d="M30,55 Q60,80 90,55" strokeWidth="0.4" fill="none" opacity="0.5" />
            <path d="M30,125 Q60,100 90,125" strokeWidth="0.4" fill="none" opacity="0.5" />
            <path d="M25,145 Q60,110 95,145" strokeWidth="0.4" fill="none" opacity="0.5" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default WireframeShapes;
