import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart Fish Feeder IoT",
      description:
        "Sistem IoT pemberi makan ikan otomatis menggunakan ESP32, RTC, servo, motor DC, dan sensor ultrasonik. Bisa dipantau melalui Blynk.",
      image: "/smart-fish-feeder.png",
      technologies: ["ESP32", "Blynk", "Ultrasonic", "RTC", "Servo"],
      link: "https://github.com/username/smart-fish-feeder", // <— isi sendiri
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/brick-breaker.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    // … sisanya tinggal tambahin link di sini
  ];

  return (
    <section
      id="projects"
      className="bg-sidebar text-sidebar-foreground section-padding"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4">
            My Projects
          </h2>
          <p className="text-sidebar-foreground/80 text-lg max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan dalam bidang
            robotika dan pengembangan web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-sidebar-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="font-serif font-bold text-xl text-card-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINK BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-2 border border-sidebar-border rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
