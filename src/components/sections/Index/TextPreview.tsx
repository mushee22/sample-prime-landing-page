"use client"

import { useRef } from "react"

import { cn } from "@/lib/utils"
import VariableFontCursorProximity from "@/components/fancy/variable-font-cursor-proximity"

const texts = ["Need to Launch a New", "Product but Don't Know ", "Where to Begin?"]

export default function TextPreview() {
  const containerRef = useRef<HTMLDivElement>(null!)

  return (
    <div
      className="cursor-pointer relative"
      ref={containerRef}
    >
      <div className="">
        {texts.map((text, i) => (
          <VariableFontCursorProximity
            key={i}
            label={text}
            className={cn("max-sm:text-32 sm:text-42 lg:text-52 xl:text-58 2xl:text-7xl text-dark")}
            fromFontVariationSettings="'wght' 400, 'slnt' 0 "
            toFontVariationSettings="'wght' 700, 'slnt' -10"
            radius={200}
            containerRef={containerRef}
          />
        ))}
      </div>
    </div>
  )
}
