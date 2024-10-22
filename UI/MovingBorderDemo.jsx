"use client"
import React from "react"
import { Button } from "./ui/moving-border"

export function MovingBorderDemo({text}) {
  return (
    <div>
      <Button
        borderRadius="1.2rem"
        className="bg-black text-yellow-200 border-neutral-200 dark:border-slate-800"
      >
        {text}
      </Button>
    </div>
  )
}
