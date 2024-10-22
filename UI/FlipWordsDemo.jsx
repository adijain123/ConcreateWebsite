import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="flex justify-center items-center px-4 h-auto sm:h-[10rem]">
      <div className="text-center text-white">
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Build
          <span className="block">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl ml-2">
              <FlipWords words={words} />
            </span>
          </span>
          <br className="" />
          Welcome to{" "}
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Concreate Club
          </span>
        </div>
      </div>
    </div>
  );
}
