import Image from "next/image"
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
      className="bg-background py-32"
    >
      <div className="container-max">
        
        <div className="grid lg:grid-cols-[1fr_340px] gap-20 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10 text-foreground tracking-tight">
              About Me
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Saya adalah siswa <strong className="text-foreground font-semibold">SMK TI Bazma</strong> jurusan Sistem Informatika, Jaringan, dan Aplikasi dengan fokus pada pengembangan robotika serta teknologi berbasis IoT.
              </p>
              <p>
                Saat ini saya menjabat sebagai <strong className="text-foreground font-semibold">Ketua Ekstrakurikuler Robotika</strong>, memimpin tim dalam pengembangan proyek teknologi dan kegiatan kompetisi.
              </p>
              <p>
                Saya juga aktif dalam pengembangan web menggunakan React dan Laravel untuk membangun solusi digital yang modern, fungsional, dan berdampak.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="grid sm:grid-cols-2 gap-10 mt-16 pt-12 border-t border-border/50">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div key={index} className="group">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground font-light">
                      {highlight.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl shadow-primary/5">
             <Image
                src="/ali.jpeg"
                alt="M. Ali Yafie"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 340px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
          </div>
        </div>

      </div>
    </section>
  )
}
