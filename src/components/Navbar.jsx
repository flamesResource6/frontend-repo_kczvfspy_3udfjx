import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#journey', label: 'Journey' },
    { href: '#technology', label: 'Technology' },
    { href: '#impact', label: 'Impact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">Solara</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-full px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">Get in touch</a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-black/5" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <Menu className="w-5 h-5" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2 text-gray-800" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="py-2 text-gray-800" onClick={() => setOpen(false)}>Get in touch</a>
          </div>
        </div>
      )}
    </header>
  )
}
