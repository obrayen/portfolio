import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const skills = [
    { name: "React.js", level: 50, category: "Web Development" },
    { name: "Arduino", level: 90, category: "Robotics" },
    { name: "HTML/CSS", level: 85, category: "Web Development" },
    { name: "ESP32", level: 85, category: "IoT" },
    { name: "C++", level: 75, category: "Programming" },
    { name: "Tailwind CSS", level: 80, category: "Web Development" },
    { name: "Leadership", level: 88, category: "Soft Skills" },
    { name: "AI Prompting", level: 70, category: "AI/ML" },
  ]

  const categories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <section id="skills" className="bg-background section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4 text-foreground">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keahlian dan teknologi yang saya kuasai dalam pengembangan web, robotika, dan kepemimpinan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="font-serif font-bold text-xl text-foreground mb-6 pb-2 border-b border-border">
                {category}
              </h3>

              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
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
