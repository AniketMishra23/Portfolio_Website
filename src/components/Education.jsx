import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { timeline } from "../data";
import { SectionHeader } from "./About";

const eduItems = timeline.filter((t) => t.type === "education");

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="05" title="Education" />

        <div className="mt-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff44] via-[#00f5ff22] to-transparent" />

          <div className="space-y-8 pl-16">
            {eduItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-10 top-1 w-8 h-8 rounded-full border-2 border-[#00f5ff] flex items-center justify-center bg-[#0a0a0f]"
                  style={{ boxShadow: "0 0 12px #00f5ff66" }}
                >
                  <GraduationCap size={14} className="text-[#00f5ff]" />
                </div>

                <div className="card-bg rounded-xl p-5 border border-[#00f5ff11] hover:border-[#00f5ff33] transition-colors">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-mono mb-2 text-[#00f5ff] bg-[#00f5ff18] border border-[#00f5ff33]">
                        Education
                      </span>
                      <h3 className="text-white font-semibold text-base">{item.title}</h3>
                      <p className="text-slate-500 text-xs font-mono mt-0.5">{item.org}</p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 shrink-0 mt-1">{item.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
