"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image';

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-primary">Kush Agarwal</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-muted-foreground">
            A Full Stack Developer crafting scalable web solutions with clean code and innovation
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg" className="group">
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="group">
            <a href="/Kush_Agarwal.pdf" download="Kush_Agarwal_Resume.pdf">
              Download Resume
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition" />
            </a>
          </Button>
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mt-12"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-20" />
        <Image
          src="/dev_illustration.jpeg"
          alt="Developer Illustration"
          width={320}
          height={320}
          className="relative object-cover"
        />
      </motion.div> */}
    </section>
  )
}

