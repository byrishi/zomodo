"use server";

import { z } from "zod";

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

const newsletterSchema = z.object({
  email: z.string().email().max(100),
});

export async function submitNewsletter(email: string) {
  try {
    const data = newsletterSchema.parse({ email });
    const payload = {
      ...data,
      source: "newsletter",
      timestamp: new Date().toISOString()
    };

    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } else {
      console.log("No WEBHOOK_URL set. Mock submission for newsletter:", payload);
    }
    
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || "Validation failed" };
  }
}

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email().max(100),
  phone: z.string().max(20).optional().or(z.literal("")),
  interest: z.string(),
  message: z.string().min(1, "Message is required").max(2000),
  honeypot: z.string().max(0, "Bot detected").optional()
});

export async function submitContact(formData: any) {
  try {
    if (formData.honeypot) {
      return { success: false, error: "Bot detected" };
    }

    const data = contactSchema.parse(formData);
    
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      interest: data.interest,
      message: data.message,
      source: "contact",
      timestamp: new Date().toISOString()
    };

    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } else {
      console.log("No WEBHOOK_URL set. Mock submission for contact:", payload);
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: "Invalid form data" };
  }
}
