"use client";
import React from "react";

const About = () => {
  return (
    <div className="h-full w-full bg-zinc-900 text-gray-100 font-sans rounded-xl overflow-y-auto p-6 md:p-10">
      {/* Header */}
      <div className="text-center border-b border-gray-700 pb-4 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Hawi Bryan</h1>
        <p className="text-sm md:text-base text-gray-400">
          Software Developer • UI/UX Enthusiast • Problem Solver
        </p>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-300 mb-2">Summary</h2>
        <p className="text-sm leading-relaxed">
          Passionate full-stack developer with experience building modern web
          applications. Skilled in React, Next.js, Node.js, and database
          management, with an eye for intuitive design and smooth user
          experience.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-300 mb-2">Experience</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Frontend Developer – Freelance</p>
            <p className="text-xs text-gray-400">2023 – Present</p>
            <p className="text-sm">
              Designed and developed interactive UI components for client
              projects using React, Tailwind, and Framer Motion.
            </p>
          </div>
          <div>
            <p className="font-medium">IT Intern – Centrino Technologies</p>
            <p className="text-xs text-gray-400">2022 – 2023</p>
            <p className="text-sm">
              Assisted in building internal tools, optimized database queries,
              and supported deployment pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-300 mb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>TailwindCSS</li>
          <li>Framer Motion</li>
          <li>MySQL / PostgreSQL</li>
          <li>REST / APIs</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-lg font-semibold text-gray-300 mb-2">Education</h2>
        <p className="font-medium">BSc. in Information Technology</p>
        <p className="text-xs text-gray-400">
          Jomo Kenyatta University of Agriculture and Technology (JKUAT)
        </p>
        <p className="text-sm">2019 – 2025 (expected)</p>
      </section>
    </div>
  );
};

export default About;
