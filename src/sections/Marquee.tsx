import { MARQUEE_ITEMS } from '@/data/menu.ts'

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="overflow-hidden border-y-[1.5px] border-[#141313] bg-[#141313] py-3">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-display text-2xl font-semibold uppercase tracking-wide text-[#f8ebda] md:text-3xl">
                  {item}
                </span>
                <span className={`text-xl ${i % 2 === 0 ? 'text-[#ef9d1a]' : 'text-[#5a7d2a]'}`}>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
