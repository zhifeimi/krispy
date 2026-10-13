import { useRevealRoot } from '@/hooks/useReveal.ts'

const STATEMENT =
  'Crust and crumb done right — shatter-crisp croissants, crackling sourdough, proper pies and butter by the block. Baked fresh daily, sold warm, eaten on the walk home.'

const STATS = [
  { k: '4am', v: 'ovens on, every baking day', color: '#d93a1e' },
  { k: '36h', v: 'slow sourdough ferment', color: '#ef9d1a' },
  { k: '100%', v: 'baked fresh in-house daily', color: '#5a7d2a' },
]

export default function Manifesto() {
  const ref = useRevealRoot<HTMLElement>()
  const words = STATEMENT.split(' ')

  return (
    <section ref={ref} className="relative border-b-[1.5px] border-[#141313] bg-[#f8ebda] grain">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-32">
        <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] md:text-xs">
          ( What we're about )
        </p>
        <h2 className="reveal mt-6 max-w-5xl font-display text-3xl font-semibold uppercase leading-[1.08] tracking-tight md:text-6xl">
          {words.map((w, i) => (
            <span key={i}>
              <span
                className="reveal-word"
                style={{ ['--w-delay' as string]: `${i * 32}ms` }}
              >
                {w}
              </span>{' '}
            </span>
          ))}
        </h2>

        <div className="mt-14 grid grid-cols-1 border-[1.5px] border-[#141313] sm:grid-cols-3 sm:divide-x-[1.5px] sm:divide-[#141313] max-sm:divide-y-[1.5px] max-sm:divide-[#141313]">
          {STATS.map((s, i) => (
            <div
              key={s.k}
              className="reveal flex items-baseline gap-4 px-6 py-6"
              style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
            >
              <span
                className="font-display text-5xl font-bold tracking-tight md:text-6xl"
                style={{ color: s.color }}
              >
                {s.k}
              </span>
              <span className="font-mono-k text-[11px] uppercase leading-snug tracking-widest">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
