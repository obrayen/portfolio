import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    
    {
      title: "Smart Home Automation",
      description:
        "Sistem IoT untuk otomatisasi rumah menggunakan Arduino dan ESP32 dengan kontrol melalui aplikasi mobile.",
      image: "/smart-home-automation.png",
      technologies: ["ESP32", "IoT", "Mobile App", "WiFi"],
    },
    {
      title: "Smart Home Automation",
      description:
        "Sistem IoT untuk otomatisasi rumah menggunakan Arduino dan ESP32 dengan kontrol melalui aplikasi mobile.",
      image: "/smart-home-automation.png",
      technologies: ["ESP32", "IoT", "Mobile App", "WiFi"],
    },
    {
      title: "Smart Home Automation",
      description:
        "Sistem IoT untuk otomatisasi rumah menggunakan Arduino dan ESP32 dengan kontrol melalui aplikasi mobile.",
      image: "/smart-home-automation.png",
      technologies: ["ESP32", "IoT", "Mobile App", "WiFi"],
    },
    {
      title: "Smart Home Automation",
      description:
        "Sistem IoT untuk otomatisasi rumah menggunakan Arduino dan ESP32 dengan kontrol melalui aplikasi mobile.",
      image: "/smart-home-automation.png",
      technologies: ["ESP32", "IoT", "Mobile App", "WiFi"],
    },
    {
      title: "Smart Home Automation",
      description:
        "Sistem IoT untuk otomatisasi rumah menggunakan Arduino dan ESP32 dengan kontrol melalui aplikasi mobile.",
      image: "/smart-home-automation.png",
      technologies: ["ESP32", "IoT", "Mobile App", "WiFi"],
    },
    {
      title: "Website Komunitas TI Bazma",
      description:
        "Platform web sederhana untuk anggota komunitas teknologi sekolah dengan fitur forum dan resource sharing.",
      image: "/school-community-website-interface.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
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

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
