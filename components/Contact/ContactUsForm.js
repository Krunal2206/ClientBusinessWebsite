"use client";

import { fadeInLeft } from "@/utils/animation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());
    console.log("Form Data:", body);

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        form.reset();
        setStatus("Message sent successfully!");
      } else {
        const error = await res.json();
        setStatus(error.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInLeft}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between"
    >
      <h3 className="text-2xl font-semibold text-black mb-6">
        Send us a Message
      </h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition duration-200"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition duration-200"
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition duration-200"
            placeholder="+91-9876543210"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="4"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition duration-200"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-6 py-4 text-white font-semibold rounded-lg shadow-md transform transition-all duration-200 ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      
      {status && (
        <p
          className={`text-center mt-4 ${
            status.includes("success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </motion.div>
  );
};

export default ContactUsForm;
