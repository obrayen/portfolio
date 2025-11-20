import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart Fish Feeder IoT",
      description:
        "Sistem IoT pemberi makan ikan otomatis menggunakan ESP32, RTC, servo, motor DC, dan sensor ultrasonik. Bisa dipantau melalui Blynk.",
      image:
        "/DALL·E 2025-11-20 14.14.54 - A clean and simple landscape-oriented illustration showing an automatic smart fish feeder IoT system. Depict a small fish tank on a table with gentle .webp",
      technologies: ["ESP32", "Blynk", "Ultrasonic", "RTC", "Servo"],
      link: "https://wokwi.com/projects/446430947868176385", // <— isi sendiri
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image:
        "/DALL·E 2025-11-20 14.15.00 - A clean and simple landscape illustration showing a small Arduino-based Brick Breaker game setup. The scene features an Arduino board connected to a 1.webp",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://line-following-robot.willdonaldson.io/en/latest/index.html",
    },

    {
      title: "IoT Lamp Control + DHT Monitoring",
      description:
        "Kontrol lampu dan monitoring suhu/kelembapan melalui MQTT dan dashboard web. Menggunakan ESP32 dan DHT22.",
      image:
        "/DALL·E 2025-11-20 14.15.05 - A simple, clean landscape illustration of an IoT lamp control and DHT monitoring system. Show an ESP32 board connected neatly to a DHT22 temperature a.webp",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/ChatGPT Image 20 Nov 2025, 14.15.19.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Storage Web App",
      description:
        "Aplikasi web penyimpanan file & link dokumen menggunakan Laravel Blade. Fitur input judul, deskripsi, dan waktu otomatis.",
      image: "/ChatGPT Image 20 Nov 2025, 14.16.06.png",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },
    {
      title: "Smart Fish Feeder IoT",
      description:
        "Sistem IoT pemberi makan ikan otomatis menggunakan ESP32, RTC, servo, motor DC, dan sensor ultrasonik. Bisa dipantau melalui Blynk.",
      image:
        "/DALL·E 2025-11-20 14.14.54 - A clean and simple landscape-oriented illustration showing an automatic smart fish feeder IoT system. Depict a small fish tank on a table with gentle .webp",
      technologies: ["ESP32", "Blynk", "Ultrasonic", "RTC", "Servo"],
      link: "https://github.com/username/smart-fish-feeder", // <— isi sendiri
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image:
        "/DALL·E 2025-11-20 14.15.00 - A clean and simple landscape illustration showing a small Arduino-based Brick Breaker game setup. The scene features an Arduino board connected to a 1.webp",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image:
        "/DALL·E 2025-11-20 14.15.05 - A simple, clean landscape illustration of an IoT lamp control and DHT monitoring system. Show an ESP32 board connected neatly to a DHT22 temperature a.webp",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "https://github.com/username/brick-breaker",
    },

    {
      title: "Brick Breaker Game on OLED",
      description:
        "Game Brick Breaker berbasis Arduino dengan layar OLED 128x64 dan joystick analog sebagai controller.",
      image: "/ChatGPT Image 20 Nov 2025, 14.15.19.png",
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
