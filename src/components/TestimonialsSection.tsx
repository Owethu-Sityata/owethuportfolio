import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import aviweImg from "@/assets/testimonial-aviwe.jpg";
import taraImg from "@/assets/testimonial-tara.png";

const testimonials = [
  {
    text: "Owethu is a highly motivated individual who consistently exemplifies personal leadership and a growth mindset. What sets him apart is not only his mindset but his tenacity to follow up and follow through any goal he sets for himself. He is one of the few people who can breathe life into ideas.",
    name: "Aviwe Mankayi",
    role: "Business Coach",
    img: aviweImg,
  },
  {
    text: "Owethu is a hardworking and reliable student who always strives to complete every task on time. His dedication to doing things right is matched only by his strong sense of integrity. Always honest, respectful, and focused on his goals.",
    name: "Tara Snell",
    role: "Assistant Lecturer, Life Choices Academy",
    img: taraImg,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding max-w-5xl mx-auto">
    <SectionHeading number="05" title="Testimonials" />

    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-card border border-border rounded-lg p-6 relative"
        >
          <span className="text-5xl text-primary/20 absolute top-4 left-6 font-serif">"</span>
          <p className="text-sm text-muted-foreground leading-relaxed mt-6 mb-6">{t.text}</p>
          <div className="flex items-center gap-3">
            <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
