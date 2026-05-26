import { MapPin, Trophy } from "lucide-react"

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
    <section className="bg-secondary/30 py-32 border-t border-border/50">
      <div className="container-max">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl font-extrabold mb-6 text-foreground tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Perjalanan dalam kepemimpinan, kompetisi, pengajaran, dan pengembangan sistem teknologi.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/80 before:to-transparent">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary/80 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 relative z-10">
                {experience.highlight ? <Trophy className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current" />}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl shadow-sm border border-border/40 hover:border-border transition-colors duration-300">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {experience.title}
                    </h3>
                    <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-foreground/80 mb-3">
                    {experience.organization}
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-muted-foreground flex items-center gap-1 font-light">
                      <MapPin className="w-3.5 h-3.5" />
                      {experience.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm font-light">
                    {experience.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}