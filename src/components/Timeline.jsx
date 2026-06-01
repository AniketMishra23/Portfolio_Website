import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { timeline } from "../data";
import { SectionHeader } from "./About";

const icons = { education: GraduationCap, work: Briefcase, project: Code2 };
const colors = { education: "#00f5ff", work: "#bf00ff", project: "#39ff14" };

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 bg-[#0d0d18]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="04" title="Experience & Education" />

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff44] via-[#bf00ff44] to-transparent" />

          <div className="space-y-8 pl-16">
            {timeline.map((item, i) => {
              const Icon = icons[item.type] ?? Code2;
              const color = colors[item.type] ?? "#00f5ff";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-10 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-[#0a0a0f]"
                    style={{ borderColor: color, boxShadow: `0 0 12px ${color}66` }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>

                  <div className="card-bg rounded-xl p-5 border border-[#00f5ff11] hover:border-[#00f5ff33] transition-colors">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span
                          className="inline-block px-2 py-0.5 rounded text-xs font-mono mb-2"
                          style={{ color, backgroundColor: color + "18", border: `1px solid ${color}33` }}
                        >
                          {item.type === "education" ? "Education" : "Work"}
                        </span>
                        <h3 className="text-white font-semibold text-base mb-0.5">{item.title}</h3>
                        <p className="text-slate-500 text-xs font-mono">{item.org}</p>
                      </div>
                      <span className="font-mono text-xs text-slate-500 shrink-0 mt-1">{item.year}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-3">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
