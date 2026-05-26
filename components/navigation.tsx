"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const sections = ["home", "about", "projects", "skills", "contact"]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // detect active section
      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-border/50 shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between h-20">
        {/* LOGO */}
        <div className="font-bold text-xl tracking-tight text-foreground cursor-pointer" onClick={() => scrollToSection("home")}>
          ali<span className="text-primary">.dev</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-1 bg-secondary/40 backdrop-blur-sm px-2 py-1 rounded-full border border-border/50">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize text-sm font-medium transition-all px-4 py-2 rounded-full ${
                active === item
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* MOBILE CTA */}
        <Button
          variant="default"
          onClick={() => scrollToSection("contact")}
          className="md:hidden rounded-full font-medium shadow-md"
        >
          Contact
        </Button>
      </div>
    </nav>
  )
}