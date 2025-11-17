import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Sunlight Emerges',
    subtitle: 'Photon emission',
    description:
      'The sun fuses hydrogen into helium, releasing photons that travel ~8 minutes to reach Earth.',
  },
  {
    id: 2,
    title: 'Atmospheric Dance',
    subtitle: 'Scattering & spectrum',
    description:
      'Rayleigh scattering paints our sky blue while useful wavelengths in the visible/near-IR power photovoltaics.',
  },
  {
    id: 3,
    title: 'Panel Interface',
    subtitle: 'Anti-reflective coatings',
    description:
      'Textured glass and coatings reduce reflection so more light enters the cell.',
  },
  {
    id: 4,
    title: 'Inside the Cell',
    subtitle: 'p-n junction physics',
    description:
      'Photons excite electrons in doped silicon. The built-in field separates charges, creating current.',
  },
  {
    id: 5,
    title: 'From DC to AC',
    subtitle: 'Inversion & conditioning',
    description:
      'Inverters convert direct current to grid-synchronous alternating current with minimal losses.',
  },
  {
    id: 6,
    title: 'Power to Grid',
    subtitle: 'Distribution',
    description:
      'Electricity is stepped up, metered, and dispatched—powering homes, vehicles, and industry.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">The Journey of a Photon</h2>
          <p className="mt-3 text-white/70">Scroll through the stages that transform light into electricity.</p>
        </div>
        <div className="mt-12 grid gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="text-emerald-300 text-xs tracking-widest uppercase">{s.subtitle}</div>
              <h3 className="mt-1 text-2xl font-medium">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
