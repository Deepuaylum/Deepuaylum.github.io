const WireframeShapes = () => {
  return (
    <>
      {/* Top left polyhedron */}
      <div className="absolute left-[10%] top-[15%] w-40 h-40 animate-float opacity-60">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
          <polygon points="100,20 180,80 150,180 50,180 20,80" strokeWidth="1" fill="none" />
          <line x1="100" y1="20" x2="100" y2="100" strokeWidth="1" />
          <line x1="20" y1="80" x2="100" y2="100" strokeWidth="1" />
          <line x1="180" y1="80" x2="100" y2="100" strokeWidth="1" />
          <line x1="50" y1="180" x2="100" y2="100" strokeWidth="1" />
          <line x1="150" y1="180" x2="100" y2="100" strokeWidth="1" />
        </svg>
      </div>

      {/* Top right abstract lines */}
      <div className="absolute right-[8%] top-[12%] w-48 h-32 animate-float-reverse opacity-50">
        <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
          <path d="M10,60 Q50,10 100,40 T190,30" strokeWidth="1" fill="none" />
          <path d="M10,80 Q60,30 110,60 T190,50" strokeWidth="1" fill="none" />
          <path d="M10,100 Q70,50 120,80 T190,70" strokeWidth="1" fill="none" />
          <circle cx="100" cy="40" r="3" fill="currentColor" />
          <circle cx="150" cy="55" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom left icosahedron */}
      <div className="absolute left-[5%] bottom-[20%] w-36 h-36 animate-float opacity-50">
        <svg viewBox="0 0 150 150" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
          <polygon points="75,10 130,50 130,100 75,140 20,100 20,50" strokeWidth="1" fill="none" />
          <line x1="75" y1="10" x2="75" y2="140" strokeWidth="0.5" />
          <line x1="20" y1="50" x2="130" y2="100" strokeWidth="0.5" />
          <line x1="130" y1="50" x2="20" y2="100" strokeWidth="0.5" />
          <circle cx="75" cy="75" r="25" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Bottom right torus */}
      <div className="absolute right-[5%] bottom-[15%] w-44 h-36 animate-spin-slow opacity-50">
        <svg viewBox="0 0 200 160" fill="none" stroke="currentColor" className="text-wireframe-stroke w-full h-full">
          <ellipse cx="100" cy="80" rx="80" ry="30" strokeWidth="1" fill="none" />
          <ellipse cx="100" cy="80" rx="40" ry="15" strokeWidth="1" fill="none" />
          {/* Cross sections */}
          <ellipse cx="60" cy="80" rx="10" ry="25" strokeWidth="0.5" fill="none" />
          <ellipse cx="100" cy="80" rx="10" ry="30" strokeWidth="0.5" fill="none" />
          <ellipse cx="140" cy="80" rx="10" ry="25" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
    </>
  );
};

export default WireframeShapes;
