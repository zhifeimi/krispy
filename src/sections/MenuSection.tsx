import { MENU } from '@/data/menu.ts'
import { useRevealRoot } from '@/hooks/useReveal.ts'
import banhmiChicken from '@/assets/banhmi_chicken.jpg'
import banhXeo from '@/assets/banh_xeo.jpg'

function CategoryBlock({
  cat,
  delayStep = 0,
}: {
  cat: (typeof MENU)[number]
  delayStep?: number
}) {
  return (
    <article id={cat.id} className="reveal flex flex-col border-[1.5px] border-[#141313] bg-[#fdf6ec]">
      <header className="border-b-[1.5px] border-[#141313] px-5 py-4 md:px-7 md:py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono-k text-[10px] uppercase tracking-[0.3em] text-[#d93a1e]">
              {cat.index}
            </span>
            <h3 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl">
              {cat.title}
            </h3>
            <span className="mt-1.5 block font-display text-lg font-medium uppercase text-[#5a7d2a]">
              {cat.vietnamese}
            </span>
          </div>
          <span className="mt-1 hidden h-2.5 w-2.5 shrink-0 rotate-45 bg-[#5a7d2a] outline outline-1 outline-[#141313] sm:block" />
        </div>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#141313]/75">{cat.blurb}</p>
      </header>

      <ul className="flex-1 px-5 py-4 md:px-7">
        {cat.items.map((item, i) => (
          <li
            key={item.name}
            className={`flex flex-col py-2.5 ${i !== 0 ? 'border-t border-[#141313]/10' : ''}`}
            style={{ transitionDelay: `${delayStep + i * 20}ms` }}
          >
            <div className="flex items-baseline">
              <span className="whitespace-nowrap font-display text-[15px] font-semibold uppercase tracking-tight md:text-[17px]">
                {item.name}
              </span>
              {item.popular && (
                <span className="ml-2 shrink-0 bg-[#d93a1e] px-1.5 py-0.5 font-mono-k text-[9px] font-bold uppercase tracking-widest text-[#f8ebda]">
                  Fave
                </span>
              )}
              <span className="leader min-w-[14px]" />
              {item.price && (
                <span className="shrink-0 font-mono-k text-base font-bold">${item.price}</span>
              )}
            </div>
            {item.desc && (
              <span className="mt-0.5 text-xs text-[#141313]/60">{item.desc}</span>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}

function ImageCell({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="dish-cell reveal relative overflow-hidden border-[1.5px] border-[#141313]">
      <img src={src} alt={alt} className="dish-img h-full min-h-[320px] w-full object-cover" />
      <figcaption className="absolute bottom-0 left-0 bg-[#141313] px-3 py-1.5 font-mono-k text-[10px] uppercase tracking-[0.25em] text-[#ef9d1a]">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function MenuSection() {
  const ref = useRevealRoot<HTMLElement>()
  const [banhmi, pho, vermicelli, rice, poke, bao, rpr, sides] = MENU

  return (
    <section id="menu" ref={ref} className="relative bg-[#f8ebda] grain">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
        {/* section head */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] md:text-xs">
              ( The good stuff )
            </p>
            <h2
              className="reveal font-display font-bold uppercase leading-[0.85] tracking-tight"
              style={{ fontSize: 'clamp(56px, 9vw, 140px)' }}
            >
              The <span className="text-stroke-ink">Menu</span>
            </h2>
          </div>
          <div className="reveal flex flex-col items-start gap-3 md:items-end">
            <p className="font-mono-k max-w-xs text-xs leading-relaxed tracking-wide">
              Pickup prices from our Bopple stores. Gluten-free range available across banh mi,
              pho, rice plates &amp; salad bowls.
            </p>
            <a
              href="https://bopple.app/krisp/menu"
              target="_blank"
              rel="noreferrer"
              className="border-[1.5px] border-[#141313] px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#141313] hover:text-[#ef9d1a]"
            >
              Order Pickup →
            </a>
          </div>
        </div>

        {/* category quick nav */}
        <div className="reveal mb-10 flex flex-wrap gap-2">
          {MENU.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="border-[1.5px] border-[#141313] bg-[#fdf6ec] px-3 py-1.5 font-mono-k text-[10px] uppercase tracking-widest transition-colors duration-200 hover:bg-[#ef9d1a]"
            >
              {c.index} {c.title}
            </a>
          ))}
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CategoryBlock cat={banhmi} />
          <ImageCell
            src={banhmiChicken}
            alt="Krispy chicken banh mi with pickled carrot, cucumber, coriander and chilli"
            caption="Krispy Chicken Banh Mi"
          />
          <CategoryBlock cat={pho} />
          <CategoryBlock cat={vermicelli} />
          <ImageCell
            src={banhXeo}
            alt="Crispy Vietnamese pancake with beef, lettuce, cucumber and nuoc cham"
            caption="Fresh off the pass"
          />
          <CategoryBlock cat={rice} />
          <CategoryBlock cat={poke} />
          <CategoryBlock cat={bao} />
          <CategoryBlock cat={rpr} />
          <CategoryBlock cat={sides} />
        </div>

        {/* midweek deal strip */}
        <div className="reveal mt-10 flex flex-col items-start justify-between gap-4 border-[1.5px] border-[#141313] bg-[#ef9d1a] px-6 py-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
              Midweek Deal
            </span>
            <span className="hidden h-6 w-[1.5px] bg-[#141313] sm:block" />
            <p className="font-mono-k text-xs uppercase tracking-widest">
              Banh mi favourites · 4:30pm — 7:30pm
            </p>
          </div>
          <a
            href="https://bopple.app/krisp/menu"
            target="_blank"
            rel="noreferrer"
            className="border-[1.5px] border-[#141313] bg-[#141313] px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#ef9d1a] transition-colors duration-300 hover:bg-transparent hover:text-[#141313]"
          >
            Get the deal
          </a>
        </div>
      </div>
    </section>
  )
}
