import { Send, Mail, MapPin, Phone } from "lucide-react";
import { socials } from "../../data/socials";
import { toast } from "react-toastify";

function handleFormSubmit(e) {
  e.preventDefault();
  toast.success("Message sent");
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="glass-card p-12 rounded-3xl relative overflow-hidden"
    >
      <div className="scanline"></div>
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4 tracking-tighter uppercase italic">
          Transmit Signal
        </h2>
        <p className="terminal-text text-tokyo-text-dim text-xs tracking-widest uppercase">
          Direct line to lead engineer
        </p>
      </div>

      {/* Contact Info Bar */}
      <div className="max-w-3xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 justify-center p-3 bg-tokyo-bg/50 border border-tokyo-border rounded-lg">
          <Mail size={16} className="text-tokyo-cyan" />
          <span className="terminal-text text-xs text-tokyo-text-dim">
            vishalkbhat.cs23@rvce.edu.in
          </span>
        </div>
        <div className="flex items-center gap-3 justify-center p-3 bg-tokyo-bg/50 border border-tokyo-border rounded-lg">
          <Phone size={16} className="text-tokyo-cyan" />
          <span className="terminal-text text-xs text-tokyo-text-dim">
            +91 7975806665
          </span>
        </div>
        <div className="flex items-center gap-3 justify-center p-3 bg-tokyo-bg/50 border border-tokyo-border rounded-lg">
          <MapPin size={16} className="text-tokyo-cyan" />
          <span className="terminal-text text-xs text-tokyo-text-dim">
            Bengaluru, India
          </span>
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-3xl mx-auto mb-10 flex flex-wrap gap-3 justify-center">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-tokyo-bg border border-tokyo-border rounded-lg terminal-text text-xs text-tokyo-text-dim hover:border-tokyo-purple hover:text-tokyo-purple transition-colors"
          >
            {social.name}
          </a>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="terminal-text text-[10px] text-tokyo-cyan uppercase ml-2">
              Source ID
            </label>
            <input
              type="text"
              placeholder="NAME / ALIAS"
              required
              className="w-full bg-tokyo-bg border border-tokyo-border rounded-lg p-4 focus:ring-1 focus:ring-tokyo-cyan focus:border-tokyo-cyan text-white placeholder-tokyo-text-dim/50 terminal-text text-sm outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="terminal-text text-[10px] text-tokyo-cyan uppercase ml-2">
              Comms Protocol
            </label>
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              required
              className="w-full bg-tokyo-bg border border-tokyo-border rounded-lg p-4 focus:ring-1 focus:ring-tokyo-cyan focus:border-tokyo-cyan text-white placeholder-tokyo-text-dim/50 terminal-text text-sm outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="terminal-text text-[10px] text-tokyo-cyan uppercase ml-2">
            Encrypted Payload
          </label>
          <textarea
            placeholder="YOUR MESSAGE..."
            rows="4"
            required
            className="w-full bg-tokyo-bg border border-tokyo-border rounded-lg p-4 focus:ring-1 focus:ring-tokyo-cyan focus:border-tokyo-cyan text-white placeholder-tokyo-text-dim/50 terminal-text text-sm outline-none resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-tokyo-purple text-tokyo-bg font-black terminal-text uppercase tracking-widest rounded-lg hover:bg-tokyo-cyan transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          <Send size={16} /> Initiate Transfer
        </button>
      </form>
    </section>
  );
}
