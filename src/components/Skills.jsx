import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import { skills, certifications } from "../data";
import { SectionHeader } from "./About";

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[#1a1a2e] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.07, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

const techCloud = [
  "TensorFlow", "Keras", "PyTorch", "YOLOv5", "LangChain",
  "HuggingFace", "BART", "NLTK", "TF-IDF", "OpenAI API",
  "NumPy", "Pandas", "SciPy", "Plotly", "Matplotlib",
  "Flask", "React.js", "Git", "GitHub Actions", "Jupyter",
  "C++", "TypeScript", "Apify", "Vercel", "Ngrok",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="03" title="Skills" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-12">
          {skills.map((s, i) => (
            <SkillBar key={s.name} skill={s} index={i} />
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 card-bg rounded-xl border border-[#00f5ff11]"
        >
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Full tech stack</p>
          <div className="flex flex-wrap gap-2">
            {techCloud.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-mono bg-[#1a1a2e] border border-[#00f5ff22] text-slate-400 rounded-md hover:border-[#00f5ff66] hover:text-[#00f5ff] transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 card-bg rounded-xl border border-[#bf00ff22]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={15} className="text-[#bf00ff]" />
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Certifications</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {certifications.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span className="text-[#bf00ff] text-xs">▸</span>
                {c}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
