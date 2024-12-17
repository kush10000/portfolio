"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Linksave",
    description: "Save, categorize, and manage links securely with Google OAuth.",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://linksave.netlify.app/",
    github: "https://github.com/kush10000/linksave",
  },
  {
    title: "PairCode.in",
    description: "Real-time collaborative code editor using Socket.io.",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.io", "Tailwind CSS"],
    liveDemo: "https://paircode.in",
    github: "https://github.com/kush10000/PairCode",
  },
  {
    title: "QuickBucks",
    description: "Transaction management app with secure CRUD functionality.",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://quickbux.netlify.app/",
    github: "https://github.com/kush10000/QuickBucks",
  },
  {
    title: "Wordle Game",
    description: "Browser-based interactive word-guessing game.",
    techStack: ["ReactJS", "Tailwind CSS"],
    liveDemo: "https://wordle101.netlify.app/",
    github: "https://github.com/kush10000/wordle",
  },
]

export function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
        <p className="max-w-[900px] text-center text-muted-foreground sm:text-xl">
          Showcasing my recent work and side projects
        </p>
      </motion.div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex h-full flex-col hover-effect overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

