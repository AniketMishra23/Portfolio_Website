import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "../data";

const links = ["About", "Projects", "Skills", "Experience", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0fee] backdrop-blur-md border-b border-[#00f5ff22]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-lg neon-text tracking-widest font-mono shrink-0">
          {personal.name.split(" ")[0]}
          <span className="text-white">.dev</span>
        </span>

        {/* Desktop links — hidden below lg */}
        <ul className="hidden lg:flex gap-5 xl:gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-slate-400 hover:text-[#00f5ff] transition-colors text-xs xl:text-sm tracking-wide uppercase font-mono"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile/tablet toggle */}
        <button
          className="lg:hidden text-slate-400 hover:text-[#00f5ff] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0f0f1a] border-t border-[#00f5ff22] px-4 pb-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-slate-400 hover:text-[#00f5ff] font-mono text-sm uppercase tracking-wide border-b border-[#00f5ff11] last:border-0"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
