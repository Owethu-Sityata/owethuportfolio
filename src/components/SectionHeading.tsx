import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({ number, title }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-center gap-4 mb-12"
  >
    <span className="font-mono text-primary text-lg">{number}.</span>
    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    <div className="flex-1 h-px bg-border max-w-xs" />
  </motion.div>
);

export default SectionHeading;
