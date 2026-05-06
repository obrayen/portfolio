import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  category: string
  highlight?: boolean
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Smart Fish Feeder IoT",
      category: "IoT / Embedded System",
      description:
        "Sistem otomatis pemberi makan ikan berbasis ESP32 yang dapat dikontrol dan dipantau menggunakan Blynk secara real-time.",
      image: "/projects/fish-feeder.jpg",
      technologies: ["ESP32", "Blynk", "Servo", "Ultrasonic Sensor"],
      link: "#",
      highlight: true,
    },
    {
      title: "IoT Lamp Control & Monitoring System",
      category: "IoT / Smart Home",
      description:
        "Sistem kontrol lampu dan monitoring suhu serta kelembaban berbasis ESP32 dengan komunikasi MQTT real-time.",
      image: "/projects/iot-lamp.jpg",
      technologies: ["ESP32", "MQTT", "DHT22"],
      link: "#",
      highlight: true,
    },
    {
      title: "Brick Breaker Game (OLED Arduino)",
      category: "Embedded System / Game",
      description:
        "Game berbasis Arduino menggunakan OLED display dan joystick sebagai kontrol utama.",
      image: "/projects/brick-breaker.jpg",
      technologies: ["Arduino", "OLED", "C++", "Joystick"],
      link: "#",
    },
    {
      title: "Storage Web App",
      category: "Web Development",
      description:
        "Aplikasi web penyimpanan file dan link menggunakan Laravel Blade dengan fitur input data dan timestamp otomatis.",
      image: "/projects/storage-web.jpg",
      technologies: ["Laravel", "Blade", "PHP", "MySQL"],
      link: "#",
      highlight: true,
    },
    {
      title: "Line Following Robot",
      category: "Robotics",
      description:
        "Robot pengikut garis sebagai dasar pembelajaran sensor IR dan kontrol motor dalam sistem robotika.",
      image: "/projects/line-follower.jpg",
      technologies: ["Arduino", "IR Sensor", "DC Motor"],
      link: "#",
    },
    {
      title: "Computer Vision Experiment",
      category: "AI / Vision",
      description:
        "Eksperimen awal computer vision untuk integrasi sistem pengenalan objek pada robotika.",
      image: "/projects/cv-experiment.jpg",
      technologies: ["OpenCV", "Python", "Arduino"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="bg-sidebar text-sidebar-foreground section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-sidebar-foreground/80 text-lg max-w-2xl mx-auto">
            Dokumentasi proyek IoT, robotika, embedded system, dan web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group bg-card border-sidebar-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                project.highlight ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="font-serif font-bold text-xl">
                  {project.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {project.category}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-2 border border-sidebar-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}