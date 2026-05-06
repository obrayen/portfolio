import { Card, CardContent } from "@/components/ui/card"
import { Cog, Monitor, Star } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: Cog,
      title: "Robotics & IoT",
      description:
        "Memimpin tim robotika dan mengembangkan proyek berbasis ESP32, sensor, dan automation system.",
    },
    {
      icon: Monitor,
      title: "Web Development",
      description:
        "Membangun aplikasi web modern menggunakan React dan Laravel untuk solusi digital yang efisien.",
    },
    {
      icon: Star,
      title: "Leadership",
      description:
        "Berpengalaman memimpin tim, mengelola proyek, dan membimbing anggota dalam pengembangan teknologi.",
    },
  ]

  return (
    <section id="about" className="bg-background section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="font-serif font-black text-3xl md:text-4xl mb-6 text-foreground">
              About Me
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Saya adalah siswa SMK TI Bazma jurusan Sistem Informatika Jaringan dan Aplikasi
                dengan fokus pada pengembangan robotika dan teknologi berbasis IoT.
              </p>

              <p>
                Saat ini saya menjabat sebagai Ketua Ekstrakurikuler Robotika,
                di mana saya memimpin tim dalam mengembangkan berbagai proyek teknologi
                dan mengikuti kegiatan kompetisi.
              </p>

              <p>
                Selain itu, saya juga aktif dalam pengembangan web menggunakan teknologi modern
                untuk menciptakan solusi digital yang fungsional dan berdampak.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <img
                src="/ali.jpeg"
                alt="M. Ali Yafie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="font-serif font-bold text-xl mb-2 text-foreground">
                  {highlight.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}