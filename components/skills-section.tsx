type Skill = {
  name: string
  category: string
  highlight?: boolean
}

export default function SkillsSection() {
  const skills: Skill[] = [
    // ROBOTICS / IOT (utama lu)
    { name: "Arduino", category: "", highlight: true },
    { name: "ESP32", category: "", highlight: true },
    { name: "Ultrasonic Sensor", category: "" },
    { name: "Servo Motor", category: "" },
    { name: "MQTT", category: "" },
    { name: "Blynk", category: "" },

    // PROGRAMMING
    { name: "C++", category: "" },

    // WEB
    { name: "HTML", category: "" },
    { name: "CSS", category: "" },
    { name: "Tailwind CSS", category: "" },
    { name: "React.js", category: "" },
    { name: "Laravel", category: "" },

    // AI / CV
    { name: "Python", category: "" },
    { name: "OpenCV", category: "" },
    { name: "MediaPipe", category: "" },

    // SOFT SKILL
    { name: "Leadership", category: "" },
    { name: "Teamwork", category: "" },
    { name: "Problem Solving", category: "" },
  ]

  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="skills" className="bg-background section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Teknologi dan tools yang saya gunakan dalam proyek robotika dan web
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4 text-foreground">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium transition
                        ${
                          skill.highlight
                            ? "bg-primary text-primary-foreground"
                            : "bg-yellow-400 text-black"
                        }
                        hover:scale-105
                      `}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}