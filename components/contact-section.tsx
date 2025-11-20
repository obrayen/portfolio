"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/obrayen", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_4aliyafie/", label: "Instagram" },
    { icon: Mail, href: "smktibazmamali@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="bg-primary text-primary-foreground section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4">Get in Touch</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Mari berkolaborasi dalam proyek teknologi atau diskusi tentang robotika dan web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardHeader>
              <CardTitle className="font-serif font-bold text-2xl text-primary-foreground">Send a Message</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 resize-none"
                  />
                </div>

                <Button type="submit" variant="secondary" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif font-bold text-2xl mb-6 text-primary-foreground">Connect with Me</h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-3 p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200 group"
                  >
                    <social.icon className="h-6 w-6 text-primary-foreground group-hover:text-secondary transition-colors" />
                    <span className="font-medium text-primary-foreground group-hover:text-secondary transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h4 className="font-serif font-bold text-xl mb-4 text-primary-foreground">Let's Collaborate</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                Saya selalu terbuka untuk diskusi tentang proyek robotika, pengembangan web, atau peluang kolaborasi
                dalam bidang teknologi. Mari ciptakan sesuatu yang amazing bersama!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
