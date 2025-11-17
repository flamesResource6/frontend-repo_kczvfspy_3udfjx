import { motion } from 'framer-motion'
import { Sun, Cpu, Battery, Zap } from 'lucide-react'

const items = [
  {
    icon: Sun,
    title: 'Photovoltaic Effect',
    text: 'When photons hit a semiconductor, they excite electrons into the conduction band, generating electron-hole pairs that can be driven by an internal electric field.',
  },
  {
    icon: Cpu,
    title: 'Cell Engineering',
    text: 'Modern cells use passivated emitters, selective contacts, and textured surfaces to minimize recombination and maximize light trapping.',
  },
  {
    icon: Zap,
    title: 'Inverters & MPPT',
    text: 'Maximum Power Point Tracking (MPPT) adjusts voltage and current to harvest peak power as irradiance and temperature vary.',
  },
  {
    icon: Battery,
    title: 'Storage Synergy',
    text: 'Lithium and flow batteries store excess energy, enabling firm, dispatchable clean power and microgrid resilience.',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">The Technology Behind Solar Farms</h2>
          <p className="mt-3 text-gray-600">Key concepts that make utility-scale solar efficient, affordable, and reliable.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <it.icon className="w-6 h-6 text-amber-500" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
