import { motion } from 'framer-motion'

export function SunRayTransition() {
  return (
    <section aria-hidden className="relative h-40 sm:h-52 w-full overflow-hidden bg-gray-950">
      {/* subtle stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(2px_2px_at_20%_30%,#ffffff_40%,transparent_41%),radial-gradient(1.5px_1.5px_at_70%_60%,#ffffff_30%,transparent_31%),radial-gradient(1px_1px_at_40%_80%,#ffffff_25%,transparent_26%)] [background-size:1200px_600px,900px_500px,700px_400px] [background-repeat:repeat]"></div>
      </div>
      {/* sweeping beam */}
      <motion.div
        initial={{ x: '-30%' }}
        animate={{ x: '130%' }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute -inset-y-10 -left-1/4 w-1/2 rotate-12"
      >
        <div className="h-full w-full bg-gradient-to-r from-amber-400/0 via-amber-300/30 to-emerald-300/0 blur-2xl" />
      </motion.div>
      {/* sun glow at left */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.9),rgba(251,191,36,0.0)_70%)] blur-md" />
      {/* earth rim at right */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.35),rgba(16,185,129,0.25),transparent_70%)]" />
    </section>
  )
}

export function AtmosphericTransition() {
  return (
    <section aria-hidden className="relative h-32 sm:h-40 w-full overflow-hidden bg-gradient-to-b from-sky-900 to-blue-800">
      {/* moving scatter dots to hint Rayleigh scattering */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-10%' }}
          animate={{ x: '110%' }}
          transition={{ repeat: Infinity, duration: 8 + i * 2, delay: i * 0.4, ease: 'linear' }}
          className="absolute top-1/2 h-px w-2/3"
          style={{
            transform: `translateY(${(i - 1) * 10}px)`,
            background:
              'radial-gradient(circle at 10% 50%, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.0) 40%), radial-gradient(circle at 40% 50%, rgba(255,255,255,0.45) 0, rgba(255,255,255,0.0) 40%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.35) 0, rgba(255,255,255,0.0) 40%)',
            backgroundSize: '4px 4px, 4px 4px, 4px 4px',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.2),transparent)]" />
    </section>
  )
}

export function PVSketchTransition() {
  return (
    <section aria-hidden className="relative h-24 sm:h-28 w-full overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-80 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.04)_0,rgba(0,0,0,0.04)_1px,transparent_1px,transparent_12px)]" />
      <motion.div
        initial={{ x: '-20%' }}
        animate={{ x: '120%' }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-1/2 -translate-y-1/2 h-2 w-1/3 bg-gradient-to-r from-amber-400/0 via-amber-400/70 to-emerald-400/0 rounded-full blur-sm"
      />
      <div className="absolute inset-x-6 bottom-4 h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full" />
    </section>
  )
}
