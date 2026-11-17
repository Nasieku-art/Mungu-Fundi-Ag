import React from "react";

export default function Card({
  children,
  className = "",
  bordered = false,
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${bordered ? "border-t-4 border-[#E8B923]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}