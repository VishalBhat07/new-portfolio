import { MailIcon, PhoneIcon, MapPinIcon, Github, Linkedin, Code2, Send } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { socials } from "../../data/socials";
import { toast } from "react-toastify";

function handleFormSubmit(e) {
  e.preventDefault();
  toast.success("Message sent! I'll get back to you soon.");
}

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
          Get in{" "}
          <span className="text-tokyo-purple">Touch</span>
        </h2>
        <p className="terminal-text text-tokyo-text-dim text-xs tracking-widest uppercase">
          Let's build something great together
        </p>
      </div>

      {/* ContactCard */}
      <div className="mx-auto max-w-5xl px-4">
        <ContactCard
          title="Get in touch"
          description="Feel free to reach out for collaborations, opportunities, or just a friendly hello. I do my best to respond within 1 business day."
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "vishalkbhat.cs23@rvce.edu.in",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "+91 7975806665",
            },
            {
              icon: MapPinIcon,
              label: "Location",
              value: "Bengaluru, India",
              className: "col-span-2",
            },
          ]}
        >
          <form onSubmit={handleFormSubmit} className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Name</Label>
              <Input
                type="text"
                placeholder="Your name"
                required
                className="bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Email</Label>
              <Input
                type="email"
                placeholder="your@email.com"
                required
                className="bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Phone</Label>
              <Input
                type="tel"
                placeholder="+91 00000 00000"
                className="bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Message</Label>
              <Textarea
                placeholder="What's on your mind?"
                required
                className="bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2"
            >
              <Send size={15} />
              Send Message
            </Button>
          </form>
        </ContactCard>
      </div>
    </section>
  );
}
