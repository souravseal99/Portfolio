"use server";

import { Resend } from "resend";
import { SITE_CONFIG } from "@/config";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactActionResponse {
  success: boolean;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<ContactActionResponse> {
  const { name, email, message } = data;

  if (!name || !name.trim()) {
    return { success: false, message: "Please provide your name." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, message: "Please provide a valid email address." };
  }

  if (!message || !message.trim()) {
    return { success: false, message: "Please write a message before sending." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set in environment variables.");
    return {
      success: false,
      message:
        "Email delivery service is pending configuration (RESEND_API_KEY missing). Please use the 1-click email copy button to reach me directly.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const fromAddress = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const toAddress = process.env.CONTACT_NOTIFICATION_EMAIL || SITE_CONFIG.email;

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject: `[Portfolio Inquiry] from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">New Message from Portfolio</h2>
          <div style="margin-bottom: 16px; padding: 12px; background-color: #f8fafc; border-radius: 6px;">
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #0284c7;">${email}</a></p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #334155; font-size: 15px; margin-bottom: 8px;">Message:</h3>
            <p style="white-space: pre-wrap; color: #1e293b; line-height: 1.6; font-size: 14px; background-color: #ffffff; padding: 16px; border: 1px solid #e2e8f0; border-radius: 6px;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #64748b; margin-top: 24px; border-top: 1px solid #f1f5f9; padding-top: 12px;">
            Sent from ${SITE_CONFIG.name} (${SITE_CONFIG.handle}) Portfolio. Click reply to respond directly to ${email}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: error.message || "Failed to dispatch message via Resend.",
      };
    }

    return {
      success: true,
      message: "Message dispatched successfully! I will get back to you shortly.",
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "An unexpected error occurred while sending your message.";
    console.error("Failed to send contact email:", err);
    return {
      success: false,
      message: errorMsg,
    };
  }
}
