import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  { year: "2025 – Present", role: "Front-End Developer Intern", org: "LC STUDIO", desc: "Building, testing, and deploying web systems as part of agile teams solving real-world problems." },
  { year: "2025", role: "BSc Software Development", org: "IU International University", desc: "Distance learning program in software engineering." },
  { year: "2024 – 2025", role: "Coding Course (Full Stack)", org: "Life Choices Academy", desc: "6-month intensive bootcamp covering full-stack development with PHP, Vue.js, and project deliverables." },
  { year: "2023 – 2024", role: "Customer Care", org: "IconAF", desc: "Refined communication and problem-solving under pressure." },
  { year: "2019 – 2022", role: "Receiver", org: "SPAR Warehouse", desc: "Managed stock intake and dispatch, building discipline and logistical awareness." },
  { year: "2018 – 2023", role: "Tutoring (Volunteer)", org: "Ikamva Youth", desc: "Empowered learners through innovative teaching methods." },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding max-w-5xl mx-auto">
    <SectionHeading number="02" title="Experience" />

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="pl-12 md:pl-16 relative"
          >
            {/* Dot */}
            <div className="absolute left-[11px] md:left-[19px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

            <span className="font-mono text-xs text-primary">{exp.year}</span>
            <h3 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
            <p className="text-sm text-primary/80 font-mono">{exp.org}</p>
            <p className="text-sm text-muted-foreground mt-2">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
