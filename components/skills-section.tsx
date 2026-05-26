type Skill = {
  name: string
  category: string
  highlight?: boolean
}

export default function SkillsSection() {
  const skills: Skill[] = [
    // ROBOTICS & IoT
    { name: "Arduino", category: "Robotics & IoT" },
    { name: "ESP32", category: "Robotics & IoT" },
    { name: "Ultrasonic Sensor", category: "Robotics & IoT" },
    { name: "Servo Motor", category: "Robotics & IoT" },
    { name: "MQTT", category: "Robotics & IoT" },
    { name: "Blynk", category: "Robotics & IoT" },
    { name: "Sensor Integration (RFID & DHT)", category: "Robotics & IoT" },
    { name: "LED Matrix P10", category: "Robotics & IoT" },
    { name: "Automation & Scheduling", category: "Robotics & IoT" },

    // PROGRAMMING
    { name: "C++", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "Embedded Systems", category: "Programming" },

    // WEB DEVELOPMENT
    { name: "HTML", category: "Web Development" },
    { name: "CSS", category: "Web Development" },
    { name: "Tailwind CSS", category: "Web Development" },
    { name: "React.js", category: "Web Development" },
    { name: "Laravel", category: "Web Development" },
    { name: "Database Management", category: "Web Development" },

    // AI & COMPUTER VISION
    { name: "OpenCV", category: "AI & Computer Vision" },
    { name: "MediaPipe", category: "AI & Computer Vision" },
    { name: "Object Detection", category: "AI & Computer Vision" },
    { name: "Real-time Image Processing", category: "AI & Computer Vision" },
  ]

  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="skills" className="bg-background py-32 border-t border-border/50">
      <div className="container-max">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-foreground tracking-tight">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Keahlian teknis yang saya kuasai dalam pengembangan sistem terintegrasi dan aplikasi web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {categories.map((category) => (
            <div 
              key={category} 
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary/20" />
                <h3 className="text-foreground text-sm font-bold uppercase tracking-widest">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-secondary/50 text-foreground/80 font-medium rounded-full text-sm border border-border/50 hover:border-primary/30 hover:bg-secondary transition-colors cursor-default shadow-sm"
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