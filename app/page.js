import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

const features = [
  {
    title: "Acting Training",
    description:
      "Comprehensive acting classes taught by industry professionals, covering technique, on-camera work, and performance preparation.",
    icon: "🎭",
  },
  {
    title: "Script Writing",
    description:
      "Learn the art of storytelling from concept to final draft, with mentorship from experienced screenwriters.",
    icon: "✍️",
  },
  {
    title: "On-Set Experience",
    description:
      "Get real-world experience on actual film sets, learning directing, cinematography, lighting, and production.",
    icon: "🎬",
  },
];

const testimonials = [
  {
    name: "Amina Hassan",
    role: "Program Graduate",
    quote:
      "Mungu Fundi gave me the confidence and skills to pursue my dream of acting. The mentorship was invaluable.",
  },
  {
    name: "David Otieno",
    role: "Aspiring Director",
    quote:
      "The on-set experience I gained here was unlike anything else. I went from never holding a camera to directing short films.",
  },
  {
    name: "Grace Wanjiru",
    role: "Script Writer",
    quote:
      "The script writing program transformed how I tell stories. I now have multiple scripts in development.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Section bg="black" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Film set background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <Container className="relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#E8B923]">
              Film Scriptures
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Empowering the Next Generation of African Storytellers
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90 md:text-xl">
              Mungu Fundi is a Nairobi-based film agency that trains, mentors,
              and produces talent. Join a community of passionate storytellers
              shaping the future of African cinema.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/program">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Explore Our Program
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section bg="cream" py="md:py-20">
        <Container>
          <SectionTitle
            eyebrow="What We Offer"
            title="Train. Create. Perform."
            subtitle="Our program covers every aspect of filmmaking, from acting and writing to on-set production experience."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} bordered className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0047AB] text-3xl text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black">
                  {feature.title}
                </h3>
                <p className="mt-3 text-black/80">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section bg="white" py="md:py-20">
        <Container>
          <SectionTitle
            eyebrow="Success Stories"
            title="What Our Alumni Say"
            subtitle="Hear from graduates who have gone on to build careers in film and television."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <div className="mb-4 text-2xl text-[#E8B923]">&ldquo;</div>
                <p className="flex-1 text-black/80">
                  {testimonial.quote}
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#0047AB]">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bg="blue" py="md:py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Ready to Start Your Story?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Whether you want to act, write, direct, or simply learn more
            about our program, we would love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/apply">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}