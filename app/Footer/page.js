import Link from "next/link";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Our Program", href: "/program" },
  { label: "Contact", href: "/contact" },
];

export default function Footer(){
    return(
        <footer  className="bg-black text-[#FFF8E7]">
            <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
<div>
          <h2 className="text-xl font-bold text-[#E8B923]">MunguFundi Tells</h2>
          <p className="mt-1 text-sm uppercase tracking-widest">Film Scriptures</p>
          <p className="mt-3 text-sm opacity-90">
            Telling stories that move people. (dummy tagline)
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-semibold text-[#E8B923]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#E8B923]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-[#E8B923]">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>info@mungufundi.com</li>
            <li>+254 700 000 000</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
     
        
            </div>
        </footer>
    )
}