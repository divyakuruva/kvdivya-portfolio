import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import {
  About, Achievements, Certificates, Contact, Education, Hero, Projects, Skills,
} from './components/Sections.jsx'

const roles = ['Data Analytics Enthusiast', 'BTech CSE Student', 'Aspiring Data Analyst']

function getSavedTheme() {
  try {
    return localStorage.getItem('kvdivya-theme') || 'dark'
  } catch {
    return 'dark'
  }
}

export default function App() {
  const [theme, setTheme] = useState(getSavedTheme)
  const [roleIndex, setRoleIndex] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [resumeNotice, setResumeNotice] = useState('')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('kvdivya-theme', theme)
    } catch {
      // The theme remains active for this visit when storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 3200)
    return () => window.clearInterval(roleTimer)
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-35% 0px -55% 0px' })
    document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section))

    const updateScrollState = () => setShowBackToTop(window.scrollY > 560)
    window.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()
    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', updateScrollState)
    }
  }, [])

  async function handleResume() {
    setResumeNotice('')
    try {
      const response = await fetch('/resume.pdf', { method: 'HEAD' })
      const contentType = response.headers.get('content-type') || ''
      if (response.ok && contentType.toLowerCase().includes('application/pdf')) {
        window.location.assign('/resume.pdf')
      } else {
        setResumeNotice('Resume not added yet. Place your PDF at public/resume.pdf to enable this download.')
      }
    } catch {
      setResumeNotice('Resume not added yet. Place your PDF at public/resume.pdf to enable this download.')
    }
  }

  return (
    <div className="app-shell" data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} activeSection={activeSection} />
      <main>
        <Hero role={roles[roleIndex]} onResume={handleResume} resumeNotice={resumeNotice} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </div>
  )
}
