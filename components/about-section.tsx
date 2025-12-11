import { Card, CardContent } from "@/components/ui/card"
import { Cog, Monitor, Star } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: Cog,
      title: "Robotik",
      description: "Ketua ekstrakurikuler robotika dengan pengalaman dalam IoT dan automation",
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Pengembangan website dan aplikasi menggunakan teknologi modern",
    },
    {
      icon: Star,
      title: "Leadership",
      description: "Memimpin tim dan proyek teknologi di lingkungan sekolah",
    },
  ]

  return (
    <section id="about" className="bg-background section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-black text-3xl md:text-4xl mb-6 text-foreground">About Me</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Halo! Saya M. Ali Yafie Y, sekarang sekolah di SMK TI Bazma, jurusan Sistem Informatika Jaringan dan Aplikasi. Saya menyukai
                teknisi dan masuk ke dunia robotik dan menjadi ketua di sana.
              </p>

              <p>
                Saya juga aktif dalam pembuatan website dan aplikasi. Saya sudah mengerjakan banyak proyek robotik dan
                digital yang menggabungkan kreativitas dengan teknologi terdepan.
              </p>

              <p>
                Dengan passion yang kuat dalam teknologi dan kepemimpinan, saya terus belajar dan berkembang untuk
                menciptakan solusi inovatif yang berdampak positif.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-muted flex items-center justify-center">
              <img
                src="/WhatsApp Image 2025-11-20 at 11.13.04.jpeg"
                alt="M. Ali Yafie"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-2 text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
