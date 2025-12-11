import { useEffect, useState } from "react";

interface ShapePosition {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
}

const WireframeShapes = () => {
  const [shapes, setShapes] = useState<ShapePosition[]>([
    { x: 10, y: 15, offsetX: 0, offsetY: 0 },
    { x: 85, y: 12, offsetX: 0, offsetY: 0 },
    { x: 5, y: 70, offsetX: 0, offsetY: 0 },
    { x: 85, y: 75, offsetX: 0, offsetY: 0 },
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
      {/* Top left polyhedron */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${shapes[0].x}%`,
          top: `${shapes[0].y}%`,
          transform: `translate(${shapes[0].offsetX}px, ${shapes[0].offsetY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-40 h-40 animate-float opacity-60">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <polygon points="100,20 180,80 150,180 50,180 20,80" strokeWidth="1" fill="none" />
            <line x1="100" y1="20" x2="100" y2="100" strokeWidth="1" />
            <line x1="20" y1="80" x2="100" y2="100" strokeWidth="1" />
            <line x1="180" y1="80" x2="100" y2="100" strokeWidth="1" />
            <line x1="50" y1="180" x2="100" y2="100" strokeWidth="1" />
            <line x1="150" y1="180" x2="100" y2="100" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Top right abstract lines */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${shapes[1].x}%`,
          top: `${shapes[1].y}%`,
          transform: `translate(${shapes[1].offsetX}px, ${shapes[1].offsetY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-48 h-32 animate-float-reverse opacity-50">
          <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <path d="M10,60 Q50,10 100,40 T190,30" strokeWidth="1" fill="none" />
            <path d="M10,80 Q60,30 110,60 T190,50" strokeWidth="1" fill="none" />
            <path d="M10,100 Q70,50 120,80 T190,70" strokeWidth="1" fill="none" />
            <circle cx="100" cy="40" r="3" fill="currentColor" />
            <circle cx="150" cy="55" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Bottom left icosahedron */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${shapes[2].x}%`,
          top: `${shapes[2].y}%`,
          transform: `translate(${shapes[2].offsetX}px, ${shapes[2].offsetY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-36 h-36 animate-float opacity-50">
          <svg viewBox="0 0 150 150" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <polygon points="75,10 130,50 130,100 75,140 20,100 20,50" strokeWidth="1" fill="none" />
            <line x1="75" y1="10" x2="75" y2="140" strokeWidth="0.5" />
            <line x1="20" y1="50" x2="130" y2="100" strokeWidth="0.5" />
            <line x1="130" y1="50" x2="20" y2="100" strokeWidth="0.5" />
            <circle cx="75" cy="75" r="25" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Bottom right torus */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${shapes[3].x}%`,
          top: `${shapes[3].y}%`,
          transform: `translate(${shapes[3].offsetX}px, ${shapes[3].offsetY}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-44 h-36 animate-spin-slow opacity-50">
          <svg viewBox="0 0 200 160" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
            <ellipse cx="100" cy="80" rx="80" ry="30" strokeWidth="1" fill="none" />
            <ellipse cx="100" cy="80" rx="40" ry="15" strokeWidth="1" fill="none" />
            <ellipse cx="60" cy="80" rx="10" ry="25" strokeWidth="0.5" fill="none" />
            <ellipse cx="100" cy="80" rx="10" ry="30" strokeWidth="0.5" fill="none" />
            <ellipse cx="140" cy="80" rx="10" ry="25" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default WireframeShapes;