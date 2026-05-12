import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Cog, Monitor, Star } from "lucide-react"

const highlights = [
  {
    icon: Cog,
    title: "Robotics & IoT",
    description:
      "Mengembangkan sistem berbasis ESP32, sensor, dan automation untuk berbagai proyek robotika dan IoT.",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Membangun aplikasi web modern menggunakan React dan Laravel dengan fokus pada UI responsif dan performa.",
  },
  {
    icon: Star,
    title: "Leadership",
    description:
      "Memimpin tim robotika, mengelola proyek teknologi, dan membimbing anggota dalam pengembangan skill teknis.",
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Saya adalah siswa SMK TI Bazma jurusan Sistem Informatika,
                Jaringan, dan Aplikasi dengan fokus pada pengembangan
                robotika serta teknologi berbasis IoT.
              </p>

              <p>
                Saat ini saya menjabat sebagai Ketua Ekstrakurikuler Robotika,
                memimpin tim dalam pengembangan proyek teknologi dan kegiatan
                kompetisi.
              </p>

              <p>
                Saya juga aktif dalam pengembangan web menggunakan React dan
                Laravel untuk membangun solusi digital yang modern, fungsional,
                dan berdampak.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <Image
                src="/ali.jpeg"
                alt="M. Ali Yafie"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon

            return (
              <Card
                key={index}
                className="group border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {highlight.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
