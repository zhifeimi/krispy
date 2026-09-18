import heroSpread from '@/assets/hero-spread.jpg'
import logo from '@/assets/logo.png'

const LETTERS = ['K', 'R', 'I', 'S', 'P']

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col bg-[#ef9d1a] grain">
      {/* top rule */}
      <div className="mt-[64px] border-t-[1.5px] border-[#141313]" />

      <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-5 md:px-10">
        {/* meta row */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-[1.5px] border-[#141313] py-3 font-mono-k text-[10px] uppercase tracking-[0.2em] md:text-xs">
          <span>Vietnamese Street Cuisine</span>
          <span className="hidden sm:inline">Est. Dapto — NSW Australia</span>
          <span>Two Stores · Eat In / Takeaway</span>
        </div>

        {/* giant wordmark */}
        <h1
          aria-label="KRISP"
          className="select-none border-b-[1.5px] border-[#141313] py-2 text-center font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[#141313]"
          style={{ fontSize: 'clamp(88px, 24vw, 380px)' }}
        >
          {LETTERS.map((l, i) => (
            <span
              key={i}
              aria-hidden
              className="hero-letter"
              style={{ ['--l-delay' as string]: `${120 + i * 90}ms` }}
            >
              {l}
            </span>
          ))}
        </h1>

        {/* tagline + badges */}
        <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-12 md:items-end md:py-8">
          <div className="md:col-span-7">
            <p
              className="hero-letter font-display text-3xl font-semibold uppercase leading-[1.02] tracking-tight md:text-5xl"
              style={{ ['--l-delay' as string]: '620ms' }}
            >
              Vietnamese street cuisine
              <br />
              with a <span className="bg-[#141313] px-2 text-[#ef9d1a]">Krisp twist</span>
            </p>
            <p
              className="hero-letter mt-4 max-w-md font-mono-k text-xs leading-relaxed tracking-wide md:text-sm"
              style={{ ['--l-delay' as string]: '720ms' }}
            >
              Crackling pork belly, crusty banh mi &amp; slow-simmered pho — exciting flavours and
              textures in Dapto and Wollongong.
            </p>
          </div>
          <div
            className="hero-letter flex flex-col gap-3 md:col-span-5 md:items-end"
            style={{ ['--l-delay' as string]: '820ms' }}
          >
            <div className="flex flex-wrap gap-3">
              <div className="border-[1.5px] border-[#141313] px-4 py-2 text-center">
                <p className="font-display text-2xl font-bold leading-none">4.7★</p>
                <p className="font-mono-k mt-1 text-[10px] uppercase tracking-widest">420+ ratings</p>
              </div>
              <div className="border-[1.5px] border-[#141313] px-4 py-2 text-center">
                <p className="font-display text-2xl font-bold leading-none">98%</p>
                <p className="font-mono-k mt-1 text-[10px] uppercase tracking-widest">recommend us</p>
              </div>
            </div>
            <a
              href="https://bopple.app/krisp/menu"
              target="_blank"
              rel="noreferrer"
              className="btn-order inline-flex items-center justify-center gap-2.5 whitespace-nowrap border-2 border-[#141313] bg-[#d93a1e] px-6 py-4 font-display text-lg font-bold uppercase leading-none tracking-[0.15em] text-[#f8ebda] md:w-full md:max-w-[320px] md:text-xl"
            >
              Order Online
              <span className="btn-arrow text-2xl leading-none">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* food spread */}
      <div className="relative mt-auto border-t-[1.5px] border-[#141313]">
        <img
          src={heroSpread}
          alt="KRISP spread — spring rolls, pho and banh mi"
          className="h-[34vh] w-full object-cover object-center md:h-[38vh]"
        />
        <img
          src={logo}
          alt="KRISP logo"
          className="hero-letter absolute right-4 top-4 w-16 rotate-6 border-[1.5px] border-[#141313] shadow-[5px_5px_0_#141313] md:right-10 md:top-6 md:w-28"
          style={{ ['--l-delay' as string]: '950ms' }}
        />
        <div className="absolute bottom-3 left-5 flex items-center gap-2 bg-[#141313] px-3 py-1.5 md:left-10">
          <span className="scroll-hint inline-block font-mono-k text-[10px] uppercase tracking-[0.25em] text-[#ef9d1a]">
            ↓ Scroll for the menu
          </span>
        </div>
      </div>
    </section>
  )
}
