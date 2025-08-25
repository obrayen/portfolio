"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen bg-primary text-primary-foreground flex items-center">
      <div className="container-max section-padding">
        <div className="max-w-4xl">
          <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Hi, I'm M. Ali Yafie Y
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-medium">
            Tech Enthusiast | Robotics Leader | Web & Robotics Developer
          </p>

          <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 italic">
            "Merancang Teknologi. Menyentuh Pengalaman."
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToProjects} size="lg" variant="secondary" className="text-lg px-8 py-6">
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
