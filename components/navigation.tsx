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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="font-serif font-bold text-xl text-primary">
            Ali<span className="text-secondary">.dev</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-all duration-200 relative ${
                  active === item
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    active === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* MOBILE CTA */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="md:hidden"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  )
}