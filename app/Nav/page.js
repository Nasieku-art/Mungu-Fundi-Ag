import Link from "next/link";

const navLinks=[
  
    {label:"About",href: "/about"},
    {label:"Team",href:"team"},
    {label:"Our Program",href: "/program"},
      {label:"Contact",href:"/contact"}
   
]

export default function Home(){
  return(
    <div className="bg-yellow-400 font-extrabold">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between">
      <span className="font-bold text-xl">MUNGU FUNDI AGENCY</span>

      <nav>
        <div className="flex gap-20 btn rounded-3xl px-5 py-2 text-black">
          {navLinks.map((link) =>(
            <Link 
            key={link.href}
            href={link.href}
            className="bg-white rounded-2xl px-2"
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