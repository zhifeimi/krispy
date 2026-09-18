import { useRevealRoot } from '@/hooks/useReveal.ts'
import andy from '@/assets/andy.jpg'

export default function Story() {
  const ref = useRevealRoot<HTMLElement>()
  return (
    <section id="story" ref={ref} className="relative bg-[#f8ebda] grain">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        {/* photo */}
        <div className="reveal relative md:col-span-6">
          <div className="dish-cell overflow-hidden border-[1.5px] border-[#141313] shadow-[10px_10px_0_#ef9d1a]">
            <img
              src={andy}
              alt="Andy Nguyen at KRISP Dapto holding a banh mi and a vermicelli bowl"
              className="dish-img w-full object-cover"
            />
          </div>
          <p className="mt-4 font-mono-k text-[10px] uppercase tracking-[0.25em] text-[#141313]/60">
            Andy Nguyen — KRISP Dapto · photo: Illawarra Mercury
          </p>
        </div>

        {/* text */}
        <div className="flex flex-col justify-center md:col-span-6 md:pl-6">
          <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] md:text-xs">
            ( Our story )
          </p>
          <h2 className="reveal mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
            From a van
            <br />
            to <span className="text-[#d93a1e]">two stores</span>
          </h2>
          <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-[#141313]/80 md:text-lg">
            <p>
              Andy Nguyen made his name serving banh mi from Bun Me Van before trading four wheels
              for a permanent home on Prince Edward Drive, Dapto — and KRISP was born.
            </p>
            <p>
              The idea stayed the same: Vietnamese street cuisine done properly. Crackling pork
              belly, rolls baked crusty, broth that takes all day, herbs by the handful — flavours
              and textures done right.
            </p>
            <p>
              Dapto fell for it first. Now the second store on Globe Lane, Wollongong brings the
              same energy to the city — same menu, same crunch, same Krisp twist.
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
              href="https://www.facebook.com/people/KRISP/100026420867278/"
              target="_blank"
              rel="noreferrer"
              className="border-[1.5px] border-[#141313] px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#141313] hover:text-[#ef9d1a]"
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
