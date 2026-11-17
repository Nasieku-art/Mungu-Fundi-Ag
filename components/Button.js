import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-[#E8B923] text-black hover:bg-yellow-300",
    secondary: "bg-black text-[#FFF8E7] hover:bg-[#1a1a1a]",
    outline: "border-2 border-[#E8B923] text-[#E8B923] hover:bg-[#E8B923] hover:text-black",
    ghost: "text-[#FFF8E7] hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}