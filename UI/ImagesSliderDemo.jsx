"use client"
import { motion } from "framer-motion"
import React from "react"
import { ImagesSlider } from "./ui/images-slider"
import Navbar from '../src/components/Navbar';
import { FlipWordsDemo } from "./FlipWordsDemo";

export function ImagesSliderDemo() {
  const images = [
    "/Home/teamcivil.jpg",
    "/Home/iitiSocCivil.jpg",
    "/Home/groupPhoto.jpg"
  ]
  return (
    <>
    <ImagesSlider className="h-[46rem]" images={images}>
          {/* Navbar positioned inside the ImagesSlider with a high z-index */}
      <div className="absolute inset-0 top-0 z-50 pointer-events-auto">
        {/* Ensure the Navbar has sufficient opacity and no blur */}
        <Navbar className="bg-opacity-100"/>

      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -80
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        <FlipWordsDemo></FlipWordsDemo>
        </motion.p>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
    </>
  )
}
