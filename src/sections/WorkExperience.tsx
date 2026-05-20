import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import logoRPA from "@/assets/images/logo-rpa.jpeg";
import logoJogiia from "@/assets/images/logo-jogiia.jpg";
import logoOriskin from "@/assets/images/logo-oriskin.jpg";

const experiences = [
  {
    company: "Oriskin Indonesia (PT Gempita Damai Permai)",
    role: "Mobile Developer",
    type: "Full Time",
    period: "January 2026 - Present",
    location: "West Jakarta, Indonesia",
    logo: logoOriskin,
  },
  {
    company: "PT Jogiia Digital Indotech",
    role: "Mobile Developer",
    type: "Full Time",
    period: "November 2024 - February 2026",
    location: "Sleman, Indonesia",
    logo: logoJogiia,
  },
  {
    company: "PT Rajawali Permata Asia",
    role: "Mobile Developer",
    type: "Freelance",
    period: "July 2024 - September 2024",
    location: "Cirebon, Indonesia",
    logo: logoRPA,
  },
];

export const WorkExperienceSection = () => {
  return (
    <section className="py-16 lg:py-24" id="experience-section">
      <div className="container">
        <SectionHeader
          eyebrow="Work Experience"
          title="Where I've Worked"
          description="My professional journey as a mobile developer across different companies."
        />
        <div className="mt-12 md:mt-16 flex flex-col gap-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="px-6 py-5 md:px-8 md:py-6">
              <div className="flex items-center gap-5 md:gap-8">
                <div className="size-14 md:size-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-base md:text-lg text-white">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm md:text-base mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-0.5 flex-shrink-0">
                      <span className="text-white/50 text-sm">
                        {exp.period}
                      </span>
                      <span className="text-white/40 text-xs">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
