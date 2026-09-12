const items = [
  'DEEPFAKE DETECTION',
  'GOVERNED AI',
  'HUMAN-IN-THE-LOOP',
  'PREDICTIVE SECURITY',
  'ON-DEVICE INTELLIGENCE',
  'PRIVACY FIRST',
  'THREAT FORECASTING',
]

function Group() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span className="flex items-center" key={item}>
          <span className="whitespace-nowrap px-8 font-display text-lg font-bold uppercase tracking-wide text-[#9E9E9E]/50">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-[#D62828]/70" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-[#0A0A0A] py-5">
      <div className="marquee-track">
        <Group />
        <Group />
      </div>
    </div>
  )
}
