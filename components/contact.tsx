"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Connect</h2>
        <p className="max-w-[900px] text-center text-muted-foreground sm:text-xl">
          Get in touch for collaborations or just to say hi!
        </p>
      </motion.div>
      <div className="mx-auto mt-16 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6" />
              <span>kush.ag786@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6" />
              <span>+91 7987924577</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/kush10000" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/kush-agarwal" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

