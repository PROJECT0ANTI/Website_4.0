import { Cpu, CodeXml, Smartphone, Cloud, Zap, Gauge, BadgeDollarSign, Eye, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal, { RevealLines } from '../components/Reveal.jsx'
import SectionLabel from '../components/SectionLabel.jsx'

const services = [
  {
    icon: Cpu,
    index: 'S.01',
    title: 'AI Product Development',
    desc: 'We design and build AI-powered products with a strong focus on speed, clarity, and real-world impact, from MVP to production-ready systems.',
    points: [
      'Rapid prototyping & MVP development',
      'Model selection, fine tuning & evaluation',
      'AI agents, automation & decision systems',
      'Data pipeline design & validation',
      'End to end deployment & monitoring',
      'Iterative improvement from real usage data',
    ],
  },
  {
    icon: CodeXml,
    index: 'S.02',
    title: 'Web Development',
    desc: 'High-performance web platforms engineered for visibility, decision making, and operational clarity across teams.',
    points: ['Secure workflows & APIs', 'Real-time monitoring', 'Scalable architecture', 'Performance engineering'],
  },
  {
    icon: Smartphone,
    index: 'S.03',
    title: 'Mobile Development',
    desc: 'Mobile products built for accuracy, speed, and real-world usability — privacy-first and on-device where it matters.',
    points: ['On-device intelligence', 'iOS & Android delivery', 'Offline-first design', 'Real-time analysis'],
  },
  {
    icon: Cloud,
    index: 'S.04',
    title: 'Cloud Infrastructure Development',
    desc: 'Resilient, governed infrastructure that protects modern cloud environments before attacks occur.',
    points: ['Threat forecasting', 'Compliance-first architecture', '99.9%+ uptime engineering', 'SOC-2 readiness'],
  },
]

const reasons = [
  { icon: Zap, title: 'AI-Driven Development', desc: 'We use AI internally across design, development, and testing to accelerate delivery while maintaining precision.' },
  { icon: Gauge, title: 'Faster Project Turnaround', desc: 'Optimized workflows and parallel execution deliver in significantly shorter timelines without cutting corners.' },
  { icon: BadgeDollarSign, title: 'Best Pricing in the Market', desc: 'Lean operations and AI-assisted execution let us offer premium output at highly competitive pricing.' },
  { icon: Eye, title: 'Transparent Development', desc: 'Full visibility into progress, decisions, and technical direction. No black boxes, ever.' },
]

const process = [
  { step: '01', title: 'Discovery & Research', desc: 'Deeply understanding the business problem, users, data, and constraints to solve the right problem from day one.' },
  { step: '02', title: 'Strategy & Planning', desc: 'Clear technical and product strategy — architecture, timelines, milestones, and success metrics aligned with business goals.' },
  { step: '03', title: 'Design & Prototyping', desc: 'Rapid prototypes and system designs validate ideas early, reduce risk, and ensure clarity before full scale development.' },
  { step: '04', title: 'Development & Testing', desc: 'Iterative cycles with continuous testing — performance, security, and scalability baked in from the start.' },
  { step: '05', title: 'Launch & Optimization', desc: 'Deployed with monitoring and analytics in place, followed by performance tuning and real-world optimizations.' },
  { step: '06', title: 'Support & Growth', desc: 'Ongoing support, improvements, and scaling strategies as the product and user base grow.' },
]

const portfolio = [
  { title: 'E-Commerce Platform', desc: 'In-house commerce system with secure workflows, high-performance APIs, and real-time monitoring to handle scale without compromise.' },
  { title: 'SaaS Dashboards', desc: 'Internal sales intelligence and HR dashboards designed for visibility, decision-making, and operational clarity across teams.' },
  { title: 'Deepfake Detection App', desc: 'A mobile application leveraging AI models to detect manipulated media, built for accuracy, speed, and real-world usability.' },
]

export default function Capabilities() {
  return (
    <main className="relative">
      <section className="bg-blueprint px-6 pb-24 pt-44 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">CAP</span>
            <span className="h-px w-10 bg-[#D62828]/50" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#9E9E9E]">Capabilities</span>
          </Reveal>
          <RevealLines
            tag="h1"
            className="mt-10 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] sm:text-6xl lg:text-8xl"
            lines={[
              'WHERE STRATEGY',
              <>
                MEETS <span className="text-[#D62828]">EXECUTION.</span>
              </>,
            ]}
          />
          <Reveal delay={0.15} className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-[#9E9E9E] sm:text-lg">
              From idea to production, we build digital products that scale, adapt, and deliver measurable outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES MATRIX */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="01" text="Categories of Services" />
          <div className="mt-14 grid gap-px bg-white/[0.06] lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06} className="trace-card group bg-[#0A0A0A] p-10 lg:p-12">
                <div className="flex items-start justify-between">
                  <s.icon size={26} strokeWidth={1.5} className="text-[#D62828]" />
                  <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#9E9E9E]/60">{s.index}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-extrabold uppercase tracking-tight text-[#F5F5F5] lg:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#9E9E9E]">{s.desc}</p>
                <ul className="mt-8 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-[#EDEDED]/80">
                      <span className="h-1 w-1 rotate-45 bg-[#D62828]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TEAMS CHOOSE US */}
      <section className="border-t border-white/[0.06] bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="02" text="Why Teams Choose Us" />
          <Reveal>
            <h2 className="mt-8 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
              Speed, intelligence, and radical clarity.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06} className="group bg-[#0A0A0A] p-8 transition-colors duration-500 hover:bg-[#1A1A1A]">
                <r.icon size={22} strokeWidth={1.5} className="text-[#D62828]" />
                <h3 className="mt-6 font-display text-lg font-bold text-[#F5F5F5]">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9E9E9E]">{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="03" text="Design Process" />
          <Reveal>
            <h2 className="mt-8 max-w-3xl font-display text-3xl font-extrabold uppercase tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
              A proven, execution-first approach.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05} className="bg-[#0A0A0A] p-8">
                <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">{p.step}</span>
                <h3 className="mt-6 font-display text-xl font-bold text-[#F5F5F5]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9E9E9E]">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="border-t border-white/[0.06] bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel index="04" text="Our Portfolio" />
          <div className="mt-14 grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="trace-card group bg-[#0A0A0A] p-8">
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#9E9E9E]">{p.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-16 text-center">
            <Link
              className="group inline-flex items-center gap-3 bg-[#D62828] px-8 py-4 font-mono-tech text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#A31D1D]"
              to="/collaborate"
            >
              Start a Project
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
