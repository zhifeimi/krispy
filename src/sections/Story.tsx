import { useRevealRoot } from '@/hooks/useReveal.ts'
import bakerOven from '@/assets/baker-oven.webp'

export default function Story() {
  const ref = useRevealRoot<HTMLElement>()
  return (
    <section id="story" ref={ref} className="relative bg-[#f8ebda] grain">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        {/* photo */}
        <div className="reveal relative md:col-span-6">
          <div className="dish-cell overflow-hidden border-[1.5px] border-[#141313] shadow-[10px_10px_0_#ef9d1a]">
            <img
              src={bakerOven}
              alt="Baker loading golden loaves into a deck oven"
              loading="lazy"
              width={1024}
              height={681}
              className="dish-img w-full object-cover"
            />
          </div>
          <p className="mt-4 font-mono-k text-[10px] uppercase tracking-[0.25em] text-[#141313]/60">
            First bake of the day · stock photo
          </p>
        </div>

        {/* text */}
        <div className="flex flex-col justify-center md:col-span-6 md:pl-6">
          <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] md:text-xs">
            ( Our story )
          </p>
          <h2 className="reveal mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
            From a starter
            <br />
            to <span className="text-[#d93a1e]">a storefront</span>
          </h2>
          <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-[#141313]/80 md:text-lg">
            <p>
              Krispy began with a jar of sourdough starter and a borrowed oven. One loaf turned into
              a market stall, and the stall turned into a bakery on Crumb Lane.
            </p>
            <p>
              The idea never changed: bake it dark, bake it daily. Croissants laminated over three
              days, sourdough that takes its time, pies with proper pastry — crust and crumb done
              right.
            </p>
            <p>
              Full disclosure: Krispy is a fictional bakery. The lane isn't real and neither are the
              croissants — this site is a design demo.
            </p>
          </div>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a
              href="#locations"
              className="border-[1.5px] border-[#141313] bg-[#141313] px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.15em] text-[#ef9d1a] transition-colors duration-300 hover:bg-transparent hover:text-[#141313]"
            >
              Visit us
            </a>
            <a
              href="#menu"
              className="border-[1.5px] border-[#141313] px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#141313] hover:text-[#ef9d1a]"
            >
              See the menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
