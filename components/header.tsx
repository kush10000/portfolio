"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="font-bold">KA</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Link
              href="#about"
              className={cn(
                navigationMenuTriggerStyle(),
                "hidden md:inline-flex"
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About
            </Link>
            <Link
              href="#projects"
              className={cn(
                navigationMenuTriggerStyle(),
                "hidden md:inline-flex"
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className={cn(
                navigationMenuTriggerStyle(),
                "hidden md:inline-flex"
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className={cn(
                navigationMenuTriggerStyle(),
                "hidden md:inline-flex"
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

