import { MailIcon, PhoneIcon, MapPinIcon, Send } from "lucide-react";
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

      {/* ContactCard */}
      <div className="mx-auto max-w-5xl px-4">
        <ContactCard
          title="Let's work together"
          description="Feel free to reach out for collaborations, opportunities, or just a friendly hello. I'll get back to you within a day."
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "vishalkbhat.cs23@rvce.edu.in",
              className: "col-span-full",
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
