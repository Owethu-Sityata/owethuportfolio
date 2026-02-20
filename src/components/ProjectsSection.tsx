import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import priceApp from "@/assets/project-price-app.png";
import attendance from "@/assets/project-attendance.png";
import brand from "@/assets/project-brand.png";
import shopify from "@/assets/project-shopify.png";

const projects = [
  {
    title: "Mobile Price Comparison App",
    desc: "Served as Scrum Master for UI/UX team on multi-retailer price comparison app. Led competitive research, facilitated cross-team alignment, and managed transition from Figma to Flutter Flow.",
    tech: ["Flutter", "Flutter Flow", "Figma", "Python", "Web Scraping"],
    img: priceApp,
    demo: "https://youtube.com/shorts/k5t-287dyaU?si=oDOK_tF0f2Q2y6wq",
    figma: "https://www.figma.com/proto/OzYT9krNP5ujGySa7ihvBL/Untitled?node-id=28-127",
  },
  {
    title: "Attendance Tracking System",
    desc: "Contributed as the front-end developer, focusing on UI styling and functionality. Expanded role to support backend development with PHP and MySQL.",
    tech: ["Vue.js", ". PHP", ". MySQL", ". HTML", ". CSS"],
    img: attendance,
    demo: "https://youtu.be/YFE5qDqF8dg?si=W9YtYHi1DTfdeE63",
    github: "https://github.com/keanan557/Attendance-Tracking-System.git",
  },
  {
    title: "Portfolio Brand Identity",
    desc: "Collaborative UI/UX design project creating responsive web and mobile interfaces. Delivered wireframes, prototypes, and a complete design system.",
    tech: ["Figma", ". UI/UX Design", ". Prototyping", ". Responsive Design"],
    img: brand,
    demo: "https://www.figma.com/proto/Jh1LAi75QowgZrmov18kES/Portfolio-Brand-Identity?node-id=12-547",
    figma: "https://www.figma.com/design/Jh1LAi75QowgZrmov18kES/Portfolio-Brand-Identity",
  },
  {
    title: "Shopify Dropshipping Store",
    desc: "Built and launched a Shopify dropshipping store with custom theme design, organized products, and integrated live chat for better customer experience.",
    tech: ["shopify",". Tidio Live Chat", ". Theme Customization", ". E-commerce UX Optimization"],
    img: shopify,
    demo: "https://loud420.co.za/",
    // figma: "https://www.figma.com/design/Jh1LAi75QowgZrmov18kES/Portfolio-Brand-Identity",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding max-w-6xl mx-auto">
    <SectionHeading number="03" title="Projects" />

    <div className="space-y-24">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`grid md:grid-cols-12 gap-4 items-center ${i % 2 !== 0 ? "md:text-right" : ""}`}
        >
          {/* Image */}
          <div className={`md:col-span-7 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative rounded-lg overflow-hidden bg-primary/10">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          </div>

          {/* Info */}
          <div className={`md:col-span-5 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
            <p className="font-mono text-primary text-xs mb-1">Featured Project</p>
            <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>

            <div className="bg-card border border-border rounded-lg p-5 mb-4 shadow-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
            </div>

            <div className={`flex flex-wrap gap-2 mb-4 font-mono text-xs text-muted-foreground ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className={`flex gap-4 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
