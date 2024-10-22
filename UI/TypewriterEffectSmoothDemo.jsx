"use client"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome"
    },
    {
      text: "to"
    },
    {
      text: "Concreate Club,",
      className: "text-blue-500 dark:text-blue-500"
    },
    {
        text: "IIT Indore."
    }
  ]
  return (
    <div className="flex flex-col items-center justify-center h-[8rem] ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row md:space-y-0 space-x-0 md:space-x-4">
      </div>
    </div>
  )
}
