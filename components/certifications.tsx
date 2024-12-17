"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Code, Trophy } from 'lucide-react'

const certifications = [
  {
    title: "OOAD Specialization",
    issuer: "University of Alberta",
    platform: "Coursera",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Big Data Specialization",
    issuer: "UCSD",
    platform: "Coursera",
    icon: <Award className="h-6 w-6" />,
  },
]

const achievements = [
  {
    title: "Coding Problem Solver",
    description: "Solved 250+ coding problems on platforms like LeetCode, CodeChef, and GFG",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "IECSE Member",
    description: "Participated in hackathons and workshops on DSA and Machine Learning",
    icon: <Trophy className="h-6 w-6" />,
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications & Achievements</h2>
        <p className="max-w-[900px] text-center text-muted-foreground sm:text-xl">
          Recognitions and milestones in my learning journey
        </p>
      </motion.div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} - {cert.platform}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

