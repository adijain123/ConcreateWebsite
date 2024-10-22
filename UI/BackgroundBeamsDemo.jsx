"use client";
import React from "react";
import {BackgroundBeams} from './ui/background-beams' 
import {GridBackgroundDemo}  from './GridBackgroundDemo'

export function BackgroundBeamsDemo({ children }) {
  return (
    <div className="min-h-screen w-full bg-gray-950 relative flex flex-col">
      {/* Ensure the GridBackgroundDemo spans the entire page */}
      <div className="absolute inset-0 w-full h-full z-0">
        <GridBackgroundDemo />
      </div>
      {/* Content that will be placed above the background */}
      <div className="relative z-10 flex-grow">{children}</div>
    </div>
  );
}
