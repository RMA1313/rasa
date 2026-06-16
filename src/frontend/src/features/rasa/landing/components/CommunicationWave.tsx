export const CommunicationWave = () => (
  <svg className="rasa-wave" viewBox="0 0 1200 240" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="rasaWaveGradient" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" stopColor="#5be7ff" stopOpacity="0" />
        <stop offset="40%" stopColor="#5be7ff" stopOpacity="0.7" />
        <stop offset="70%" stopColor="#6b5cff" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M-10 140C110 90 194 44 300 44c121 0 180 100 299 100s183-80 302-80c118 0 184 40 309 136"
      fill="none"
      stroke="url(#rasaWaveGradient)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M-10 178C130 116 234 90 352 92c118 2 184 70 297 70 114 0 174-68 292-68 93 0 162 24 269 78"
      fill="none"
      stroke="url(#rasaWaveGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
)
