import React from "react";

export default function Section({
  children,
  className = "",
  bg = "white",
  py = "md:py-20",
}) {
  const bgColors = {
    white: "bg-white",
    cream: "bg-[#FFF8E7]",
    blue: "bg-[#0047AB]",
    black: "bg-black",
  };

  return (
    <section className={`${bgColors[bg]} ${py} ${className}`}>
      {children}
    </section>
  );
}