import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, ChevronDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "../data";

export default function Hero() {
  const sequence = personal.roles.flatMap((r) => [r, 2000]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 grid-bg overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5ff] opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#bf00ff] opacity-5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        {/* Greeting chip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 border border-[#00f5ff33] rounded-full text-[#00f5ff] text-sm font-mono tracking-widest"
        >
          &gt; Hello, World!
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
          {personal.name.split(" ")[0]}{" "}
          <span className="neon-text">{personal.name.split(" ")[1]}</span>
        </h1>

        <div className="text-xl md:text-2xl font-mono text-slate-400 mb-3 h-10 flex items-center justify-center gap-2">
          <span className="neon-text-purple">&lt;</span>
          <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-slate-200"
          />
          <span className="neon-text-purple">/&gt;</span>
        </div>

        <p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {personal.bio}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 bg-[#00f5ff] text-black font-semibold rounded-lg hover:bg-[#00d4e0] transition-all hover:shadow-[0_0_25px_#00f5ff66] font-mono text-sm"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-[#00f5ff44] text-[#00f5ff] font-semibold rounded-lg hover:border-[#00f5ff] hover:shadow-[0_0_20px_#00f5ff33] transition-all font-mono text-sm flex items-center gap-2"
          >
            <Download size={15} /> Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="flex gap-5 justify-center">
          {[
            { icon: GithubIcon, href: personal.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 border border-[#00f5ff22] rounded-lg text-slate-400 hover:text-[#00f5ff] hover:border-[#00f5ff66] transition-all hover:shadow-[0_0_15px_#00f5ff22]"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
