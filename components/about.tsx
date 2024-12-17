"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, BarChart } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
          <p className="max-w-[900px] text-center text-muted-foreground sm:text-xl">
            Full-stack developer with expertise in backend APIs using NodeJS, frontend UIs with ReactJS, and databases like MongoDB and PostgreSQL.
          </p>
        </motion.div>
        {/* <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AboutCard
            icon={<GraduationCap className="h-10 w-10 text-primary" />}
            title="Education"
            description="B.Tech, Computer Science from Manipal Institute of Technology"
          />
          <AboutCard
            icon={<Code className="h-10 w-10 text-primary" />}
            title="Full Stack"
            description="Proficient in both frontend and backend technologies"
          />
          <AboutCard
            icon={<BarChart className="h-10 w-10 text-primary" />}
            title="Problem Solver"
            description="Solved 250+ coding problems on various platforms"
          />
        </div> */}
      </div>
    </section>
  )
}

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AboutCard({ icon, title, description }: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="hover-effect">
        <CardContent className="flex flex-col items-center space-y-2 p-6">
          <div className="rounded-full bg-primary/10 p-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-center text-sm text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

