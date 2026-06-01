import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, Loader } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "../data";
import { SectionHeader } from "./About";

// ─── Formspree setup ────────────────────────────────────────────────────────
// 1. Go to https://formspree.io → sign up with mishraaniket557@gmail.com
// 2. Create a new form → copy the form ID (looks like "xpzgkqbd")
// 3. Create a file called .env.local in the project root and add:
//    VITE_FORMSPREE_ID=your_form_id_here
// Messages will then arrive directly in your Gmail inbox.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fallback to mailto if Formspree isn't configured yet
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const socials = [
    { icon: GithubIcon,  label: "GitHub",   href: personal.github },
    { icon: LinkedinIcon,label: "LinkedIn", href: personal.linkedin },
    { icon: Mail,        label: personal.email, href: `mailto:${personal.email}` },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="06" title="Contact" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 mb-2 text-base font-medium">Let's build something together.</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Whether you have a project idea, want to collaborate, or just want to say hi —
              my inbox is always open.
            </p>

            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-[#00f5ff] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg border border-[#00f5ff22] group-hover:border-[#00f5ff66] flex items-center justify-center transition-colors shrink-0">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm font-mono truncate">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#0f0f1a] border border-[#00f5ff22] rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00f5ff66] transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#0f0f1a] border border-[#00f5ff22] rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00f5ff66] transition-colors"
            />
            <textarea
              placeholder="Your message..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#0f0f1a] border border-[#00f5ff22] rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00f5ff66] transition-colors resize-none"
            />

            {status === "error" && (
              <p className="text-red-400 text-xs font-mono">Something went wrong. Please try again or email directly.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full py-3 bg-[#00f5ff] text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#00d4e0] hover:shadow-[0_0_25px_#00f5ff55] transition-all font-mono text-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" && <><Loader size={15} className="animate-spin" /> Sending...</>}
              {status === "sent"    && <><CheckCircle size={16} /> Message Sent!</>}
              {(status === "idle" || status === "error") && <><Send size={15} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
