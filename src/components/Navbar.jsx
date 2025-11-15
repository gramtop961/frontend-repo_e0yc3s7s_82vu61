import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Leaf, Phone, MapPin } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/hours', label: 'Opening Hours' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-green-900 bg-green-100' : 'text-green-900/80 hover:text-green-900 hover:bg-green-50'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-green-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm tracking-wide text-green-800">Mauch Garten</p>
              <p className="text-xs text-green-700/80">Hilzingen</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 text-green-900/80 hover:text-green-900">
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call Us</span>
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 text-green-900/80 hover:text-green-900">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Find Us</span>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-green-900 hover:bg-green-50">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-green-900/10 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
