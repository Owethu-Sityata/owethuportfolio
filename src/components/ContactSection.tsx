import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Send } from "lucide-react";
import { useState } from "react";
import contactImage from "@/assets/owethu-contact.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:sityatao5@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-4 text-center">06. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden aspect-[3/4] max-h-[500px]"
          >
            <img
              src={contactImage}
              alt="Owethu Sityata"
              className="w-full h-full object-cover transition-all duration-700 cursor-pointer"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">Name</label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">Message</label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-md font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all w-full justify-center"
            >
              <Send size={16} />
              Send Message
            </button>

            <div className="flex justify-center gap-6 pt-4">
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
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
