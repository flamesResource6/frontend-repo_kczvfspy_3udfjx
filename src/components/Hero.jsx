import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/eCQ2E3PpnWVVY5aw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 py-20">
        <div className="text-white">
          <p className="inline-flex items-center text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur mb-4">Clean Energy • Future Ready</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            From Sunlight to Power
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-emerald-300">The Solar Journey</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Explore how photons become electricity. Scroll to follow the energy—through atmosphere, silicon, and grid.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#journey" className="inline-flex items-center rounded-full px-5 py-2.5 bg-white text-gray-900 hover:bg-amber-100 transition">Start the journey</a>
            <a href="#technology" className="inline-flex items-center rounded-full px-5 py-2.5 border border-white/40 text-white hover:bg-white/10 transition">Learn the tech</a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,255,255,0.25),transparent)]" />
    </section>
  )
}
