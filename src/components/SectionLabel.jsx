import Reveal from './Reveal.jsx'

export default function SectionLabel({ index, text }) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span className="font-mono-tech text-[11px] tracking-[0.25em] text-[#D62828]">{index}</span>
        <span className="h-px w-10 bg-[#D62828]/50" />
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#9E9E9E]">{text}</span>
      </div>
    </Reveal>
  )
}
