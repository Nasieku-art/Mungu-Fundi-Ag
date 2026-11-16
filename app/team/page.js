import Link from "next/link";

const team = [
  {
    name: "Founder Name",
    role: "Founder & Creative Director",
    bio: "Placeholder: one or two lines about their background and what they do at Mungu Fundi.",
  },
  {
    name: "Team Member",
    role: "Script Writer",
    bio: "Placeholder: short bio.",
  },
  {
    name: "Team Member",
    role: "Director",
    bio: "Placeholder: short bio.",
  },
  {
    name: "Team Member",
    role: "Talent Coordinator",
    bio: "Placeholder: short bio.",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Team() {
  return (
    <div>
      <section className="bg-[#0047AB] text-[#FFF8E7]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-20">
          <p className="text-sm uppercase tracking-widest text-[#E8B923]">
            Film Scriptures
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Meet the Team</h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Placeholder: a line about the people behind the stories.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF8E7]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 sm:grid-cols-2 md:py-20 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl border-t-4 border-[#E8B923] bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-black text-2xl font-bold text-[#E8B923]">
                {getInitials(member.name)}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">{member.name}</h3>
              <p className="text-sm font-medium text-[#0047AB]">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-black/80">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

   
      <section className="bg-black text-center text-[#FFF8E7]">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#E8B923]">Want to join the team?</h2>
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