import { motion } from "framer-motion";
import { MapPin, BookOpen, Gamepad2, Code2 } from "lucide-react";
import { personal } from "../data";

const traits = [
  { icon: Code2,    label: "Building LLM-powered apps" },
  { icon: BookOpen, label: "Avid reader" },
  { icon: Gamepad2, label: "Gaming enthusiast" },
  { icon: MapPin,   label: "Glen Waverley, VIC, Australia" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mt-10 sm:mt-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-gradient-to-br from-[#00f5ff22] to-[#bf00ff22] border border-[#00f5ff44] flex items-center justify-center shadow-[0_0_40px_#00f5ff22]">
                <span className="text-6xl sm:text-7xl font-bold neon-text font-mono">AM</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-44 h-44 sm:w-52 sm:h-52 rounded-2xl border border-[#bf00ff44] -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              I'm a <span className="text-[#00f5ff]">Data Science postgraduate at Deakin University</span>,
              combining a strong foundation in AI/ML with hands-on experience in{" "}
              <span className="text-[#bf00ff]">LLM applications, NLP, and full-stack development</span>.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
              I hold a Bachelor of Engineering in <span className="text-slate-300">Electronic &
              Telecommunication Engineering</span> (GPA 7.79) from Thakur College of Engineering and Technology,
              Mumbai.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-7">
              I've built end-to-end ML pipelines, LLM-powered chatbots (LegalBrain.ai internship),
              automated news intelligence systems, and computer vision models. Passionate about applying
              transformative AI to real-world problems.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
              {traits.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 card-bg rounded-lg border border-[#00f5ff11]"
                >
                  <Icon size={15} className="text-[#00f5ff] shrink-0" />
                  <span className="text-slate-300 text-xs sm:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ label, title }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="font-mono text-[#00f5ff] text-xs sm:text-sm opacity-50 shrink-0">{label} /</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[#00f5ff33] to-transparent min-w-0" />
    </div>
  );
}
