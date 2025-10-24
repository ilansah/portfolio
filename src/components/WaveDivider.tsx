// SVG wave divider avec transitions fluides et élégantes
export default function WaveDivider() {
  return (
    <svg
      className="w-full h-auto"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @keyframes wave {
            0%, 100% { d: path('M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z'); }
            50% { d: path('M0,50 Q300,30 600,50 T1200,50 L1200,100 L0,100 Z'); }
          }
          .wave1 { animation: wave 6s ease-in-out infinite; }
          .wave2 { animation: wave 8s ease-in-out infinite reverse; }
        `}</style>
      </defs>
      
      {/* Couche 1 - Bleu clair flottant */}
      <path
        d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z"
        fill="rgba(100, 172, 250, 0.15)"
        className="wave1"
      />
      
      {/* Couche 2 - Bleu moyen */}
      <path
        d="M0,60 Q350,25 600,60 T1200,60 L1200,100 L0,100 Z"
        fill="rgba(59, 130, 246, 0.25)"
        className="wave2"
      />
      
      {/* Couche 3 - Bleu principal */}
      <path
        d="M0,65 Q400,30 600,65 T1200,65 L1200,100 L0,100 Z"
        fill="rgba(37, 99, 235, 0.35)"
      />
    </svg>
  );
}
