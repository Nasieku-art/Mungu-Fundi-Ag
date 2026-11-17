import React from "react";
import Link from "next/link";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Button from "@/components/Button";

const values = [
  {
    title: "Our Mission",
    text: "To empower African storytellers through world-class training, mentorship, and production opportunities. We believe that great stories live inside everyone, and our role is to help bring them to life.",
  },
  {
    title: "Our Vision",
    text: "To be the leading film training and production agency in East Africa, producing talent that competes on the global stage and telling stories that reflect the richness of the African experience.",
  },
  {
    title: "Our Values",
    text: "We value authentic storytelling, mentorship, collaboration, excellence, and the preservation of African cultural narratives. We commit to lifting up every person who joins our community.",
  },
];

export default function About() {
  return (
    <div>
      <Section bg="blue" className="text-center">
        <Container>
          <p className="text-sm uppercase tracking-widest text-[#E8B923]">
            Film Scriptures
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Learning the craft of filmmaking from the ground up.
          </p>
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-black md:text-4xl">
                Who we are
              </h2>
              <p className="mt-4 leading-relaxed text-black/80">
                Mungu Fundi was founded in Nairobi by a collective of filmmakers
                who believed that talent in Africa is abundant, but access to
                quality film training is not. Our name means &ldquo;God the
                Creator&rdquo; — a reminder that storytelling is a sacred calling.
              </p>
              <p className="mt-4 leading-relaxed text-black/80">
                We run a full-cycle film program that takes students from
                absolute beginner to working on real productions. Our approach
                combines classroom training, hands-on set experience, and
                mentorship from working industry professionals.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary">Work With Us</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
              <div className="flex h-full items-center justify-center text-[#E8B923]">
                <span className="text-lg">Film image here</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container>
          <SectionTitle
            eyebrow="Our Foundation"
            title="Why We Exist"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <Card key={item.title} bordered>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-black/80">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="black">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold text-[#E8B923] md:text-4xl">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Whether you are looking to train, collaborate on a project, or
            bring your production to us, we would love to hear from you.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#E8B923] text-black hover:bg-yellow-300"
              >
                Get in touch
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}