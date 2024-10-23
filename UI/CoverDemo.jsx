import React from "react"
import { Cover } from "./ui/cover"

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
        Achievements <Cover>Concreate-Club</Cover>
      </h1>
    </div>
  )
}
