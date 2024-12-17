"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Matrex Softwares",
    position: "Backend Development Intern",
    duration: "November 2024 - Present",
    description: [
      "Built and optimized RESTful APIs using Kotlin and Ktor, focusing on performance, scalability, and reliability for seamless backend functionality.",
      "Designed secure and efficient data management systems with full CRUD operations, implementing best practices in data handling.",
    ],
  },
  {
    company: "CBNITS",
    position: "Frontend Development Intern",
    duration: "June 2024 - July 2024",
    description: [
      "Analyzed web-based user interactions and built highly-responsive UI components using React, resulting in a 50% increase in user base.",
      "Converted designs and wireframes into efficient, high-quality code, developing application interfaces with JavaScript in line with React.js workflows.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
        <p className="max-w-[900px] text-center text-muted-foreground sm:text-xl">
          My professional journey and internships
        </p>
      </motion.div>
      <div className="mt-16 relative">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 flex justify-between items-center w-full"
          >
            <Card className="w-full hover-effect">
              <CardHeader>
                <CardTitle>{experience.position}</CardTitle>
                <CardDescription>{experience.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-2">{experience.duration}</Badge>
                <ul className="list-disc pl-4 space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

