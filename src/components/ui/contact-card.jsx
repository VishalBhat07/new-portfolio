import React from "react";
import { cn } from "@/lib/utils";

export function ContactCard({
  title = "Contact With Us",
  description = "If you have any questions or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        "bg-card border border-border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-4 px-4 py-8 md:p-8">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base lg:text-lg">
            {description}
          </p>
          <div className="flex flex-col gap-1">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "bg-muted/40 flex h-full w-full items-center border-t border-border p-5 md:col-span-1 md:border-t-0 md:border-l",
          formSectionClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({ icon: Icon, label, value, className, ...props }) {
  return (
    <div className={cn("flex items-center gap-3 py-2.5", className)} {...props}>
      <div className="bg-muted/40 rounded-lg p-2.5 shrink-0">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="font-medium text-foreground text-sm">{label}</p>
        <p className="text-muted-foreground text-xs truncate">{value}</p>
      </div>
    </div>
  );
}
