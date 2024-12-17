import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Kush Agarwal. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-sm font-medium hover:underline">
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:underline">
            About
          </a>
          <a href="#projects" className="text-sm font-medium hover:underline">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:underline">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/kush10000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kush-agarwal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:kush.ag786@gmail.com" className="text-muted-foreground hover:text-primary">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

