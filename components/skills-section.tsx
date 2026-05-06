type Skill = {
  name: string
  description: string
  category: string
  highlight?: boolean
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Arduino",
      description: "Membangun sistem robotik, sensor integration, dan automation",
      category: "Robotics",
      highlight: true,
    },
    {
      name: "ESP32",
      description: "Pengembangan IoT dengan MQTT, Blynk, dan real-time monitoring",
      category: "IoT",
      highlight: true,
    },
    {
      name: "C++",
      description: "Digunakan untuk pemrograman Arduino dan logika sistem embedded",
      category: "Programming",
    },
    {
      name: "React.js",
      description: "Membangun UI interaktif berbasis component dan state management dasar",
      category: "Web Development",
    },
    {
      name: "HTML/CSS",
      description: "Membuat layout responsive dan styling modern dengan Flexbox & Grid",
      category: "Web Development",
    },
    {
      name: "Tailwind CSS",
      description: "Styling cepat dan konsisten menggunakan utility-first CSS framework",
      category: "Web Development",
    },
    {
      name: "AI Prompting",
      description: "Menyusun prompt efektif untuk menghasilkan output AI yang optimal",
      category: "AI",
    },
    {
      name: "Leadership",
      description: "Memimpin tim robotika dan mengatur jalannya proyek teknologi",
      category: "Soft Skills",
    },
  ]

  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="skills" className="bg-background section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keahlian yang saya gunakan dalam membangun solusi di bidang teknologi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="font-serif font-bold text-xl border-b pb-2">
                {category}
              </h3>

              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="flex gap-3">
                      
                      {/* BULLET */}
                      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />

                      {/* CONTENT */}
                      <div>
                        <p className="font-medium text-foreground">
                          {skill.name}
                          {skill.highlight && (
                            <span className="ml-2 text-xs text-primary">★</span>
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}