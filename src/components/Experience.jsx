import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { timeline } from "../data";
import { SectionHeader } from "./About";

const workItems = timeline.filter((t) => t.type === "work");

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0d0d18]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="04" title="Experience" />

        <div className="mt-10 sm:mt-12 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#bf00ff44] via-[#bf00ff22] to-transparent" />

          <div className="space-y-6 sm:space-y-8 pl-11 sm:pl-16">
            {workItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-7 sm:-left-10 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#bf00ff] flex items-center justify-center bg-[#0d0d18]"
                  style={{ boxShadow: "0 0 10px #bf00ff66" }}
                >
                  <Briefcase size={11} className="text-[#bf00ff] sm:hidden" />
                  <Briefcase size={14} className="text-[#bf00ff] hidden sm:block" />
                </div>

                <div className="card-bg rounded-xl p-4 sm:p-5 border border-[#bf00ff11] hover:border-[#bf00ff33] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-3 mb-2 sm:mb-3">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-mono mb-1.5 text-[#bf00ff] bg-[#bf00ff18] border border-[#bf00ff33]">
                        Work
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
