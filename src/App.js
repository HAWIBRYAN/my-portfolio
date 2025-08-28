'use client'
import React from 'react'
import { ChromeGrid } from './components/ChromeGrid'
import { ContainerScroll } from './components/ContainerScroll'

export default function App() {
    return (
        <div className="h-screen w-screen text-white overflow-x-hidden">
            <ChromeGrid />

            <ContainerScroll titleComponent={<h2 className="text-4xl font-bold">About Me</h2>}>
                <p className="mt-4 text-lg">My name is Hawi...</p>
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

