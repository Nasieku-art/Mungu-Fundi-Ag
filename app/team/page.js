"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch("/api/team?visible=true");
        const data = await res.json();
        setTeam(data.team || []);
      } catch (error) {
        console.error("Failed to fetch team:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);

  return (
    <div>
      <Section bg="blue">
        <Container className="text-center">
          <p className="text-sm uppercase tracking-widest text-[#E8B923]">
            Film Scriptures
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Meet the Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            The filmmakers, mentors, and coordinators behind Mungu Fundi.
          </p>
        </Container>
      </Section>

      <Section bg="cream">
        <Container>
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0047AB] border-t-transparent" />
            </div>
          ) : team.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-black/60">Team members coming soon.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <Card key={member._id} bordered className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-black text-2xl font-bold text-[#E8B923]">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      getInitials(member.name)
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#0047AB]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black/80">
                    {member.bio}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section bg="black">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-[#E8B923] md:text-3xl">
            Want to join the team?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            We are always looking for talented filmmakers, mentors, and
            coordinators. Get in touch to explore opportunities.
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