import Link from "next/link";
import Image from "next/image";

const navLinks=[
  
    {label:"About",href: "/about"},
    {label:"Team",href:"/team"},
    {label:"Our Program",href: "/program"},
      {label:"Contact",href:"/contact"}
   
]

export default function Navbar(){
  return(
    <div className="bg-black font-extrabold">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between">
      {/* <span className="font-bold text-xl">MUNGU FUNDI AGENCY</span> */}

      <Link href="/">
      <Image
       src="/images/Mungu_fundi_Logo-removebg-preview.png"
      alt="Mungu Fundi logo"
      width={100}
      height={40}
      className="h-auto w-auto"
      priority/>
      </Link>
      <nav>
        <div className="flex gap-3 sm:gap-5 text-black">
          {navLinks.map((link) =>(
            <Link 
            key={link.href}
            href={link.href}
            className="bg-white rounded-full py-2 px-4 text-sm sm:text-base hover:bg-yellow-400 transition-colors"
            >
              {link.label}
            </Link>
          ) )}

        </div>
      </nav>
</header>
    </div>
  )
}