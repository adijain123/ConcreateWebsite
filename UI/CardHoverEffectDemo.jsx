import { HoverEffect } from "./ui/card-hover-effect"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: "Civil Conclave 2025",
    description:
      "Winner",
    link: ""
  },
  {
    title: "Civil Conclave 2024",
    description:
      "Runner-up",
    link: ""
  },
  {
    title: "Civil Conclave 2023",
    description:
      "Winner",
    link: ""
  },
  {
    title: "Inter-IIT",
    description:
      "",
    link: ""
  },
  {
    title: "Sustainability",
    description:
      "",
    link: ""
  },
  {
    title: "Awards",
    description:
      "",
    link: ""
  }
]
