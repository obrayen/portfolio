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
    <section id="skills" className="bg-slate-950 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Skills
        </h2>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-default"
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