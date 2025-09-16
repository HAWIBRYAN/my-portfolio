import React, { useEffect } from "react";
import { ContainerScroll } from "./components/ContainerScroll";
import ChromeGrid from "./components/ChromeGrid";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

export default function App() {
  useEffect(() => {
    const injectScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    async function loadBotpress() {
      try {
        await injectScript("https://cdn.botpress.cloud/webchat/v3.2/inject.js");
        await injectScript(
          "https://files.bpcontent.cloud/2025/09/02/05/20250902054200-KML4YW93.js"
        );
      } catch (err) {
        console.error("Failed to load Botpress scripts:", err);
      }
    }

    loadBotpress();
  }, []);

  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden">
      {/* Background grid */}
      <ChromeGrid />

      {/* Hero */}
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            👋 Hi, I’m Hawi
          </h2>
        }
      >
        <div className="text-center space-y-4 px-4">
          <p className="text-base md:text-lg">
            A passionate{" "}
            <span className="font-semibold">Full-Stack Developer</span> focused
            on building interactive web apps, mobile solutions, and creative
            problem-solving tools.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md text-sm md:text-base"
          >
            📄 Download Resume
          </a>
        </div>
      </ContainerScroll>

      {/* About */}
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            About Me
          </h2>
        }
      >
        <About />
      </ContainerScroll>

      {/* Projects */}
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            🚀 Projects
          </h2>
        }
      >
        <Projects />
      </ContainerScroll>

      {/* Experience */}
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Experience
          </h2>
        }
      >
        <div className="space-y-4 text-left px-4 max-w-2xl mx-auto text-sm md:text-base">
          <p>
            <span className="font-bold">Internships:</span> Centrino
            Technologies intern – Designed and built databases in SQL, ensuring
            efficient data storage, retrieval, and integrity.
          </p>
          <p>
            <span className="font-bold">Leadership:</span> Led team projects at
            JKUAT, applying Agile methods to deliver functional prototypes on
            tight timelines.
          </p>
        </div>
      </ContainerScroll>

      {/* Contacts */}
      <ContainerScroll
        titleComponent={
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Contact Me
          </h2>
        }
      >
        <Contacts />
      </ContainerScroll>
    </div>
  );
}
