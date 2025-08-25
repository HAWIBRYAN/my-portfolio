import React from "react";
import { ChromeGrid } from "./components/ChromeGrid"; 
import { Dock, DockItem, DockIcon } from "./components/Dock";
import { Home, User, Folder, Mail } from "lucide-react";

function App() {
  return (
    <div className="relative h-screen w-screen text-white">
      {/* Chrome Grid background */}
      <ChromeGrid />

      {/* Sections */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl font-bold">My name is Hawi</h1>
        <p className="mt-4 typewriter">Welcome to my portfolio.</p>
      </section>

      <section
        id="about"
        className="relative z-10 min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">About Me</h2>
      </section>

      <section
        id="projects"
        className="relative z-10 min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">Projects</h2>
      </section>

      <section
        id="contact"
        className="relative z-10 min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">Contact</h2>
      </section>

      {/* Dock at the bottom */}
      <div className="fixed bottom-6 w-full flex justify-center z-20 pointer-events-auto">
        <Dock>
          <DockItem>
            <DockIcon>
              <a href="#home">
                <Home className="w-10 h-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </DockIcon>
          </DockItem>

          <DockItem>
            <DockIcon>
              <a href="#about">
                <User className="w-10 h-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </DockIcon>
          </DockItem>

          <DockItem>
            <DockIcon>
              <a href="#projects">
                <Folder className="w-10 h-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </DockIcon>
          </DockItem>

          <DockItem>
            <DockIcon>
              <a href="#contact">
                <Mail className="w-10 h-10 text-white hover:scale-125 transition-transform duration-300 cursor-pointer" />
              </a>
            </DockIcon>
          </DockItem>
        </Dock>
      </div>
    </div>
  );
}

export default App;
