'use client'

import { useEffect, useState } from 'react'

export default function HomePage() {
  const [greeting, setGreeting] = useState('Hello')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  return (
    <div className="space-y-12 animate-fade">
      <h1 className="text-6xl font-bold font-sans">{greeting}</h1>
      <span className="inline-block bg-gray-800 text-gray-200 text-xs font-medium px-3 py-1 rounded-full border border-gray-700">
        Currently designing internal tools at <a href="https://resvu.io" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white">Resvu</a>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400 text-sm">
        <p>
          Use keyboard shortcut 1 — 9 to navigate between pages. Try pressing 2, 3, 4.
        </p>
        <p>
          My name is Ben Craib — I lead product design at Resvu, and I love working on thoughtful, high-impact software.
        </p>
        <p>
          I enjoy connecting with curious people and learning from new perspectives. Feel free to reach out.
        </p>
        <p>
          Want to know how this site was built? I’ll eventually open source it (or you can just ask me).
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/projects" className="block p-6 border border-gray-800 hover:border-gray-600 rounded-lg transition duration-300 transform hover:scale-[1.015] bg-gray-900">
            <h3 className="text-white font-semibold text-lg mb-1">📁 Projects</h3>
            <p className="text-sm text-gray-400">Work I've done and shipped</p>
          </a>
          <a href="/writing" className="block p-6 border border-gray-800 hover:border-gray-600 rounded-lg transition duration-300 transform hover:scale-[1.015] bg-gray-900">
            <h3 className="text-white font-semibold text-lg mb-1">📝 Writing</h3>
            <p className="text-sm text-gray-400">Thoughts, stories, and process</p>
          </a>
          <a href="/boutique" className="block p-6 border border-gray-800 hover:border-gray-600 rounded-lg transition duration-300 transform hover:scale-[1.015] bg-gray-900">
            <h3 className="text-white font-semibold text-lg mb-1">🧪 Boutique</h3>
            <p className="text-sm text-gray-400">Aesthetic experiments & side projects</p>
          </a>
          <a href="/about" className="block p-6 border border-gray-800 hover:border-gray-600 rounded-lg transition duration-300 transform hover:scale-[1.015] bg-gray-900">
            <h3 className="text-white font-semibold text-lg mb-1">👤 About</h3>
            <p className="text-sm text-gray-400">A bit more about me</p>
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-6 border border-gray-800 rounded-lg bg-gray-900 transition hover:border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold text-lg">✨ Launched my portfolio</h4>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-900 text-blue-300 border border-blue-800">
                Project
              </span>
            </div>
            <p className="text-sm text-gray-400">First version of my design portfolio is now live using Next.js and Tailwind.</p>
            <p className="text-xs text-gray-500 mt-2">June 13, 2025</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg bg-gray-900 transition hover:border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold text-lg">🎨 Refined light/dark theme</h4>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal-900 text-teal-300 border border-teal-800">
                Goods
              </span>
            </div>
            <p className="text-sm text-gray-400">Improved the aesthetic and interaction of theme switching. Simpler, cleaner.</p>
            <p className="text-xs text-gray-500 mt-2">June 12, 2025</p>
          </div>
        </div>
      </section>
    </div>
  )
}