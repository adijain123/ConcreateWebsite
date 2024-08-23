import React from "react"
import { FlipWords } from "./ui/flip-words"

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"]

  return (
    <div className=" flex justify-center items-center px-4 h-[10rem]">
      <div className="text-6xl font-bold mx-auto text-white">
        Build
        <FlipWords words={words} /> <br />
        Welcome to Concreate Club
      </div>
    </div>
  )
}
