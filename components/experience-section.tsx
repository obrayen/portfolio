import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Trophy } from "lucide-react"

type Experience = {
  title: string
  organization: string
  period: string
  location: string
  description: string
  highlight?: boolean
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Robotics Team Leader",
      organization: "SMK TI Bazma",
      period: "2025 – 2026",
      location: "Bogor, Indonesia",
      description:
        "Memimpin tim ekstrakurikuler robotika yang berfokus pada proyek IoT dan sistem otomatisasi. Bertanggung jawab dalam mengatur tim, membimbing anggota junior, serta mengarahkan pengembangan proyek berbasis embedded system untuk meningkatkan kemampuan teknis dan inovasi dalam tim.",
      highlight: true,
    },
    {
      title: "National Robotics Olympiad Participant (Robocode)",
      organization: "Robocode Competition – Surabaya",
      period: "2024",
      location: "Surabaya, Indonesia",
      description:
        "Mengikuti kompetisi robotika tingkat nasional yang berfokus pada pemrograman robot dan perancangan algoritma. Pengalaman ini melatih kemampuan berpikir logis, problem solving, serta efisiensi dalam pemrograman untuk sistem otomatis.",
      highlight: true,
    },
    {
      title: "Botani Robotics Competition Participant (BRC)",
      organization: "Botani Square Robotics Competition",
      period: "2025",
      location: "Bogor, Indonesia",
      description:
        "Berpartisipasi dalam kompetisi robotika kategori line follower dan sistem otomatisasi. Fokus pada pengoptimalan sensor, stabilitas pergerakan robot, dan peningkatan akurasi kontrol dalam kondisi kompetisi.",
      highlight: true,
    },
    {
      title: "IoT & Embedded Systems Tutor",
      organization: "SMK TI Bazma",
      period: "2024",
      location: "Bogor, Indonesia",
      description:
        "Mengajar dasar-dasar Internet of Things (IoT) kepada siswa junior, termasuk pemrograman ESP32, penggunaan sensor, dan pembuatan sistem otomatis sederhana. Pembelajaran dilakukan secara praktik untuk meningkatkan pemahaman teknis siswa.",
    },
    {
      title: "Boarding Discipline Supervisor (Mudabbir)",
      organization: "SMK TI Bazma",
      period: "2025 – 2026",
      location: "Bogor, Indonesia",
      description:
        "Bertanggung jawab dalam menjaga kedisiplinan lingkungan asrama, membimbing siswa junior, serta membantu menciptakan lingkungan yang tertib, aman, dan terstruktur untuk mendukung proses belajar.",
    },
    {
      title: "IoT & Embedded Systems Developer (Personal Projects)",
      organization: "Independent Projects",
      period: "2024 – Present",
      location: "Indonesia",
      description:
        "Mengembangkan berbagai proyek berbasis IoT dan embedded system seperti Smart Fish Feeder, game berbasis OLED, dan sistem monitoring sensor menggunakan ESP32 dan Arduino. Fokus pada integrasi hardware dan software serta penyelesaian masalah nyata.",
      highlight: true,
    },
  ]

  return (
    <section className="bg-muted/30 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pengalaman dalam kepemimpinan, kompetisi, pengajaran, dan pengembangan sistem teknologi
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className={`border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                experience.highlight ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="font-serif font-bold text-xl text-foreground flex items-center gap-2">
                    {experience.title}
                    {experience.highlight && (
                      <Trophy className="h-4 w-4 text-primary" />
                    )}
                  </CardTitle>

                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {experience.period}
                  </div>
                </div>

                <div className="flex items-center text-primary font-medium">
                  <span>{experience.organization}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}