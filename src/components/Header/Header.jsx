export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-card border-b border-tokyo-border">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-tokyo-cyan rounded-full animate-pulse"></div>
        <span className="terminal-text font-bold text-sm tracking-tighter uppercase">
          PORTFOLIO_OS V2.0
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-8 terminal-text text-xs uppercase tracking-widest">
        <a className="hover:text-tokyo-cyan transition-colors" href="#about">
          About
        </a>
        <a className="hover:text-tokyo-cyan transition-colors" href="#skills">
          Systems
        </a>
        <a className="hover:text-tokyo-cyan transition-colors" href="#projects">
          Projects
        </a>
        <a
          className="px-4 py-2 bg-tokyo-purple text-tokyo-bg font-bold rounded hover:bg-tokyo-cyan transition-all"
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
