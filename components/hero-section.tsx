"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-primary text-primary-foreground flex items-center relative overflow-hidden"
    >
      {/* subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 opacity-90" />

      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl">
          
          {/* HEADLINE */}
          <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Building Smart Systems
            <br />
            <span className="text-secondary">with Robotics & Web</span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90 font-medium">
            I'm <span className="font-bold">M. Ali Yafie Y</span> — Robotics Leader & Developer
          </p>

          {/* VALUE */}
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-2xl">
            Saya mengembangkan solusi berbasis IoT, robotika, dan web untuk menciptakan sistem yang efisien,
            interaktif, dan berdampak nyata.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:opacity-90"
            >
              Explore My Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Work With Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}