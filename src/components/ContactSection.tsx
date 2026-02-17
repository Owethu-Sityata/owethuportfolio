import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding max-w-2xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="font-mono text-primary text-sm mb-4">06. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
        my inbox is always open. I'll try my best to get back to you!
      </p>

      <a
        href="mailto:sityatao5@gmail.com"
        className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-md font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all"
      >
        <Mail size={16} />
        Say Hello
      </a>

      <div className="flex justify-center gap-6 mt-12">
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/in/owethu-sityata-b978b52aa/" },
          { icon: Youtube, href: "https://www.youtube.com/@owethusityata" },
          { icon: Github, href: "https://github.com/Owethu-Sityata" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
