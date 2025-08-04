"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "gmail_service_c4azqji";
const TEMPLATE_ID = "template_jweyacd";
const PUBLIC_KEY = "RqP2WISNPPTW4MbS2";

const ContactForm: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ name: false, email: false, message: false });
    const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            name: form.name.trim() === "",
            email: !/^\S+@\S+\.\S+$/.test(form.email),
            message: form.message.trim() === "",
        };
        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some(Boolean);
        if (hasErrors) return;

        setStatus("loading");

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
            .then(() => {
                setStatus("sent");
                setForm({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                setStatus("error");
            });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div>
                <label htmlFor="name">Name*</label>
                <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full border rounded px-4 py-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    required
                />
                {errors.name && <p className="text-red-500 text-sm">Please enter your name.</p>}
            </div>

            <div>
                <label htmlFor="email">Email*</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full border rounded px-4 py-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    required
                />
                {errors.email && <p className="text-red-500 text-sm">Please enter a valid email.</p>}
            </div>

            <div>
                <label htmlFor="message">Message*</label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full border rounded px-4 py-2 resize-y ${errors.message ? "border-red-500" : "border-gray-300"}`}
                    required
                />
                {errors.message && <p className="text-red-500 text-sm">Please enter a message.</p>}
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && <p className="text-green-600">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-600">Something went wrong. Please try again.</p>}
        </form>
    );
};

export default ContactForm;