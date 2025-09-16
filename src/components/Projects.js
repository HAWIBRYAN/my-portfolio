"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      description:
        "An interactive portfolio with ChromeGrid background + smooth scroll containers.",
      tags: ["React", "Three.js", "Tailwind"],
      link: "https://github.com/HAWIBRYAN/my-portfolio",
    },
    {
      id: 2,
      title: "Taifa Mobile Bulk SMS",
      description:
        "A bulk SMS platform for marketing and transactional messaging.",
      tags: ["Node.js", "Express", "MySQL"],
      link: "https://github.com/HAWIBRYAN/TaifaMobileBulkSMS",
    },
    {
      id: 3,
      title: "Laravel ERP",
      description:
        "A lightweight ERP for small businesses with inventory + accounting.",
      tags: ["Laravel", "PHP", "MySQL"],
      link: "https://github.com/HAWIBRYAN/LaravelERP",
    },
    {
      id: 4,
      title: "Simple Task Manager",
      description:
        "A minimal task manager for productivity and daily planning.",
      tags: ["React", "SQLite"],
      link: "https://github.com/HAWIBRYAN/SimpleTaskManager",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.03 }}
          className="p-4 md:p-6 border border-gray-600 rounded-lg bg-[#1c1c1c] transition-transform"
        >
          <h3 className="font-bold text-lg md:text-xl text-[#00d1ff] mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-[#111] border border-gray-700 rounded-full text-[#00d1ff]"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="text-blue-400 hover:underline text-sm md:text-base"
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
        </motion.div>
      ))}
    </div>
  );
}
