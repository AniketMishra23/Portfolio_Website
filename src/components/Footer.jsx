import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-[#00f5ff11] py-8 px-6 text-center">
      <p className="text-slate-600 text-sm font-mono">
        Built by{" "}
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-[#00f5ff] hover:text-[#00d4e0] transition-colors">
          {personal.name}
        </a>{" "}
        &mdash; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
