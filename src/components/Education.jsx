import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { timeline } from "../data";
import { SectionHeader } from "./About";

const eduItems = timeline.filter((t) => t.type === "education");

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="05" title="Education" />

        <div className="mt-10 sm:mt-12 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff44] via-[#00f5ff22] to-transparent" />

          <div className="space-y-6 sm:space-y-8 pl-11 sm:pl-16">
            {eduItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-7 sm:-left-10 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#00f5ff] flex items-center justify-center bg-[#0a0a0f]"
                  style={{ boxShadow: "0 0 10px #00f5ff66" }}
                >
                  <GraduationCap size={11} className="text-[#00f5ff] sm:hidden" />
                  <GraduationCap size={14} className="text-[#00f5ff] hidden sm:block" />
                </div>

                <div className="card-bg rounded-xl p-4 sm:p-5 border border-[#00f5ff11] hover:border-[#00f5ff33] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-3 mb-2 sm:mb-3">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-mono mb-1.5 text-[#00f5ff] bg-[#00f5ff18] border border-[#00f5ff33]">
                        Education
                      </span>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{item.title}</h3>
                      <p className="text-slate-500 text-xs font-mono mt-0.5">{item.org}</p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 shrink-0">{item.year}</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
