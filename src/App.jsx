import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"></div>
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="relative h-full w-full bg-neutral-900">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
        </div>
        
      </div>

  )
}

export default App
