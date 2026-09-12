import { Link } from 'react-router-dom'

const iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Instagram = () => (
  <svg {...iconProps}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)
const Threads = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
  </svg>
)
const YouTube = () => (
  <svg {...iconProps}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
)
const LinkedIn = () => (
  <svg {...iconProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Threads, label: 'Threads' },
  { icon: YouTube, label: 'YouTube' },
  { icon: LinkedIn, label: 'LinkedIn' },
]

const nav = [
  { to: '/', label: 'The Prologue' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/story', label: 'Our Story' },
  { to: '/makers', label: 'The Makers' },
  { to: '/careers', label: 'New Chapters' },
  { to: '/collaborate', label: 'Collaborate' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="font-display text-5xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-6xl">
              ANTI<span className="text-[#D62828]">.</span>AI
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#9E9E9E]">
              A software company focused on responsible, human-governed artificial intelligence. Powerful,
              auditable, aligned with real-world accountability.
            </p>
            <div className="mt-8 flex gap-4">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-[#9E9E9E] transition-colors duration-300 hover:border-[#D62828] hover:text-[#D62828]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#D62828]">Navigation</div>
            <ul className="mt-6 space-y-3">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    className="link-sweep text-sm text-[#9E9E9E] transition-colors duration-300 hover:text-[#EDEDED]"
                    to={l.to}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#D62828]">Channels</div>
            <ul className="mt-6 space-y-3 text-sm text-[#9E9E9E]">
              <li>
                <a href="mailto:hello@antiai.ltd" className="link-sweep hover:text-[#EDEDED]">
                  hello@antiai.ltd
                </a>
              </li>
              <li>
                <a href="mailto:support@antiai.ltd" className="link-sweep hover:text-[#EDEDED]">
                  support@antiai.ltd
                </a>
              </li>
              <li>
                <a href="tel:+919116665513" className="link-sweep hover:text-[#EDEDED]">
                  +91 91166 65513
                </a>
              </li>
              <li className="pt-4">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#9E9E9E]/60">Legal</span>
                <div className="mt-2 flex flex-col gap-2">
                  <Link to="/privacy" className="link-sweep hover:text-[#EDEDED]">Privacy Policy</Link>
                  <Link to="/terms" className="link-sweep hover:text-[#EDEDED]">Terms &amp; Conditions</Link>
                  <Link to="/support" className="link-sweep hover:text-[#EDEDED]">App Support</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <div className="font-display text-lg text-[#EDEDED]">
            अन्ते सत्यं विजयते।{' '}
            <span className="ml-2 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#D62828]">
              The Truth Prevails.
            </span>
          </div>
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#9E9E9E]/60">
            © 2026 ANTI.AI — All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
