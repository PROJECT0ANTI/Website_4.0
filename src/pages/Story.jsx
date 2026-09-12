import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldAlert, Server, Building2, ArrowUpRight, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { RevealLines } from '../components/Reveal.jsx'
import SectionLabel from '../components/SectionLabel.jsx'

const focus = [
  { icon: ShieldAlert, title: 'AI Safety', desc: 'Protecting humanity from uncontrolled AI systems.' },
  { icon: Server, title: 'Infrastructure & Defence', desc: 'Resilience for the systems the world depends on.' },
  { icon: Building2, title: 'Enterprise Solutions', desc: 'Responsible, high-impact innovation for enterprises and public institutions.' },
]

const chapters = [
  {
    ch: 'CH.01',
    title: 'Our Vision',
    body: 'At ANTI.AI, our vision is to redefine technology, defense mechanisms and development through Anti AI Softwares that work for the betterment of mankind.',
  },
  {
    ch: 'CH.02',
    title: 'Our Mission',
    body: 'To protect and empower by strategically managing the infiltration of artificial intelligence. We believe that AI should be harnessed responsibly for the betterment of humanity and society.',
  },
  {
    ch: 'CH.03',
    title: 'Ethical Integrity',
    body: 'We prioritize transparency and accountability in every product we develop. By ensuring AI aligns with human values, we create technology that respects privacy, maintains autonomy, and serves the greater good.',
  },
  {
    ch: 'CH.04',
    title: 'Accountable AI, Long Term',
    body: 'We believe AI should amplify human potential, not undermine it. Our work centers on building systems that remain accountable, governed, and aligned with real-world human values.',
  },
]

function Chapter({ ch, title, body, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-white/[0.06] bg-[#0A0A0A]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 p-8 text-left transition-colors duration-300 hover:bg-[#141414]"
      >
        <div className="flex items-center gap-6">
          <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">{ch}</span>
          <span className="font-display text-xl font-bold uppercase tracking-tight text-[#F5F5F5] sm:text-2xl">{title}</span>
        </div>
        <Plus size={18} className={`shrink-0 text-[#9E9E9E] transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-8 max-w-2xl text-sm leading-relaxed text-[#9E9E9E]">{body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Story() {
  return (
    <main className="relative">
      <section className="bg-blueprint px-6 pb-24 pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">ORG</span>
            <span className="h-px w-10 bg-[#D62828]/50" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#9E9E9E]">Our Story</span>
          </Reveal>
          <RevealLines
            tag="h1"
            className="mt-10 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] sm:text-6xl lg:text-8xl"
            lines={['BUILDING DEFENCES', 'AGAINST AGI.']}
          />
          <Reveal delay={0.15} className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-[#9E9E9E] sm:text-lg">
              ANTI.AI is an AI security and product development company focused on anticipating and mitigating
              risks posed by artificial intelligence before they materialize. We are a small, focused team working
              toward a long-term vision: making advanced AI safe, transparent, and accessible without compromising
              control.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GENESIS */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="01" text="Our Genesis" />
          <div className="mt-10 grid gap-14 lg:grid-cols-[2fr_1fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-3xl lg:text-4xl">
                From focused beginnings to global relevance.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#9E9E9E] sm:text-base">
                Anti AI was founded with a clear mission: to address the risks posed by rapidly advancing
                artificial intelligence before they evolve into systemic threats. What began as a research driven
                initiative has grown into a platform led effort spanning AI safety, enterprise security, and
                infrastructure resilience.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#9E9E9E] sm:text-base">
                Our work today sits at the intersection of advanced research, real world deployment, and long term
                governance.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex items-center justify-center border border-white/[0.06] bg-[#0A0A0A] p-10">
              <div className="text-center">
                <div className="font-display text-5xl font-extrabold tracking-tight text-[#D62828] lg:text-6xl">5,000+</div>
                <div className="mt-3 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#9E9E9E]">
                  Professionals (Projected) — by 2027
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="border-t border-white/[0.06] bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="02" text="Our Focus" />
          <div className="mt-14 grid gap-px bg-white/[0.06] sm:grid-cols-3">
            {focus.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className="bg-[#0A0A0A] p-10">
                <f.icon size={26} strokeWidth={1.5} className="text-[#D62828]" />
                <h3 className="mt-6 font-display text-xl font-bold text-[#F5F5F5]">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9E9E9E]">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="03" text="Our Principles — The Manifesto" />
          <div className="mt-14 space-y-px">
            {chapters.map((c, i) => (
              <Reveal key={c.ch} delay={i * 0.05}>
                <Chapter {...c} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TAGLINE + CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#A31D1D]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,40,40,0.35),transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-10">
          <Reveal>
            <div className="font-display text-2xl text-white sm:text-3xl">
              अन्ते सत्यं विजयते।{' '}
              <span className="ml-2 font-mono-tech text-xs uppercase tracking-[0.25em] text-white/80">The Truth Prevails.</span>
            </div>
            <Link
              className="group mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] px-10 py-5 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:scale-[1.03]"
              to="/makers"
            >
              Meet the Makers
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
