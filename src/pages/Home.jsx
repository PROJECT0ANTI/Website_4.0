import { ArrowUpRight, Smartphone, ShieldCheck, Cpu, CodeXml, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'
import Orb from '../components/Orb.jsx'
import Marquee from '../components/Marquee.jsx'
import Reveal, { RevealLines } from '../components/Reveal.jsx'
import SectionLabel from '../components/SectionLabel.jsx'

const stats = [
  { value: '32+', label: 'Certified Professionals' },
  { value: '89+', label: 'Total Products' },
  { value: '30+', label: 'Partners' },
  { value: '12+', label: 'Global Locations' },
]

const projects = [
  {
    icon: Smartphone,
    index: 'P.01',
    title: 'ANTIGPT',
    subtitle: 'Mobile Application',
    desc: 'A privacy-first mobile application designed to detect AI-generated media. Built for real-world use with fast on-device intelligence and optional verification.',
    tags: ['Deepfake Detection', 'On-device AI', 'Privacy First', 'Real-time Analysis'],
    meta: 'Available on iOS',
    metaHref: 'https://apps.apple.com/us/app/anti-0/id6757922031',
  },
  {
    icon: ShieldCheck,
    index: 'P.02',
    title: 'ANTITODE',
    subtitle: 'Enterprise Security Platform',
    desc: 'An enterprise-grade security platform built to predict threats, enforce governed AI decisions, and protect modern cloud infrastructure before attacks occur.',
    tags: ['Predictive Security', 'Threat Forecasting', 'Governed AI', 'Human-in-the-loop'],
    meta: 'Enterprise Grade',
  },
]

const pillars = [
  { icon: Cpu, title: 'AI Product Development', desc: 'From MVP to production-ready systems — agents, automation, and decision systems.' },
  { icon: CodeXml, title: 'Web Development', desc: 'High-performance web platforms engineered for scale and clarity.' },
  { icon: Smartphone, title: 'Mobile Development', desc: 'Native-quality mobile products with real-world usability baked in.' },
  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Resilient, governed infrastructure designed for defence-grade uptime.' },
]

const outcomes = [
  { metric: '+312%', label: 'Revenue Growth', context: 'B2B SaaS · AI-assisted decision pipelines' },
  { metric: '4x', label: 'Throughput Increase', context: 'Logistics enterprise · Intelligent automation' },
  { metric: '-45%', label: 'Development Time', context: 'End-to-end delivery · Aggressive timelines' },
]

export default function Home() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="bg-blueprint relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 lg:px-10">
        <Orb />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal className="mb-8 flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#9E9E9E]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#D62828]" />
            <span>SYS.STATUS — OPERATIONAL /// HUMAN-GOVERNED AI</span>
          </Reveal>
          <RevealLines
            tag="h1"
            className="font-display text-[17vw] font-extrabold uppercase leading-[0.88] tracking-tight text-[#F5F5F5] sm:text-[13vw] lg:text-[9.5rem]"
            lines={[
              "WE'RE",
              <>
                ANTI<span className="text-[#D62828]">.</span>AI
              </>,
            ]}
          />
          <Reveal delay={0.15} className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-[#9E9E9E] sm:text-lg">
              A software company focused on responsible, human-governed artificial intelligence. We design systems
              that are powerful, auditable, and aligned with real-world accountability.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              className="group flex items-center gap-3 bg-[#D62828] px-8 py-4 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#A31D1D]"
              to="/capabilities"
            >
              Explore Capabilities
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link className="link-sweep font-mono-tech text-xs uppercase tracking-[0.22em] text-[#EDEDED]" to="/collaborate">
              Initiate Protocol
            </Link>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-6 lg:left-10">
          <div className="flex items-center gap-3 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#9E9E9E]/60">
            <span className="inline-block h-8 w-px bg-gradient-to-b from-[#D62828] to-transparent" />
            Scroll
          </div>
        </div>
      </section>

      <Marquee />

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionLabel index="01" text="Our Strength" />
        <div className="mt-14 grid grid-cols-2 gap-px bg-white/[0.06] lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-[#0A0A0A] p-10">
              <div className="font-display text-5xl font-extrabold tracking-tight text-[#F5F5F5] lg:text-6xl">{s.value}</div>
              <div className="mt-3 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#9E9E9E]">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-white/[0.06] bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <SectionLabel index="02" text="Our Projects" />
          <Reveal>
            <h2 className="mt-8 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
              Flagship systems, <span className="text-[#D62828]">governed</span> by design.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/[0.06] lg:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="trace-card group bg-[#0A0A0A] p-10 lg:p-14">
                <div className="flex items-start justify-between">
                  <p.icon size={28} strokeWidth={1.5} className="text-[#D62828]" />
                  <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#9E9E9E]/60">{p.index}</span>
                </div>
                <h3 className="mt-10 font-display text-4xl font-extrabold uppercase tracking-tight text-[#F5F5F5] lg:text-5xl">
                  {p.title}
                </h3>
                <div className="mt-2 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#D62828]">{p.subtitle}</div>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-[#9E9E9E]">{p.desc}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 px-3 py-1.5 font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#9E9E9E] transition-colors duration-300 group-hover:border-[#D62828]/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#EDEDED]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D62828]" />
                  {p.metaHref ? (
                    <a href={p.metaHref} target="_blank" rel="noopener noreferrer" className="link-sweep">
                      {p.meta}
                    </a>
                  ) : (
                    p.meta
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES BENTO */}
      <section id="capabilities" className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <SectionLabel index="03" text="Capabilities" />
          <Reveal>
            <h2 className="mt-8 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
              Where strategy meets execution.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className="group bg-[#0A0A0A] p-8 transition-colors duration-500 hover:bg-[#1A1A1A]">
                <c.icon size={22} strokeWidth={1.5} className="text-[#D62828]" />
                <h3 className="mt-6 font-display text-lg font-bold text-[#F5F5F5]">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9E9E9E]">{c.desc}</p>
                <Link
                  className="mt-6 inline-flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#D62828] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  to="/capabilities"
                >
                  Details <ArrowUpRight size={12} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <SectionLabel index="04" text="Success Stories" />
          <div className="mt-14 space-y-px">
            {outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.06}>
                <div className="group flex flex-col justify-between gap-4 border border-white/[0.06] bg-[#0A0A0A] px-8 py-8 transition-colors duration-500 hover:bg-[#1A1A1A] sm:flex-row sm:items-center lg:px-12">
                  <div className="font-display text-5xl font-extrabold tracking-tight text-[#D62828] lg:text-6xl">{o.metric}</div>
                  <div className="sm:text-right">
                    <div className="font-display text-lg font-bold uppercase tracking-tight text-[#F5F5F5]">{o.label}</div>
                    <div className="mt-1 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#9E9E9E]">{o.context}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="collaborate" className="relative overflow-hidden border-t border-white/[0.06] bg-[#A31D1D]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,40,40,0.35),transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-center lg:px-10">
          <Reveal>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-white/70">
              Ready to Transform Your Enterprise?
            </div>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's create extraordinary solutions together.
            </h2>
            <Link
              className="group mt-12 inline-flex items-center gap-3 bg-[#0A0A0A] px-10 py-5 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:scale-[1.03]"
              to="/collaborate"
            >
              Get Started
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
