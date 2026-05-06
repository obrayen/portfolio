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
    <footer className="bg-sidebar text-sidebar-foreground py-10">
      <div className="container-max">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-lg">M. Ali Yafie Y</h3>
            <p className="text-sidebar-foreground/70 text-sm">
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
                className="p-2 rounded-full bg-sidebar-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-6 border-t border-sidebar-foreground/10 pt-6 text-center text-sm text-sidebar-foreground/60">
          © {year} M. Ali Yafie Y. All rights reserved.
        </div>
      </div>
    </footer>
  )
}