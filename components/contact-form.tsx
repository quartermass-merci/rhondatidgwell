"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const EMAIL = "rhonda.tidgwell@tdsb.on.ca";

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const role = String(data.get("role") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Message from rhondatidgwell.com${name ? ` — ${name}` : ""}`;
    const body = [
      `From: ${name}`,
      `Email: ${email}`,
      role ? `Context: ${role}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("max-w-xl space-y-5", className)}>
      <Field name="name" label="Your name" required />
      <Field name="email" label="Your email" type="email" required />
      <Field name="role" label="Context (optional)" />
      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-sm border border-rule bg-paper px-3 py-2 text-ink focus:border-accent focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full sm:w-auto items-center justify-center rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-paper hover:bg-accent/90 transition-colors min-h-[44px]"
      >
        Send message
      </button>
      {status === "success" && (
        <p className="text-sm text-muted">
          Thanks — message received.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-accent">
          Something went wrong. Email me directly at{" "}
          <a href={`mailto:${EMAIL}`} className="underline">
            {EMAIL}
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink" htmlFor={name}>
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-rule bg-paper px-3 py-2 text-ink focus:border-accent focus:outline-none"
      />
    </div>
  );
}
