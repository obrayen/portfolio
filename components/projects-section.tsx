"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  category: string
  highlight?: boolean
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [imgSrc, setImgSrc] = useState(
    project.image.startsWith('/') || project.image.startsWith('http') 
      ? project.image 
      : `/${project.image}`
  )

  return (
    <Card className="group bg-card border-border/40 hover:border-border transition-all duration-500 overflow-hidden flex flex-col h-full rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* IMAGE */}
      <div className="relative h-56 w-full overflow-hidden bg-secondary/50">
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => {
            setImgSrc('https://placehold.co/600x400/f1f5f9/94a3b8?text=Project+Image')
          }}
        />
      </div>

      <div className="p-8 flex-1 flex flex-col bg-card relative z-20">
        <div className="mb-4">
          <span className="text-[11px] font-semibold tracking-widest text-primary uppercase mb-2 block">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-1 text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 line-clamp-3 font-light">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-secondary/70 text-secondary-foreground text-xs font-medium rounded-full"
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
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto group/link w-fit"
        >
          View Project
          <ExternalLink className="ml-1.5 h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      </div>
    </Card>
  )
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
      className="bg-secondary/30 py-32 border-t border-border/50"
    >
      <div className="container-max">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Dokumentasi proyek IoT, embedded system, computer vision, dan web
            development yang telah saya kembangkan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}