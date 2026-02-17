import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import aboutImg from "@/assets/owethu-about.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding max-w-5xl mx-auto">
    <SectionHeading number="01" title="About Me" />

    <div className="grid md:grid-cols-5 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed"
      >
        <p>
          My tech journey began through friendship and curiosity. A Life Choices Academy alumni would let me watch him code, patiently explaining concepts when I asked questions. His passion was infectious.
        </p>
        <p>
          In 2023, I failed the Life Choices technical exam. That rejection sparked my determination. While working as a lead generator, I prepared and reapplied in 2024 — and got accepted.
        </p>
        <p>
          I completed an intensive 6-month bootcamp, mastering PHP, Vue.js, and full-stack development. Now I'm working on client projects while studying Java OOP at{" "}
          <span className="text-primary">IU International University</span>.
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4">
          {[
            { emoji: "💡", title: "Why I Build", text: "I create tools that make life simpler and smoother." },
            { emoji: "⚡", title: "How I Work", text: "Patient, thoughtful, and always open to improving." },
            { emoji: "🚀", title: "What Drives Me", text: "Turning messy problems into something real and meaningful." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-lg p-4">
              <span className="text-2xl">{item.emoji}</span>
              <h4 className="text-sm font-semibold text-foreground mt-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:col-span-2 flex justify-center"
      >
        <div className="relative group">
          <div className="w-full max-w-[280px] aspect-square rounded-lg overflow-hidden">
            <img
              src={aboutImg}
              alt="Owethu Sityata"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -inset-1 rounded-lg border border-primary/30 -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
