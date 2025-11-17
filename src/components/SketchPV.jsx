import { motion } from 'framer-motion'

export default function SketchPV() {
  return (
    <section id="pv-sketch" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">How Photovoltaics Works — Sketch</h2>
          <p className="mt-3 text-gray-600">A simplified line-drawing showing photons creating current across a p–n junction.</p>
        </div>

        <div className="mt-12 relative rounded-2xl border border-gray-200 bg-gray-50 p-6 overflow-hidden">
          {/* grid background */}
          <div className="absolute inset-0 opacity-100 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.03)_0,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_16px)]" />

          {/* cell rectangle */}
          <motion.div
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative z-10"
          >
            <svg viewBox="0 0 800 320" className="w-full h-[260px]">
              <defs>
                <linearGradient id="photon" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                  <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* p-n junction boundaries */}
              <rect x="80" y="80" width="640" height="160" rx="8" fill="none" stroke="#111827" strokeWidth="2" />
              <line x1="400" y1="80" x2="400" y2="240" stroke="#111827" strokeWidth="2" strokeDasharray="6 6" />

              {/* labels */}
              <text x="180" y="70" fill="#374151" fontSize="12">p-type</text>
              <text x="560" y="70" fill="#374151" fontSize="12">n-type</text>
              <text x="392" y="70" fill="#374151" fontSize="12">junction</text>

              {/* contacts */}
              <rect x="60" y="110" width="10" height="100" fill="#111827" />
              <rect x="730" y="110" width="10" height="100" fill="#111827" />
              <text x="40" y="235" fill="#374151" fontSize="12">-</text>
              <text x="746" y="235" fill="#374151" fontSize="12">+</text>

              {/* arrows for field */}
              {Array.from({ length: 6 }).map((_, i) => (
                <g key={i} transform={`translate(${320 + i * 30}, 150)`}>
                  <line x1="-10" y1="0" x2="10" y2="0" stroke="#6b7280" strokeWidth="1.5" />
                  <polygon points="10,0 6,-3 6,3" fill="#6b7280" />
                </g>
              ))}

              {/* photon pulses */}
              {Array.from({ length: 4 }).map((_, i) => (
                <g key={i}>
                  <motion.rect
                    initial={{ x: -100 }}
                    animate={{ x: 820 }}
                    transition={{ repeat: Infinity, duration: 5 + i, delay: i * 0.6, ease: 'easeInOut' }}
                    x="-100" y={110 + i * 20} width="120" height="8" rx="4" fill="url(#photon)"
                  />
                </g>
              ))}

              {/* electrons/holes drift */}
              {Array.from({ length: 7 }).map((_, i) => (
                <motion.circle key={i} cx={420 + i * 30} cy={160 + (i % 2 ? 10 : -10)} r="3" fill="#111827"
                  animate={{ cx: 650 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6 + i * 0.3 }} />
              ))}
            </svg>
          </motion.div>

          <div className="relative z-10 mt-4 text-sm text-gray-600">
            Photons enter the cell, generate electron–hole pairs, and the internal field drives charge carriers to contacts, creating DC power.
          </div>
        </div>
      </div>
    </section>
  )
}
