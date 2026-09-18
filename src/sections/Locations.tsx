import { HOURS, LOCATIONS } from '@/data/menu.ts'
import { useRevealRoot } from '@/hooks/useReveal.ts'

export default function Locations() {
  const ref = useRevealRoot<HTMLElement>()
  return (
    <section
      id="locations"
      ref={ref}
      className="relative border-t-[1.5px] border-[#141313] bg-[#f8ebda] grain"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
        <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] md:text-xs">
          ( Find us )
        </p>
        <h2
          className="reveal font-display font-bold uppercase leading-[0.85] tracking-tight"
          style={{ fontSize: 'clamp(56px, 9vw, 140px)' }}
        >
          Two <span className="text-[#ef9d1a]" style={{ WebkitTextStroke: '1.5px #141313' }}>stores</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <div
              key={loc.name}
              className="reveal flex flex-col border-[1.5px] border-[#141313] bg-[#fdf6ec] shadow-[8px_8px_0_#ef9d1a]"
              style={{ ['--reveal-delay' as string]: `${i * 130}ms` }}
            >
              <div className="flex items-start justify-between border-b-[1.5px] border-[#141313] px-6 py-5">
                <div>
                  <span className="font-mono-k text-[10px] uppercase tracking-[0.3em] text-[#d93a1e]">
                    {loc.tag}
                  </span>
                  <h3 className="font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
                    {loc.name}
                  </h3>
                </div>
                <span className="mt-2 h-3 w-3 rotate-45 bg-[#d93a1e]" />
              </div>

              <div className="flex-1 px-6 py-5">
                <p className="font-display text-xl font-semibold uppercase">{loc.address}</p>
                <p className="font-display text-xl font-semibold uppercase text-[#141313]/60">
                  {loc.suburb}
                </p>

                <div className="mt-5 border-t-[1.5px] border-[#141313]/20 pt-4">
                  <p className="font-mono-k mb-2 text-[10px] uppercase tracking-[0.3em]">
                    Opening hours
                  </p>
                  <table className="w-full font-mono-k text-xs md:text-sm">
                    <tbody>
                      {HOURS.map((h) => (
                        <tr key={h.days} className="border-b border-[#141313]/10 last:border-0">
                          <td className="py-1.5 pr-2 font-bold">{h.days}</td>
                          <td className="py-1.5 text-right">
                            {h.lunch === 'Closed' ? (
                              <span className="text-[#d93a1e]">Closed</span>
                            ) : (
                              <>
                                {h.lunch}
                                {h.dinner && <span className="text-[#141313]/60"> · {h.dinner}</span>}
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex border-t-[1.5px] border-[#141313]">
                <a
                  href={loc.order}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 border-r-[1.5px] border-[#141313] bg-[#141313] px-4 py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#ef9d1a] transition-colors duration-300 hover:bg-[#d93a1e] hover:text-[#f8ebda]"
                >
                  Order pickup
                </a>
                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-4 py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#141313] hover:text-[#ef9d1a]"
                >
                  Directions ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center font-mono-k text-xs uppercase tracking-[0.2em]">
          Also delivering via Uber Eats &amp; DoorDash · Eat in, takeaway &amp; outdoor seating
        </p>
      </div>
    </section>
  )
}
