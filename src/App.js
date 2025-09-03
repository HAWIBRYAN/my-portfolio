'use client'

import React, { useEffect } from 'react'
import About from "./components/About";
import { ChromeGrid } from './components/ChromeGrid'
import { ContainerScroll } from './components/ContainerScroll'

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
      {/* Background grid (always mounted) */}
      <ChromeGrid />

      {/* Foreground content */}
      <main className="relative z-10">
        <ContainerScroll
          titleComponent={<h1 className="text-4xl font-bold text-white">Welcome</h1>}
        >
          <p className="text-lg text-gray-200">
            About
          </p>
        </ContainerScroll>

        <ContainerScroll
          titleComponent={<h1 className="text-4xl font-bold text-white">Projects</h1>}
        >
          <p className="text-lg text-gray-200">
            Here are some of my projects...
          </p>
        </ContainerScroll>

        <ContainerScroll
          titleComponent={<h1 className="text-4xl font-bold text-white">Contacts</h1>}
        >
          <p className="text-lg text-gray-200">
            You can contact me at: hawibryan04@gmail.com
          </p>
        </ContainerScroll>
      </main>
    </div>
  )
}
