const WHATSAPP_NUMBER = "254701391756"; 
const WHATSAPP_MESSAGE = "Hello Mungu Fundi, I would like to know more.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const contactDetails = [
  { label: "Email", value: "info@mungufundi.com", href: "mailto:info@mungufundi.com" },
  { label: "Phone", value: "+254 701391756", href: "tel:+254701391756" },
  { label: "Location", value: "Nairobi, Kenya", href: null },
];

export default function Contact() {
  return (
    <div>
      <section className="bg-[#0047AB] text-[#FFF8E7]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center md:py-20">
          <p className="text-sm uppercase tracking-widest text-[#E8B923]">
            Film Scriptures
          </p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Placeholder: a line inviting people to ask about the program or work with you.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF8E7]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 sm:grid-cols-3 md:py-20">
          {contactDetails.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border-t-4 border-[#E8B923] bg-white p-6 text-center shadow-sm"
            >
              <p className="text-xs uppercase tracking-widest text-[#0047AB]">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block break-words font-semibold text-black hover:text-[#0047AB]"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 font-semibold text-black">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-center text-[#FFF8E7]">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#E8B923]">
            Prefer to chat? Message the founder
          </h2>
          <p className="mt-3 opacity-90">
            Tap the button to open WhatsApp with a message ready to send.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-[#25D366] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#1ebe5b]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
