import { useEffect, useState } from 'react'
import { HandCoins, Feather, Palmtree, Globe2, ArrowUpRight } from 'lucide-react'
import Reveal, { RevealLines } from '../components/Reveal.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import { supabase } from '../lib/supabase.js'

const categories = ['All', 'Engineering', 'Design', 'Research', 'Operations']

const fallbackPositions = [
  { title: 'AI Safety Researcher', category: 'Research', location: 'Remote / Global' },
  { title: 'Senior Frontend Engineer', category: 'Engineering', location: 'Remote' },
  { title: 'Security Engineer', category: 'Engineering', location: 'Hybrid' },
  { title: 'Product Designer', category: 'Design', location: 'Remote' },
  { title: 'ML Engineer — Deepfake Detection', category: 'Research', location: 'Remote' },
  { title: 'Developer Relations', category: 'Operations', location: 'Remote' },
]

const benefits = [
  { icon: HandCoins, title: 'Profit Sharing', desc: 'When the mission wins, everyone wins.' },
  { icon: Feather, title: 'Zero Bureaucracy', desc: 'Small team. Direct ownership. No black boxes.' },
  { icon: Palmtree, title: 'Annual Retreat', desc: 'One week a year, somewhere worth being.' },
  { icon: Globe2, title: 'Global & Remote', desc: '12+ locations. Work from where you think best.' },
]

export default function Careers() {
  const [filter, setFilter] = useState('All')
  const [positions, setPositions] = useState(fallbackPositions)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }
    let active = true
    supabase
      .from('jobs')
      .select('title, department, location, description')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!active) return
        if (!error && data && data.length > 0) {
          setPositions(
            data.map((j) => ({
              title: j.title,
              category: j.department || 'Operations',
              location: j.location || 'Remote',
              description: j.description,
            }))
          )
        }
        setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  const filtered = filter === 'All' ? positions : positions.filter((p) => p.category === filter)

  return (
    <main className="relative">
      <section className="bg-blueprint px-6 pb-24 pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">NXT</span>
            <span className="h-px w-10 bg-[#D62828]/50" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#9E9E9E]">New Chapters</span>
          </Reveal>
          <RevealLines
            tag="h1"
            className="mt-10 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] sm:text-6xl lg:text-8xl"
            lines={['JOIN', 'THE MISSION.']}
          />
          <Reveal delay={0.15} className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-[#9E9E9E] sm:text-lg">
              Join a team working at the intersection of artificial intelligence, security, and responsibility. We
              are always looking for driven individuals who believe in this mission.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="01" text="Open Positions" />
          <Reveal delay={0.05} className="mt-10 flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`border px-5 py-2.5 font-mono-tech text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  filter === c
                    ? 'border-[#D62828] bg-[#D62828] text-white'
                    : 'border-white/10 text-[#9E9E9E] hover:border-[#D62828]/50 hover:text-[#EDEDED]'
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>
          <div className="mt-10 space-y-px">
            {!loading && filtered.length === 0 && (
              <div className="border border-white/[0.06] bg-[#0A0A0A] px-8 py-7 text-center font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#9E9E9E]">
                No open roles in this category right now.
              </div>
            )}
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <div className="group flex flex-col justify-between gap-4 border border-white/[0.06] bg-[#0A0A0A] px-8 py-7 transition-colors duration-500 hover:bg-[#1A1A1A] sm:flex-row sm:items-center lg:px-12">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#F5F5F5] sm:text-xl">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#9E9E9E]">
                      <span className="text-[#D62828]">{p.category}</span>
                      <span>{p.location}</span>
                    </div>
                  </div>
                  <a
                    href="mailto:antiai.hr@gmail.com"
                    className="link-sweep shrink-0 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#EDEDED]"
                  >
                    Apply
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10 text-center font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#9E9E9E]">
            Don't see your role? Write to{' '}
            <a href="mailto:antiai.hr@gmail.com" className="link-sweep text-[#D62828]">
              antiai.hr@gmail.com
            </a>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-white/[0.06] bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="02" text="Collective Benefits" />
          <div className="mt-14 grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06} className="bg-[#0A0A0A] p-8">
                <b.icon size={22} strokeWidth={1.5} className="text-[#D62828]" />
                <h3 className="mt-6 font-display text-lg font-bold text-[#F5F5F5]">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9E9E9E]">{b.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
