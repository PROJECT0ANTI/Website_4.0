import { useNavigate } from 'react-router-dom'
import Reveal, { RevealLines } from './Reveal.jsx'

export function LegalSection({ title, children }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-[#D62828] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-1 h-px w-10 bg-[#D62828]/50" />
      <div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed text-[#9E9E9E] sm:text-base">{children}</div>
    </div>
  )
}

export default function LegalPage({ eyebrow, title, intro, children }) {
  const navigate = useNavigate()

  return (
    <main className="relative">
      <section className="bg-blueprint px-6 pb-16 pt-44 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">{eyebrow}</span>
            <span className="h-px w-10 bg-[#D62828]/50" />
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#9E9E9E]">Legal</span>
          </Reveal>
          <RevealLines
            tag="h1"
            className="mt-8 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl"
            lines={[title]}
          />
          {intro && (
            <Reveal delay={0.1} className="mt-8 max-w-2xl">
              <p className="text-base leading-relaxed text-[#9E9E9E]">{intro}</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <Reveal>{children}</Reveal>

          <Reveal delay={0.1} className="mt-16">
            <button
              onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
              className="border border-white/15 px-8 py-3 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-[#9E9E9E] transition-colors duration-300 hover:border-[#D62828] hover:text-[#D62828]"
            >
              Close
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
