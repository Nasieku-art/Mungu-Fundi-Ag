import Link from "next/link";
import Container from "@/components/Container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Our Program", href: "/program" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-[#FFF8E7]">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-[#E8B923]">Mungu Fundi</h2>
            <p className="mt-1 text-sm uppercase tracking-widest text-white/60">
              Film Scriptures
            </p>
            <p className="mt-3 text-sm opacity-90 max-w-xs">
              Telling stories that move people. Empowering the next generation
              of African filmmakers through training, mentorship, and
              production.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-[#E8B923]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#E8B923] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-[#E8B923]">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>info@mungufundi.com</li>
              <li>+254 701391756</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Mungu Fundi. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}