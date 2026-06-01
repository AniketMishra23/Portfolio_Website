import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data";
import { SectionHeader } from "./About";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="02" title="Projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="card-bg rounded-xl p-5 neon-border border transition-all duration-300 group flex flex-col"
    >
      {/* Accent line */}
      <div
        className="h-0.5 w-12 rounded-full mb-4 transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: project.color }}
      />

      <h3 className="text-white font-semibold text-base mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs font-mono rounded border"
            style={{
              color: project.color,
              borderColor: project.color + "44",
              backgroundColor: project.color + "11",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
          >
            <GithubIcon size={14} /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#00f5ff] text-sm transition-colors"
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
