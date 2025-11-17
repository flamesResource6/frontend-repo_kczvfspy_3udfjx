import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Technology from './components/Technology'
import ImpactCTA from './components/ImpactCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <GradientDivider />
        <Journey />
        <SectionDivider />
        <Technology />
        <SectionDivider subtle />
        <ImpactCTA />
        <Footer />
      </main>
    </div>
  )
}

function GradientDivider() {
  return (
    <div className="h-20 w-full bg-gradient-to-b from-black to-gray-950" aria-hidden="true" />
  )
}

function SectionDivider({ subtle = false }) {
  return (
    <div
      className={
        subtle
          ? 'h-24 w-full bg-[radial-gradient(40%_60%_at_50%_100%,rgba(16,185,129,0.15),transparent)]'
          : 'h-24 w-full bg-[radial-gradient(40%_60%_at_50%_0%,rgba(251,191,36,0.25),transparent)]'
      }
      aria-hidden="true"
    />
  )
}

function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Solara — Clean power, beautifully engineered.</p>
        <div className="flex items-center gap-3 text-sm">
          <a href="#hero" className="text-gray-700 hover:text-gray-900">Back to top</a>
          <span className="text-gray-300">•</span>
          <a href="#technology" className="text-gray-700 hover:text-gray-900">Technology</a>
          <span className="text-gray-300">•</span>
          <a href="#impact" className="text-gray-700 hover:text-gray-900">Impact</a>
        </div>
      </div>
    </footer>
  )
}

export default App
