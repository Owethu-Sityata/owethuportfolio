import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  "Python", "JavaScript", "HTML", "CSS", "Vue.js", "PHP",
  "MySQL", "Flutter", "Figma", "Pandas", "Matplotlib", "Git",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding max-w-5xl mx-auto">
    <SectionHeading number="04" title="Skills" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
    >
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -4, borderColor: "hsl(40, 90%, 55%)" }}
          className="bg-card border border-border rounded-lg p-4 text-center cursor-default transition-colors"
        >
          <span className="text-sm font-mono text-foreground">{skill}</span>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default SkillsSection;
