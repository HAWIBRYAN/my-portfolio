import React, { useEffect } from 'react'
import { ContainerScroll } from './components/ContainerScroll'
import ChromeGrid from './components/ChromeGrid'


export default function App() {
  useEffect(() => {
    // Inject Botpress scripts dynamically
    const injectScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script")
        script.src = src
        script.defer = true
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }

    async function loadBotpress() {
      try {
        // Load in order
        await injectScript("https://cdn.botpress.cloud/webchat/v3.2/inject.js")
        await injectScript("https://files.bpcontent.cloud/2025/09/02/05/20250902054200-KML4YW93.js")
      } catch (err) {
        console.error("Failed to load Botpress scripts:", err)
      }
    }

    loadBotpress()
  }, [])

  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden">
      {/* Background grid */}
      <ChromeGrid />

      {/* Intro / Hero */}
      <ContainerScroll
        titleComponent={<h2 className="text-4xl font-bold">👋 Hi, I’m Hawi</h2>}
      >
        <div className="text-center space-y-4">
          <p className="text-lg">
            A passionate <span className="font-semibold">Full-Stack Developer</span> 
            focused on building interactive web apps, mobile solutions, and creative 
            problem-solving tools.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
          >
            📄 Download Resume
          </a>
        </div>
      </ContainerScroll>

      {/* About Me */}
      <ContainerScroll
        titleComponent={<h2 className="text-4xl font-bold">About Me</h2>}
      >
        <div className="space-y-2 text-left">
          <p><span className="font-bold">Name:</span> Hawi Bryan</p>
          <p><span className="font-bold">Education:</span> BSc. Information Technology, JKUAT</p>
          <p><span className="font-bold">Certifications:</span> Cybersecurity Certificate</p>
          <p><span className="font-bold">Skills:</span> React, Flutter, Django, Node.js, MySQL, APIs</p>
          <p className="italic text-gray-300">“Tech excites me because it bridges ideas with real impact.”</p>
        </div>
      </ContainerScroll>

      {/* Projects */}
      <ContainerScroll
        titleComponent={<h2 className="text-4xl font-bold">🚀 Projects</h2>}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* My Portfolio */}
          <div className="p-4 border border-gray-600 rounded-lg bg-[#1c1c1c] hover:scale-105 transition-transform">
            <h3 className="font-bold text-xl">My Portfolio</h3>
            <p className="text-sm mt-2">
              An interactive personal portfolio built with React, Three.js, and Tailwind.  
              Features a futuristic ChromeGrid background and smooth scroll containers.
            </p>
            <div className="mt-3 space-x-3">
              <a
                href="https://github.com/HAWIBRYAN/my-portfolio"
                className="text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <button
                className="text-blue-400 underline"
                onClick={() => alert("Live demo coming soon! 🚀")}
              >
                Live Demo
              </button>
            </div>
          </div>

          {/* Taifa Mobile Bulk SMS */}
          <div className="p-4 border border-gray-600 rounded-lg bg-[#1c1c1c] hover:scale-105 transition-transform">
            <h3 className="font-bold text-xl">Taifa Mobile Bulk SMS</h3>
            <p className="text-sm mt-2">
              A bulk SMS platform for sending marketing and transactional messages.  
              Built with modern web technologies to support scalable messaging campaigns.
            </p>
            <div className="mt-3 space-x-3">
              <a
                href="https://github.com/HAWIBRYAN/TaifaMobileBulkSMS"
                className="text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Laravel ERP */}
          <div className="p-4 border border-gray-600 rounded-lg bg-[#1c1c1c] hover:scale-105 transition-transform">
            <h3 className="font-bold text-xl">Laravel ERP</h3>
            <p className="text-sm mt-2">
              A lightweight ERP system built with Laravel, designed for small businesses.  
              Features inventory management, accounting, and user roles.
            </p>
            <div className="mt-3 space-x-3">
              <a
                href="https://github.com/HAWIBRYAN/LaravelERP"
                className="text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Simple Task Manager */}
          <div className="p-4 border border-gray-600 rounded-lg bg-[#1c1c1c] hover:scale-105 transition-transform">
            <h3 className="font-bold text-xl">Simple Task Manager</h3>
            <p className="text-sm mt-2">
              A simple yet effective task manager for tracking daily to-dos and projects.  
              Focuses on simplicity and productivity.
            </p>
            <div className="mt-3 space-x-3">
              <a
                href="https://github.com/HAWIBRYAN/SimpleTaskManager"
                className="text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Experience */}
      <ContainerScroll
        titleComponent={<h2 className="text-4xl font-bold">Experience</h2>}
      >
        <div className="space-y-4 text-left">
          <p>
            <span className="font-bold">Internships:</span> Centrino Technologies intern – Designed and built databases in SQL, ensuring efficient data storage, retrieval,
            and integrity.
          </p>
          <p>
            <span className="font-bold">Leadership:</span> Led team projects at JKUAT, 
            applying Agile methods to deliver functional prototypes on tight timelines.
          </p>
        </div>
      </ContainerScroll>

      {/* Contact */}
      <ContainerScroll
        titleComponent={<h2 className="text-4xl font-bold">Contact Me</h2>}
      >
        <div className="text-center space-y-3">
          <p>Email: <a href="mailto:hawibryan04@gmail.com" className="text-blue-400">hawibryan04@gmail.com</a></p>
          <p>
            GitHub: <a href="https://github.com/HAWIBRYAN" className="text-blue-400">github.com/HAWIBRYAN</a>
          </p>
        </div>
      </ContainerScroll>
    </div>
  )
}

