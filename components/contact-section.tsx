"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // simulasi request
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/obrayen", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_4aliyafie/",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:smktibazmamali@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="contact"
      className="bg-secondary/30 py-32 border-t border-border/50"
    >
      <div className="container-max">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Tertarik berkolaborasi dalam proyek robotika atau pengembangan web?
            Hubungi saya dan mari kita bangun sesuatu yang berdampak.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-16">
          {/* FORM */}
          <div className="bg-card border border-border/40 rounded-2xl p-10 shadow-sm">
            <h3 className="font-bold text-2xl text-foreground mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Name</label>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-background border-border/60 text-foreground h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary shadow-sm"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Email</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-background border-border/60 text-foreground h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary shadow-sm"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Message</label>
                <Textarea
                  name="message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className="bg-background border-border/60 text-foreground resize-none rounded-xl focus-visible:ring-1 focus-visible:ring-primary shadow-sm"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 transition-all shadow-md hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </Button>

              {isSuccess && (
                <p className="text-green-600 dark:text-green-400 text-center text-sm font-medium mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* SOCIAL */}
          <div className="space-y-10">
            <div>
              <h3 className="font-bold text-2xl mb-8 text-foreground">
                Connect
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-5 bg-card border border-border/40 rounded-xl hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 shadow-sm group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-current" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                Open for Opportunities
              </h4>
              <p className="text-primary-foreground/80 text-sm leading-relaxed font-light">
                Saya terbuka untuk kolaborasi proyek teknologi, pengembangan
                sistem IoT, maupun pembuatan aplikasi web. Mari wujudkan ide
                menjadi solusi nyata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
