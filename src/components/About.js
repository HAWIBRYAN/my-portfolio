"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = ["React", "Three.js", "WebGL", "Node.js"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card glow-border rounded-2xl p-8 max-w-4xl mx-auto text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">

      </h1>
      <p className="text-lg md:text-xl leading-relaxed mb-8">
        I'm a visionary developer with a passion for creating immersive digital
        experiences. My expertise spans across cutting-edge technologies in web
        development, 3D graphics, and interactive design.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-[#1c1c1c] rounded-lg p-3 text-center border border-[#333] hover:border-[#00d1ff] transition-colors"
          >
            <span className="text-[#00d1ff] font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
