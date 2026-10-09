export default function Home() {
  return (
    <div className="bg-blue-300 font-extrabold">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between">
        <span className="font-bold text-xl">MUNGU FUNDI AGENCY</span>

        <nav>
          <div className="flex gap-10 btn rounded-3xl px-5 py-2 text-black">
            <button>About</button>
            <button>Team</button>
            <button>Our Program</button>
            <button>Contact</button>
           
          </div>
        </nav>
      </header>
    </div>
  );
}