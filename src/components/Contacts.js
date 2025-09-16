// src/components/Contact.js
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaDiscord, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      id: 1,
      name: "Email",
      icon: <FaEnvelope size={24} />,
      link: "mailto:hawibryan04@gmail.com",
      color: "hover:bg-red-500",
    },
    {
      id: 2,
      name: "Discord",
      icon: <FaDiscord size={24} />,
      link: "https://discordapp.com/users/hawi0445",
      color: "hover:bg-indigo-500",
    },
    {
      id: 3,
      name: "GitHub",
      icon: <FaGithub size={24} />,
      link: "https://github.com/HAWIBRYAN",
      color: "hover:bg-gray-700",
    },
  ];

  return (
    <div className="max-w-xl mx-auto space-y-8">
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-[#1c1c1c]/70 backdrop-blur-md border border-[#333] rounded-xl p-6 shadow-lg"
      >
        <div>
          <label className="block text-sm font-medium text-[#00d1ff] mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#111] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d1ff]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#00d1ff] mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#111] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d1ff]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#00d1ff] mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#111] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d1ff]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-bold text-white transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Quick Contact Buttons */}
      <div className="flex justify-center space-x-6">
        {contacts.map((contact) => (
          <motion.a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className={`p-4 rounded-full bg-[#1c1c1c] border border-[#333] text-[#00d1ff] transition-all duration-300 ${contact.color}`}
          >
            {contact.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

