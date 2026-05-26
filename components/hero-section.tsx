"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

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
      className="relative min-h-[90vh] flex items-center bg-background overflow-hidden"
    >
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-40 mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      
      {/* Subtle gradient overlay to fade out the dots at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container-max section-padding relative z-10 pt-32">
        <div className="max-w-3xl">
          
          {/* TAG */}
          <div className="inline-flex items-center space-x-2.5 mb-8 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase text-foreground/80">
              Software & Robotics Developer
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-foreground">
            Building functional systems that solve real problems.
          </h1>

          {/* SUBTITLE */}
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground leading-relaxed max-w-2xl font-light">
            I&apos;m <span className="text-foreground font-medium">M. Ali Yafie</span>, a student and developer focused on IoT, robotics, and clean web experiences.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="text-base px-8 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="text-base px-8 h-14 rounded-full font-medium border-border/60 bg-white/50 backdrop-blur-sm text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <ChevronDown className="h-6 w-6 text-foreground" />
      </div>
    </section>
  )
}