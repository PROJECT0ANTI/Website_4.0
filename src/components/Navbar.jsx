import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'The Prologue' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/story', label: 'Our Story' },
  { to: '/makers', label: 'The Makers' },
  { to: '/careers', label: 'New Chapters' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? 'border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link className="group flex items-baseline gap-1" to="/">
          <span className="font-display text-xl font-extrabold tracking-tight text-[#F5F5F5]">ANTI.AI</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#D62828] transition-transform duration-300 group-hover:scale-150" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `link-sweep font-mono-tech text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isActive ? 'text-[#D62828]' : 'text-[#9E9E9E] hover:text-[#EDEDED]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link
          className="hidden border border-[#D62828]/60 px-5 py-2.5 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#F5F5F5] transition-colors duration-300 hover:bg-[#D62828] hover:text-white lg:block"
          to="/collaborate"
        >
          Initiate Protocol
        </Link>
        <button className="text-[#EDEDED] lg:hidden" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#0A0A0A] px-6 py-6 lg:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 font-mono-tech text-[11px] uppercase tracking-[0.22em] ${
                  isActive ? 'text-[#D62828]' : 'text-[#9E9E9E]'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/collaborate"
            onClick={() => setOpen(false)}
            className="mt-3 border border-[#D62828]/60 px-5 py-2.5 text-center font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#F5F5F5] transition-colors duration-300 hover:bg-[#D62828] hover:text-white"
          >
            Initiate Protocol
          </Link>
        </nav>
      )}
    </header>
  )
}
