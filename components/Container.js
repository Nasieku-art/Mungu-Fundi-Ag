"use client"
import React from "react";

export default function Container({
  children,
  className = "",
  size = "6xl",
}) {
  const sizes = {
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    "5xl": "max-w-5xl",
    full: "",
  };

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}