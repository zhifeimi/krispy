import { useRevealRoot } from '@/hooks/useReveal.ts'

export default function Footer() {
  const ref = useRevealRoot<HTMLElement>()
  return (
    <footer
      id="contact"
      ref={ref}
      className="relative border-t-[1.5px] border-[#f8ebda]/20 bg-[#141313] text-[#f8ebda] grain"
    >
      <div className="mx-auto max-w-[1500px] px-5 pt-16 md:px-10 md:pt-24">
        <div className="grid grid-cols-1 gap-10 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] text-[#ef9d1a]">
              ( Get in touch )
            </p>
            <a
              href="mailto:Andy@krispfnt.com.au"
              className="reveal link-line mt-4 inline-block font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl"
            >
              Andy@krispfnt.com.au
            </a>
            <div className="reveal mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/krispfnt"
                target="_blank"
                rel="noreferrer"
                className="border-[1.5px] border-[#ef9d1a] px-4 py-2.5 font-mono-k text-[11px] font-bold uppercase leading-none tracking-widest text-[#ef9d1a] transition-colors duration-300 hover:bg-[#ef9d1a] hover:text-[#141313]"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/KRISP/100026420867278/"
                target="_blank"
                rel="noreferrer"
                className="border-[1.5px] border-[#ef9d1a] px-4 py-2.5 font-mono-k text-[11px] font-bold uppercase leading-none tracking-widest text-[#ef9d1a] transition-colors duration-300 hover:bg-[#ef9d1a] hover:text-[#141313]"
              >
                Facebook
              </a>
              <a
                href="https://bopple.app/krisp/menu"
                target="_blank"
                rel="noreferrer"
                className="border-[1.5px] border-[#ef9d1a] bg-[#ef9d1a] px-4 py-2.5 font-mono-k text-[11px] font-bold uppercase leading-none tracking-widest text-[#141313] transition-colors duration-300 hover:bg-transparent hover:text-[#ef9d1a]"
              >
                Order online
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] text-[#ef9d1a]">
              ( Stores )
            </p>
            <div className="reveal mt-4 space-y-4 font-mono-k text-sm leading-relaxed">
              <p>
                <span className="font-bold">DAPTO</span>
                <br />
                Shop 1, 70 Prince Edward Drive
                <br />
                Dapto NSW 2530
              </p>
              <p>
                <span className="font-bold">WOLLONGONG</span>
                <br />
                Shop 1, 4 Globe Lane
                <br />
                Wollongong NSW 2500
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="reveal font-mono-k text-[10px] uppercase tracking-[0.3em] text-[#ef9d1a]">
              ( Hours )
            </p>
            <div className="reveal mt-4 space-y-1.5 font-mono-k text-sm leading-relaxed">
              <p>Tue — Sun · 11am — 2pm</p>
              <p>Tue — Sat · 4:30 — 7:30pm</p>
              <p className="text-[#f8ebda]/50">Monday · Closed</p>
            </div>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="select-none overflow-hidden border-t-[1.5px] border-[#f8ebda]/20 pt-6">
          <p
            aria-hidden
            className="reveal whitespace-nowrap text-center font-display font-bold uppercase leading-[0.8] tracking-[-0.02em] text-[#ef9d1a]"
            style={{ fontSize: 'clamp(90px, 21vw, 340px)' }}
          >
            KRISP
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t-[1.5px] border-[#f8ebda]/20 py-5 font-mono-k text-[10px] uppercase tracking-[0.25em] text-[#f8ebda]/50 md:flex-row">
          <span>© {new Date().getFullYear()} KRISP — Flavours 'N Textures</span>
          <span>Vietnamese street cuisine · Dapto &amp; Wollongong</span>
        </div>
      </div>
    </footer>
  )
}
