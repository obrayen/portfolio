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
      title: "RFID Attendance System",
      category: "IoT / Embedded System",
      description:
        "Mengembangkan sistem absensi berbasis RFID untuk identifikasi pengguna secara otomatis sehingga meningkatkan akurasi pencatatan dan mengurangi kesalahan manual.",
      image: "rfid.jpg",
      technologies: ["Arduino", "RFID RC522", "LCD Display"],
      link: "https://drive.google.com/drive/folders/1A4sjdTX9_4X_4FxcAJ8LMUL5SOIPx4w1?usp=sharing",
      highlight: true,
    },

    {
      title: "Smart Fish Feeder System",
      category: "IoT / Automation",
      description:
        "Mengembangkan sistem pemberi makan ikan otomatis berbasis Arduino dan ESP32 dengan fitur penjadwalan waktu untuk meningkatkan efisiensi dan konsistensi pemberian pakan.",
      image: "pakanikan.png",
      technologies: ["ESP32", "Arduino", "RTC Module", "Servo Motor"],
      link: "https://drive.google.com/drive/folders/11Cn9UWNp9rO9bjnq4bYkszm0SBNd5JCb?usp=sharing",
      highlight: true,
    },

    {
      title: "IoT Smart Lighting & Environment Monitoring",
      category: "IoT / Smart System",
      description:
        "Mengembangkan sistem IoT berbasis web untuk kontrol pencahayaan serta monitoring suhu dan kelembaban secara real-time menggunakan ESP32.",
      image: "/projects/iot-lighting.jpg",
      technologies: ["ESP32", "MQTT", "DHT22", "Web Dashboard"],
      link: "https://drive.google.com/drive/folders/1O5bbXcM-YY76fNC7Z7waQKwNoNKAeHAh?usp=drive_link",
      highlight: true,
    },

    {
      title: "LED Matrix P10 Digital Clock",
      category: "Embedded System",
      description:
        "Mengembangkan jam digital berbasis LED Matrix P10 dengan tampilan waktu real-time yang stabil dan mudah dibaca untuk penggunaan berkelanjutan.",
      image: "p10.jpg",
      technologies: ["Arduino", "P10 Display", "RTC Module"],
      link: "https://drive.google.com/drive/folders/1FqFko3TVvhSAF7WdjBJlR_EDj_X2mvx8?usp=drive_link",
    },

    {
      title: "OpenCV RC Control System",
      category: "AI / Computer Vision",
      description:
        "Mengembangkan sistem kendali RC berbasis OpenCV untuk mendeteksi dan memproses objek secara real-time sehingga meningkatkan kemampuan otomatisasi dan kontrol visual.",
      image: "rcopencv.jpg",
      technologies: ["Python", "OpenCV", "ESP32", "WiFi"],
      link: "https://drive.google.com/drive/folders/1wYb2oBknYv8mqxcBuUkd4A1Wk9W1WY4C?usp=sharing",
      highlight: true,
    },

    {
      title: "Storage Web App",
      category: "Web Development",
      description:
        "Membangun aplikasi web penyimpanan file dan link menggunakan Laravel Blade dengan fitur upload file, deskripsi, dan timestamp otomatis.",
      image: "webstorage.png",
      technologies: ["Laravel", "Blade", "PHP", "MySQL"],
      link: "https://mystorages.vercel.app/",
    },
  ]

  return (
    <section
      id="projects"
      className="bg-sidebar text-sidebar-foreground section-padding"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4">
            Featured Projects
          </h2>

          <p className="text-sidebar-foreground/80 text-lg max-w-2xl mx-auto">
            Dokumentasi proyek IoT, embedded system, computer vision, dan web
            development yang telah saya kembangkan.
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

                <p className="text-xs text-primary font-medium">
                  {project.category}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
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

                {/* BUTTON */}
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