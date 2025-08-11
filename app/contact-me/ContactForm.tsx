"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "gmail_service_c4azqji";
const TEMPLATE_ID = "template_jweyacd";
const PUBLIC_KEY = "RqP2WISNPPTW4MbS2";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const validate = (f = form) => ({
    name: f.name.trim() === "",
    email: !/^\S+@\S+\.\S+$/.test(f.email),
    message: f.message.trim() === "",
  });

  const isFormValid = () => {
    const v = validate();
    return !v.name && !v.email && !v.message;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...form, [e.target.name]: e.target.value } as typeof form;
    setForm(next);
    // live-validate the field being edited
    const v = validate(next);
    setErrors((prev) => ({ ...prev, [e.target.name]: (v as any)[e.target.name] }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as keyof typeof form;
    setTouched((prev) => ({ ...prev, [field]: true }));
    const v = validate();
    setErrors((prev) => ({ ...prev, [field]: (v as any)[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // mark all as touched and validate
    const v = validate();
    setTouched({ name: true, email: true, message: true });
    setErrors(v);

    const hasErrors = Object.values(v).some(Boolean);
    if (hasErrors) return;

    setStatus("loading");

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTouched({ name: false, email: false, message: false });
        setErrors({ name: false, email: false, message: false });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("error");
      });
  };

  const inputBase =
    "w-full border rounded px-4 py-2 focus:outline-none transition-shadow";

  const ringOk = "focus:ring-2 focus:ring-blue-500";
  const ringError = "ring-2 ring-red-500 border-red-500";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      {/* Name */}
      <div className="relative">
        <label htmlFor="name">Name*</label>
        {touched.name && errors.name && (
          <p className="absolute -top-5 left-0 text-red-500 text-xs">Please enter your name.</p>
        )}
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} ${touched.name && errors.name ? ringError : ringOk}`}
          required
        />
      </div>

      {/* Email */}
      <div className="relative">
        <label htmlFor="email">Email*</label>
        {touched.email && errors.email && (
          <p className="absolute -top-5 left-0 text-red-500 text-xs">Please enter a valid email.</p>
        )}
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} ${touched.email && errors.email ? ringError : ringOk}`}
          required
        />
      </div>

      {/* Message */}
      <div className="relative">
        <label htmlFor="message">Message*</label>
        {touched.message && errors.message && (
          <p className="absolute -top-5 left-0 text-red-500 text-xs">Please enter a message.</p>
        )}
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={5}
          className={`${inputBase} resize-y ${touched.message && errors.message ? ringError : ringOk}`}
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || !isFormValid()}
        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && <p className="text-green-600">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default ContactForm;