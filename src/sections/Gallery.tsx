import { useRevealRoot } from '@/hooks/useReveal.ts'
import ryeLoaves from '@/assets/rye-loaves.jpg'
import seededRolls from '@/assets/seeded-rolls.jpg'
import cinnamonScrolls from '@/assets/cinnamon-scrolls.jpg'
import cookies from '@/assets/cookies.jpg'
import chocolateCake from '@/assets/chocolate-cake.jpg'
import croissantCoffee from '@/assets/croissant-coffee.jpg'

const SHOTS = [
  { src: ryeLoaves, alt: 'Dark rye loaves cooling on wooden racks', cap: 'Dark rye' },
  { src: croissantCoffee, alt: 'Croissant with a cup of black coffee', cap: 'Croissant & coffee' },
  { src: cinnamonScrolls, alt: 'Plate of cinnamon scrolls', cap: 'Cinnamon scrolls' },
  { src: seededRolls, alt: 'Pile of seeded bread rolls', cap: 'Seeded rolls' },
  { src: chocolateCake, alt: 'Slice of chocolate layer cake on a plate', cap: 'Chocolate layer cake' },
  { src: cookies, alt: 'Stacks of cookies on a bakery counter', cap: 'Cookie counter' },
]

export default function Gallery() {
  const ref = useRevealRoot<HTMLElement>()
  return (
    <section
      id="gallery"
      ref={ref}
      className="relative border-y-[1.5px] border-[#141313] bg-[#141313] text-[#f8ebda] grain"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] text-[#ef9d1a] md:text-xs">
              ( Fresh off the rack )
            </p>
            <h2
              className="reveal font-display font-bold uppercase leading-[0.85] tracking-tight text-[#f8ebda]"
              style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
            >
              Straight from
              <br />
              <span className="text-stroke-cream">the oven</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {SHOTS.map((s, i) => (
            <figure
              key={s.cap}
              className="dish-cell reveal group relative overflow-hidden border-[1.5px] border-[#f8ebda]/25"
              style={{ ['--reveal-delay' as string]: `${(i % 3) * 110}ms` }}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="dish-img aspect-square w-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute bottom-0 left-0 max-w-full truncate bg-[#ef9d1a] px-3 py-1.5 font-mono-k text-[10px] uppercase tracking-[0.2em] text-[#141313]">
                {s.cap}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reveal mt-8 text-center font-mono-k text-[10px] uppercase tracking-[0.25em] text-[#f8ebda]/60">
          Out of the oven — baked fresh daily
        </p>
      </div>
    </section>
  )
}
