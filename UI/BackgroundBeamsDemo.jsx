"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo({ children }) {
  return (
    <div className="min-h-screen w-full bg-gray-950 relative flex flex-col">
      <BackgroundBeams />
      <div className="relative z-10 flex-grow">{children}</div>
    </div>
  );
}
