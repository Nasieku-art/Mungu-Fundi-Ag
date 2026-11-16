import Link from "next/link";

const offerings = [
  {
    title: "Acting Training",
    text: "Placeholder: what participants learn and how it is taught.",
  },
  {
    title: "Script Writing",
    text: "Placeholder: what participants learn and how it is taught.",
  },
  {
    title: "On-Set Experience",
    text: "Placeholder: what participants learn and how it is taught.",
  },
];

const steps = [
  { title: "Apply", text: "Placeholder: how someone applies or registers." },
  { title: "Train", text: "Placeholder: what the training looks like." },
  { title: "Perform", text: "Placeholder: showcases, productions, or placements." },
];

const details = [
  { label: "Duration", value: "Placeholder" },
  { label: "Location", value: "Nairobi, Kenya" },
  { label: "Next intake", value: "Placeholder" },
];

export default function Program() {
  return (
    <div>
      <section className="bg-[#0047AB] text-[#FFF8E7]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-20">
          <p className="text-sm uppercase tracking-widest text-[#E8B923]">
            Film Scriptures
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Our Program</h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Placeholder: one or two sentences on what the program is and who it is for.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <h2 className="text-center text-2xl font-bold text-[#0047AB] md:text-3xl">
          What you will get
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border-t-4 border-[#E8B923] bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/80">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF8E7]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h2 className="text-center text-2xl font-bold text-[#0047AB] md:text-3xl">
            How it works
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-[#E8B923]">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/80">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {details.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-black p-5 text-center text-[#FFF8E7]"
            >
              <p className="text-xs uppercase tracking-widest text-[#E8B923]">
                {item.label}
              </p>
              <p className="mt-2 font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-center text-[#FFF8E7]">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#E8B923]">Ready to join?</h2>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[#E8B923] px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
          >
            Apply or ask a question
          </Link>
        </div>
      </section>
    </div>
  );
}