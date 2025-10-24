// Réutilisable SVG wave pattern component
export default function WavePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="wave-pattern" x="0" y="0" width="1200" height="120" patternUnits="userSpaceOnUse">
          {/* Vague 1 - plus haute et prononcée */}
          <path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="rgba(59, 130, 246, 0.25)"
          />
          {/* Vague 2 - décalée et plus visible */}
          <path
            d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
            fill="rgba(59, 130, 246, 0.15)"
          />
          {/* Vague 3 - fond additionnel */}
          <path
            d="M0,100 Q300,70 600,100 T1200,100 L1200,120 L0,120 Z"
            fill="rgba(147, 197, 253, 0.1)"
          />
        </pattern>
      </defs>
      <rect width="1200" height="120" fill="url(#wave-pattern)" />
    </svg>
  );
}
