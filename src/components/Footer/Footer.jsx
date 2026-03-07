import { socials } from "../../data/socials";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-tokyo-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tokyo-text-dim hover:text-tokyo-cyan transition-colors terminal-text text-xs uppercase tracking-widest"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="terminal-text text-[10px] text-tokyo-text-dim tracking-widest uppercase">
          System Secure | Encrypted Connection Established | © 2026 VISHAL_BHAT
        </p>
      </div>
    </footer>
  );
}
