import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Globe,
  Twitter,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";
import { socials } from "../data/socials";

function HoverFooter() {
  // Footer links — personalised for this portfolio
  const footerLinks = [
    {
      title: "Navigate",
      links: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Profiles",
      links: [
        { label: "GitHub", href: "https://github.com/VishalBhat07", external: true },
        { label: "LinkedIn", href: "https://linkedin.com/in/vishalbhat07", external: true },
        { label: "LeetCode", href: "https://leetcode.com/VishalBhat07", external: true },
        {
          label: "CodeForces",
          href: "https://codeforces.com/profile/VishalBhat07",
          external: true,
          pulse: true,
        },
      ],
    },
  ];

  // Contact info
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#818cf8]" />,
      text: "vishalkbhat.cs23@rvce.edu.in",
      href: "mailto:vishalkbhat.cs23@rvce.edu.in",
    },
    {
      icon: <MapPin size={18} className="text-[#818cf8]" />,
      text: "Bengaluru, India",
    },
    {
      icon: <Code2 size={18} className="text-[#818cf8]" />,
      text: "RVCE — CSE 2027",
    },
  ];

  // Social links
  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/VishalBhat07",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vishalbhat07",
    },
    {
      icon: <Globe size={20} />,
      label: "LeetCode",
      href: "https://leetcode.com/VishalBhat07",
    },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#818cf8] text-3xl font-extrabold">⟨/⟩</span>
              <span className="text-white text-2xl font-bold terminal-text">
                VISHAL_BHAT
              </span>
            </div>
            <p className="text-sm leading-relaxed text-tokyo-text-dim">
              Creative Developer & CS student at RVCE. Building full-stack experiences
              with MERN, AI, and everything in between.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6 terminal-text uppercase tracking-widest text-sm">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-tokyo-text-dim hover:text-[#818cf8] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-1 -right-4 w-2 h-2 rounded-full bg-[#818cf8] animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 terminal-text uppercase tracking-widest text-sm">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-tokyo-text-dim hover:text-[#818cf8] transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-tokyo-text-dim text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-tokyo-border my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#818cf8] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-tokyo-text-dim terminal-text text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} VISHAL_BHAT — All rights reserved.
          </p>
        </div>
      </div>

      {/* Large decorative hover-text */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="VISHAL" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
