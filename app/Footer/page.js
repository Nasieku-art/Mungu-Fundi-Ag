
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Footer(){
    return(
        <footer  className="bg-[#0047AB] text-[#FFF8E7]">
            <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
<div>
          <h2 className="text-xl font-bold text-[#E8B923]">MunguFundi Tells</h2>
          <p className="mt-1 text-sm uppercase tracking-widest">Film Scriptures</p>
          <p className="mt-3 text-sm opacity-90">
            Telling stories that move people. (dummy tagline)
          </p>
        </div>
            </div>
        </footer>
    )
}