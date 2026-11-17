import React from "react";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className = "",
  light = false,
}) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-medium uppercase tracking-widest ${
            light ? "text-[#E8B923]" : "text-[#0047AB]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold md:text-4xl ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg opacity-90 ${
            light ? "text-white" : "text-black/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}