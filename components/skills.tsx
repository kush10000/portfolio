"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiKotlin, SiExpress, SiTailwindcss, SiMongodb, SiPostgresql, SiFigma, SiIntellijidea } from "react-icons/si"
import { DiVisualstudio } from "react-icons/di";

const skills = [
  { name: "Java", icon: <FaJava />, description: "Object-oriented programming language" },
  { name: "Python", icon: <FaPython />, description: "Versatile scripting language" },
  { name: "JavaScript", icon: <FaJs />, description: "Web programming language" },
  { name: "Kotlin", icon: <SiKotlin />, description: "Modern JVM language" },
  { name: "ReactJS", icon: <FaReact />, description: "JavaScript library for building user interfaces" },
  { name: "NodeJS", icon: <FaNodeJs />, description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
  { name: "ExpressJS", icon: <SiExpress />, description: "Web application framework for Node.js" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework" },
  { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, description: "Open source relational database" },
  { name: "Docker", icon: <FaDocker />, description: "Platform for developing, shipping, and running applications" },
  { name: "Git", icon: <FaGitAlt />, description: "Version control system" },
  { name: "Figma", icon: <SiFigma />, description: "Collaborative interface design tool" },
  { name: "VS Code", icon: <DiVisualstudio />, description: "Source code editor" },
  { name: "IntelliJ", icon: <SiIntellijidea />, description: "Integrated development environment" },
]

export function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
        <p className="max-w-[900px] text-center text-muted-foreground sm:text-xl">
          A showcase of my technical expertise and tools I work with
        </p>
      </motion.div>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="overflow-hidden hover-effect">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl text-primary">{skill.icon}</div>
                        <div>
                          <h3 className="font-semibold">{skill.name}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

