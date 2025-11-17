import { motion } from 'framer-motion'

export default function ImpactCTA() {
  return (
    <section id="impact" className="relative py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900"
        >
          Clean power for a brighter planet
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-600 max-w-2xl mx-auto"
        >
          Every installed watt reduces emissions and strengthens energy independence. Explore how to bring solar to your home, business, or community.
        </motion.p>
        <div className="mt-8 flex justify-center gap-3">
          <a href="#contact" className="inline-flex items-center rounded-full px-5 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 transition">Talk to an expert</a>
          <a href="#journey" className="inline-flex items-center rounded-full px-5 py-2.5 border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition">Review the journey</a>
        </div>
      </div>
    </section>
  )
}
