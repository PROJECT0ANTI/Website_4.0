export default function Orb() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-10%] top-[8%] hidden h-[560px] w-[560px] lg:block"
    >
      <div className="pulse-glow absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#D62828,#A31D1D_55%,#0A0A0A_85%)] shadow-[0_0_120px_40px_rgba(214,40,40,0.22)]" />
      <div className="ring-spin absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#D62828]/40" />
      <div className="ring-spin-reverse absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
      <div className="ring-spin absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D62828] shadow-[0_0_18px_4px_rgba(214,40,40,0.6)]" />
      </div>
      <div className="ring-spin-reverse absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A31D1D]/20">
        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rotate-45 bg-[#EDEDED]/50" />
      </div>
    </div>
  )
}
