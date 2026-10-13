import { HOURS, LOCATION } from '@/data/menu.ts'
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
          The <span className="text-[#ef9d1a]" style={{ WebkitTextStroke: '1.5px #141313' }}>bakery</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="reveal flex flex-col border-[1.5px] border-[#141313] bg-[#fdf6ec] shadow-[8px_8px_0_#ef9d1a]">
            <div className="flex items-start justify-between border-b-[1.5px] border-[#141313] px-6 py-5">
              <div>
                <span className="font-mono-k text-[10px] uppercase tracking-[0.3em] text-[#d93a1e]">
                  {LOCATION.tag}
                </span>
                <h3 className="font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
                  {LOCATION.name}
                </h3>
              </div>
              <span className="mt-2 h-3 w-3 rotate-45 bg-[#d93a1e]" />
            </div>

            <div className="flex-1 px-6 py-5">
              <p className="font-display text-xl font-semibold uppercase">{LOCATION.address}</p>
              <p className="font-display text-xl font-semibold uppercase text-[#141313]/60">
                {LOCATION.suburb}
              </p>
              <p className="mt-2 font-mono-k text-xs md:text-sm">
                <span className="font-bold">Phone</span> · {LOCATION.phone}
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
                          {h.hours === 'Closed' ? (
                            <span className="text-[#d93a1e]">Closed</span>
                          ) : (
                            h.hours
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <a
              href={LOCATION.maps}
              target="_blank"
              rel="noreferrer"
              className="border-t-[1.5px] border-[#141313] px-4 py-4 text-center font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#141313] hover:text-[#ef9d1a]"
            >
              Directions ↗
            </a>
          </div>

          <div
            className="reveal flex min-h-[380px] flex-col border-[1.5px] border-[#141313] bg-[#fdf6ec] shadow-[8px_8px_0_#ef9d1a]"
            style={{ ['--reveal-delay' as string]: '130ms' }}
          >
            <iframe
              title="Map with a placeholder pin for Krispy"
              src={LOCATION.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-1 border-0"
            />
            <p className="border-t-[1.5px] border-[#141313] px-6 py-3 font-mono-k text-[10px] uppercase leading-relaxed tracking-[0.2em]">
              Placeholder pin — Krispy is a fictional bakery, so the map points at a public park.
            </p>
          </div>
        </div>

        <p className="reveal mt-8 text-center font-mono-k text-xs uppercase tracking-[0.2em]">
          Eat in, takeaway &amp; outdoor seating · Whole cakes with two days' notice
        </p>
      </div>
    </section>
  )
}
