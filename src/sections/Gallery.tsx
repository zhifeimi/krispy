import { useRevealRoot } from '@/hooks/useReveal.ts'
import vermicelli from '@/assets/vermicelli_bowl.jpg'
import porkbellySalad from '@/assets/porkbelly_salad.jpg'
import poke from '@/assets/poke_bowl.jpg'
import banhmiPork from '@/assets/banhmi_porkbelly.jpg'
import banhmiSatay from '@/assets/banhmi_satay.jpg'
import banhXeo from '@/assets/banh_xeo.jpg'

const SHOTS = [
  { src: vermicelli, alt: 'Vermicelli salad bowl with spring rolls and lemongrass chicken', cap: 'Bún bowl' },
  { src: porkbellySalad, alt: 'Crispy pork belly salad bowl', cap: 'Krispy pork belly' },
  { src: poke, alt: 'Chicken poke bowl with avocado, corn and edamame', cap: 'Poke bowl' },
  { src: banhmiPork, alt: 'Krispy pork belly banh mi with pate and fresh herbs', cap: 'Krisp-style banh mi' },
  { src: banhmiSatay, alt: 'Satay chicken banh mi topped with crushed peanuts', cap: 'Satay chicken roll' },
  { src: banhXeo, alt: 'Crispy turmeric pancake with beef and fresh greens', cap: 'Bánh xèo night' },
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
              ( Fresh off the pass )
            </p>
            <h2
              className="reveal font-display font-bold uppercase leading-[0.85] tracking-tight text-[#f8ebda]"
              style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
            >
              Straight from
              <br />
              <span className="text-stroke-cream">the kitchen</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/krispfnt"
            target="_blank"
            rel="noreferrer"
            className="reveal border-[1.5px] border-[#f8ebda] px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#f8ebda] transition-colors duration-300 hover:bg-[#ef9d1a] hover:border-[#ef9d1a] hover:text-[#141313]"
          >
            Follow @krispfnt →
          </a>
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
          Shots from our Instagram — served fresh daily
        </p>
      </div>
    </section>
  )
}
