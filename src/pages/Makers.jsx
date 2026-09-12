import { Link } from 'react-router-dom'
import { Globe2, FlaskConical, Gem, ArrowUpRight } from 'lucide-react'
import Reveal, { RevealLines } from '../components/Reveal.jsx'
import SectionLabel from '../components/SectionLabel.jsx'

const leadership = [
  { initials: 'TS', name: 'Tanishq Sharma', role: 'Founder & CEO', link: 'https://www.linkedin.com/in/tanishq-shr' },
  { initials: 'DS', name: 'Divya Sharma', role: 'Chief Manager', link: 'https://www.linkedin.com/in/divya-sharma-7297822aa' },
  { initials: 'SP', name: 'Sharad Pandey', role: 'Director of Sales-Presales, Global Presales Solutions', link: 'https://www.linkedin.com/in/sharad-pandey-114825152' },
  { initials: 'AD', name: 'Arpit Dogra', role: 'Chief Technical Officer', link: 'https://www.linkedin.com/in/arpit-dogra18' },
  { initials: 'KS', name: 'Kunal Saxena', role: 'Technical Lead', link: 'https://www.linkedin.com/in/kunal-saxena-ks' },
  { initials: 'VP', name: 'Vishal Purohit', role: 'Head of Marketing', link: 'https://www.linkedin.com/in/vishal-purohit-35338b218' },
  { initials: 'SS', name: 'Shristi Shukla', role: 'Senior Software Developer', link: 'https://x.com/session_timeout' },
]

const ethos = [
  { icon: Globe2, title: 'Global Footprint', desc: 'Working across regions with partners, enterprises, and institutions focused on responsible AI adoption.' },
  { icon: FlaskConical, title: 'Research Driven', desc: 'What began as a research initiative now spans AI safety, enterprise security, and infrastructure resilience.' },
  { icon: Gem, title: 'Craftsmanship Standard', desc: 'Systems that remain powerful, auditable, and aligned with real-world accountability — no black boxes.' },
]

export default function Makers() {
  return (
    <main className="relative">
      <section className="bg-blueprint px-6 pb-24 pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">MKR</span>
            <span className="h-px w-10 bg-[#D62828]/50" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#9E9E9E]">The Makers</span>
          </Reveal>
          <RevealLines
            tag="h1"
            className="mt-10 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] sm:text-6xl lg:text-8xl"
            lines={['THE MINDS BEHIND', 'THE SHIELD.']}
          />
          <Reveal delay={0.15} className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-[#9E9E9E] sm:text-lg">
              A small, focused team of 32+ certified professionals working at the intersection of artificial
              intelligence, security, and responsibility.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="01" text="Core Leadership" />
          <div className="mt-14 grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 0.05}
                as="a"
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="trace-card group block bg-[#0A0A0A] p-8 transition-colors duration-300 hover:bg-[#141414]"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-[#D62828]/40 font-display text-lg font-bold text-[#D62828]">
                  {m.initials}
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-[#F5F5F5]">{m.name}</h3>
                <div className="mt-2 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#9E9E9E]">{m.role}</div>
              </Reveal>
            ))}
            <div aria-hidden="true" className="hidden bg-[#0A0A0A] lg:block" />
          </div>
          <Reveal delay={0.2} className="mt-16 text-center">
            <Link
              className="group inline-flex items-center gap-3 bg-[#D62828] px-8 py-4 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#A31D1D]"
              to="/careers"
            >
              Join the Mission
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ETHOS */}
      <section className="border-t border-white/[0.06] bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="02" text="Engineering Ethos" />
          <div className="mt-14 grid gap-px bg-white/[0.06] sm:grid-cols-3">
            {ethos.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08} className="bg-[#0A0A0A] p-10">
                <e.icon size={26} strokeWidth={1.5} className="text-[#D62828]" />
                <h3 className="mt-6 font-display text-xl font-bold text-[#F5F5F5]">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9E9E9E]">{e.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
