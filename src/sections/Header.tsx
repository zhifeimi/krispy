import { useEffect, useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'

const LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Locations', href: '#locations' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b-[1.5px] border-[#141313] bg-[#f8ebda]/95 backdrop-blur-sm'
            : 'border-b-[1.5px] border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
              Krispy
            </span>
            <span className="font-mono-k hidden text-[10px] uppercase tracking-widest opacity-70 sm:block">
              Crust &amp; Crumb
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-line font-display text-sm font-semibold uppercase tracking-[0.15em]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#locations"
              className="inline-flex items-center whitespace-nowrap border-[1.5px] border-[#141313] bg-[#141313] px-5 py-2.5 font-display text-sm font-semibold uppercase leading-none tracking-[0.12em] text-[#ef9d1a] transition-colors duration-300 hover:bg-transparent hover:text-[#141313]"
            >
              Visit Us
            </a>
          </nav>

          <button
            className="flex h-10 w-10 items-center justify-center border-[1.5px] border-[#141313] md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col bg-[#ef9d1a] transition-[transform,visibility] duration-500 ease-krisp-out md:hidden ${
          open ? 'translate-y-0 visible' : '-translate-y-full invisible'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <span className="font-display text-2xl font-bold uppercase">Krispy</span>
          <button
            className="flex h-10 w-10 items-center justify-center border-[1.5px] border-[#141313]"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b-[1.5px] border-[#141313]/30 py-4 font-display text-5xl font-bold uppercase tracking-tight"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#locations"
            onClick={() => setOpen(false)}
            className="mt-8 inline-block w-max border-2 border-[#141313] bg-[#141313] px-8 py-4 font-display text-lg font-semibold uppercase tracking-[0.15em] text-[#ef9d1a]"
          >
            Visit Us
          </a>
        </nav>
        <p className="px-6 pb-8 font-mono-k text-xs uppercase tracking-widest">
          A fictional bakery · Demo site
        </p>
      </div>
    </>
  )
}
