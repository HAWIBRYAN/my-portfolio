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
    <div className="h-screen w-screen text-white overflow-x-hidden">
      <ChromeGrid />

      {/* Sections */}
      <ContainerScroll titleComponent={<h2 className="text-4xl font-bold">About Me</h2>}>
        <About />
      </ContainerScroll>

      <ContainerScroll titleComponent={<h2 className="text-4xl font-bold">Projects</h2>}>
        <p className="mt-4 text-lg">Here are some of my projects...</p>
      </ContainerScroll>

      <ContainerScroll titleComponent={<h2 className="text-4xl font-bold">Contact</h2>}>
        <p className="mt-4 text-lg">You can contact me at: hawibryan04@gmail.com</p>
      </ContainerScroll>
    </div>
  )
}
