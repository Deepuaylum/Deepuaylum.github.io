import { useEffect, useState } from "react";

interface ShapePosition {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
}

const WireframeShapes = () => {
  const [shapes, setShapes] = useState<ShapePosition[]>([
    { x: 8, y: 20, offsetX: 0, offsetY: 0 },
    { x: 80, y: 15, offsetX: 0, offsetY: 0 },
    { x: 5, y: 55, offsetX: 0, offsetY: 0 },
    { x: 82, y: 50, offsetX: 0, offsetY: 0 },
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      setShapes(prevShapes => 
        prevShapes.map(shape => {
          const dx = shape.x - x;
          const dy = shape.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 30;
          const repelStrength = 60;

          if (distance < repelRadius) {
            const force = (repelRadius - distance) / repelRadius;
            const angle = Math.atan2(dy, dx);
            return {
              ...shape,
              offsetX: Math.cos(angle) * force * repelStrength,
              offsetY: Math.sin(angle) * force * repelStrength,
            };
          }
          
          return {
            ...shape,
            offsetX: shape.offsetX * 0.92,
            offsetY: shape.offsetY * 0.92,
          };
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Top left - Dodecahedron */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${shapes[0].x}%`,
          top: `${shapes[0].y}%`,
          transform: `translate(${shapes[0].offsetX}px, ${shapes[0].offsetY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 animate-float opacity-60">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            {/* Outer pentagon */}
            <polygon points="100,15 175,60 155,150 45,150 25,60" strokeWidth="0.8" fill="none" />
            {/* Inner pentagon */}
            <polygon points="100,45 145,75 130,130 70,130 55,75" strokeWidth="0.8" fill="none" />
            {/* Connecting lines */}
            <line x1="100" y1="15" x2="100" y2="45" strokeWidth="0.8" />
            <line x1="175" y1="60" x2="145" y2="75" strokeWidth="0.8" />
            <line x1="155" y1="150" x2="130" y2="130" strokeWidth="0.8" />
            <line x1="45" y1="150" x2="70" y2="130" strokeWidth="0.8" />
            <line x1="25" y1="60" x2="55" y2="75" strokeWidth="0.8" />
            {/* Cross connections */}
            <line x1="100" y1="45" x2="145" y2="75" strokeWidth="0.5" opacity="0.5" />
            <line x1="145" y1="75" x2="130" y2="130" strokeWidth="0.5" opacity="0.5" />
            <line x1="130" y1="130" x2="70" y2="130" strokeWidth="0.5" opacity="0.5" />
            <line x1="70" y1="130" x2="55" y2="75" strokeWidth="0.5" opacity="0.5" />
            <line x1="55" y1="75" x2="100" y2="45" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Top right - Abstract curves */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${shapes[1].x}%`,
          top: `${shapes[1].y}%`,
          transform: `translate(${shapes[1].offsetX}px, ${shapes[1].offsetY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-28 h-24 md:w-36 md:h-28 animate-float-reverse opacity-50">
          <svg viewBox="0 0 150 100" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <path d="M10,50 Q40,10 75,30 T140,20" strokeWidth="0.8" fill="none" />
            <path d="M10,60 Q50,20 85,45 T140,35" strokeWidth="0.8" fill="none" />
            <path d="M10,70 Q45,35 80,55 T140,50" strokeWidth="0.8" fill="none" />
            <path d="M10,80 Q55,45 90,65 T140,60" strokeWidth="0.8" fill="none" />
            {/* Small dots */}
            <circle cx="75" cy="30" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="110" cy="40" r="1.5" fill="currentColor" opacity="0.6" />
            <circle cx="45" cy="55" r="1.5" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Bottom left - Geodesic sphere */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${shapes[2].x}%`,
          top: `${shapes[2].y}%`,
          transform: `translate(${shapes[2].offsetX}px, ${shapes[2].offsetY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 animate-float opacity-50">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            {/* Outer circle */}
            <circle cx="100" cy="100" r="70" strokeWidth="0.8" fill="none" />
            {/* Horizontal ellipse */}
            <ellipse cx="100" cy="100" rx="70" ry="25" strokeWidth="0.6" fill="none" />
            {/* Vertical ellipse */}
            <ellipse cx="100" cy="100" rx="25" ry="70" strokeWidth="0.6" fill="none" />
            {/* Diagonal lines forming geodesic pattern */}
            <line x1="30" y1="100" x2="100" y2="30" strokeWidth="0.5" opacity="0.6" />
            <line x1="100" y1="30" x2="170" y2="100" strokeWidth="0.5" opacity="0.6" />
            <line x1="170" y1="100" x2="100" y2="170" strokeWidth="0.5" opacity="0.6" />
            <line x1="100" y1="170" x2="30" y2="100" strokeWidth="0.5" opacity="0.6" />
            {/* Inner diamond */}
            <polygon points="100,55 145,100 100,145 55,100" strokeWidth="0.5" fill="none" opacity="0.5" />
            {/* Center point */}
            <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Bottom right - Hourglass/Hyperboloid mesh */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${shapes[3].x}%`,
          top: `${shapes[3].y}%`,
          transform: `translate(${shapes[3].offsetX}px, ${shapes[3].offsetY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-28 h-36 md:w-32 md:h-44 animate-spin-slow opacity-50">
          <svg viewBox="0 0 120 180" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            {/* Top ellipse */}
            <ellipse cx="60" cy="25" rx="40" ry="15" strokeWidth="0.8" fill="none" />
            {/* Bottom ellipse */}
            <ellipse cx="60" cy="155" rx="40" ry="15" strokeWidth="0.8" fill="none" />
            {/* Middle narrow ellipse */}
            <ellipse cx="60" cy="90" rx="15" ry="6" strokeWidth="0.6" fill="none" />
            {/* Vertical mesh lines */}
            <path d="M20,25 Q45,90 20,155" strokeWidth="0.5" fill="none" />
            <path d="M35,15 Q55,90 35,165" strokeWidth="0.5" fill="none" />
            <path d="M60,10 Q60,90 60,170" strokeWidth="0.5" fill="none" />
            <path d="M85,15 Q65,90 85,165" strokeWidth="0.5" fill="none" />
            <path d="M100,25 Q75,90 100,155" strokeWidth="0.5" fill="none" />
            {/* Cross mesh lines */}
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