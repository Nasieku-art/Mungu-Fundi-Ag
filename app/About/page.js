
import Link from "next/link";

const values = [
  {
    title: "Our Mission",
    text: "Placeholder: what Mungu Fundi exists to do and for whom.",
  },
  {
    title: "Our Vision",
    text: "Placeholder: where you want the agency and its talent to be in five years.",
  },
  {
    title: "Our Values",
    text: "Placeholder: the principles behind the stories you tell and the people you work with.",
  },
];

export default function About() {
  return (
    <div>
  
      <section className="bg-[#4087ec] text-[#FFF8E7]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-20">
          <p className="text-sm uppercase tracking-widest text-[#E8B923]">
            Film Scriptures
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">About Us</h1>
        </div>
      </section>

  
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-2xl font-bold text-[#34087ec] md:text-3xl">
            Who we are
          </h2>
          <p className="mt-4 leading-relaxed">
            Placeholder: a short paragraph about how Mungu Fundi started, who
            founded it, and what makes it different.
          </p>
          <p className="mt-4 leading-relaxed">
            Placeholder: a second paragraph about the kind of work you do and
            the people you work with.
          </p>
        </div>

        <div className="flex aspect-video items-center justify-center rounded-2xl bg-black text-sm text-[#E8B923]">
          Photo goes here
        </div>
      </section>

    
      <section className="bg-[#FFF8E7]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-3 md:py-20">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border-t-4 border-[#E8B923] bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="bg-black text-center text-[#FFF8E7]">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#E8B923]">
            Want to work with us?
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[#E8B923] px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}