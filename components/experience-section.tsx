import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Ketua Robotika Ekstrakurikuler",
      organization: "SMK TI Bazma",
      period: "Juni 2024 - Sekarang",
      location: "Bogor, Indonesia",
      description:
        "Memimpin tim robotika sekolah, mengorganisir kompetisi, dan mengembangkan kurikulum pembelajaran robotika untuk siswa.",
    },
    {
      title: "Tutor IoT",
      organization: "SMK TI Bazma",
      period: "Juni 2024",
      location: "Bogor, Indonesia",
      description:
        "Mengajar konsep Internet of Things kepada siswa junior, termasuk penggunaan ESP32 dan sensor untuk proyek automation.",
    },
    {
      title: "Mudabbir – Divisi Tata Tertib",
      organization: "SMK TI Bazma",
      period: "2023 – Sekarang",
      location: "Bogor, Indonesia",
      description:
        "Bertanggung jawab menjaga kedisiplinan dan ketertiban asrama, membimbing siswa junior, mengatur rutinitas harian asrama, serta menangani pelanggaran tata tertib untuk menciptakan lingkungan yang aman dan nyaman.",
    },
  ];

  return (
    <section className="bg-muted/30 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pengalaman organisasi dan kepemimpinan dalam bidang teknologi
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="font-serif font-bold text-xl text-foreground">
                    {experience.title}
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
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
