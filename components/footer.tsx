import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/obrayen" },
    { icon: Instagram, href: "https://www.instagram.com/_4aliyafie/" },
    { icon: Linkedin, href: "https://linkedin.com/" },
    { icon: Mail, href: "mailto:smktibazmamali@gmail.com" },
  ]

  return (
    <footer className="bg-background pt-20 pb-12 border-t border-border/40">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl tracking-tight mb-2 text-foreground">
              ali<span className="text-primary">.dev</span>
            </h3>
            <p className="text-muted-foreground text-sm font-light">
              Robotics • IoT • Web Developer
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={`Visit my ${social.icon.name}`}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-border/40 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4 font-light">
          <p>© {year} M. Ali Yafie Y. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Based in Bogor, Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}