import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, BriefcaseBusiness,
  Code2, FileBadge2, Github, GraduationCap, Mail, MessageCircle,
  Send, Sparkles, Trophy,
} from 'lucide-react'
import { skillGroups } from '../data/skills.js'
import { projects } from '../data/projects.js'
import { certificates } from '../data/certificates.js'
import SocialLinks, { contactEmail } from './SocialLinks.jsx'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export function Hero({ role, onResume, resumeNotice }) {
  const [displayedRole, setDisplayedRole] = useState(role)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedRole(role)
      return undefined
    }

    setDisplayedRole('')
    let characterIndex = 0
    const typingTimer = window.setInterval(() => {
      characterIndex += 1
      setDisplayedRole(role.slice(0, characterIndex))
      if (characterIndex >= role.length) window.clearInterval(typingTimer)
    }, 55)

    return () => window.clearInterval(typingTimer)
  }, [role])

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <p className="availability"><span /> OPEN TO LEARNING & OPPORTUNITIES</p>
          <p className="hero-intro">Hello, I'm</p>
          <h1>Kuruva Venkata <span>Divya</span></h1>
          <p className="hero-title">BTech CSE Student <i /> Aspiring Data Analyst</p>
          <p className="hero-summary">I’m a Computer Science and Engineering student interested in Data Analytics, technology, and continuous learning. I enjoy building practical projects and developing my technical and problem-solving skills.</p>
          <div className="role-line"><span className="role-mark" /> Currently exploring <strong className="typing-text">{displayedRole}</strong></div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my projects <ArrowRight size={17} /></a>
            <button className="button button-secondary" type="button" onClick={onResume}><span>Download resume</span> <ArrowDown size={16} /></button>
            <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
          </div>
          <p className="resume-note" aria-live="polite" id="resume-status">{resumeNotice}</p>
          <div className="hero-meta"><span><GraduationCap size={17} /> 3rd year · CSE</span><span><Sparkles size={16} /> Curious by nature</span></div>
        </div>
        <div className="hero-visual reveal" aria-label="Profile photo placeholder">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="photo-placeholder">
            <div className="photo-placeholder-mark">KV<span>.</span></div>
            <div className="photo-placeholder-rule" />
            <strong>Add your professional photo here</strong>
            <span>Replace this area with your own image</span>
          </div>
          <div className="visual-label"><span className="visual-label-icon"><ChartMark /></span><span><b>Learning in progress</b><small>Data · Technology · People</small></span></div>
          <span className="visual-coordinate">13.6288° N &nbsp; 79.4192° E</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /> SCROLL TO EXPLORE</a>
    </section>
  )
}

function ChartMark() {
  return <span className="chart-mark" aria-hidden="true"><i /><i /><i /></span>
}

export function About() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="container about-layout">
        <div><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious mind.<br /><span className="accent-text">Steady progress.</span></>} /></div>
        <div className="about-copy reveal">
          <p className="about-lead">I am Kuruva Venkata Divya, a third-year BTech Computer Science and Engineering student at Annamacharya Institute of Technology and Science, Tirupati.</p>
          <p>I am interested in Data Analytics and enjoy learning technologies that help solve practical problems. I bring good communication skills, a willingness to keep learning, and a growing foundation in technical and problem-solving skills.</p>
          <p>Right now, I’m focused on building understanding through coursework and hands-on projects, one useful skill at a time.</p>
          <div className="about-values"><span><span>01</span> Learn continuously</span><span><span>02</span> Build by doing</span><span><span>03</span> Think through problems</span></div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section-shell section-tinted" id="skills">
      <div className="container">
        <SectionHeading eyebrow="WHAT I'M LEARNING" title={<>A growing toolkit, <span className="accent-text">built with care.</span></>} description="An honest snapshot of the tools and technologies I’m learning and practicing." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card glass-card reveal" key={group.title} style={{ '--stagger': `${index * 80}ms` }}>
              <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span className="skill-icon"><Code2 size={18} /></span></div>
              <h3>{group.title}</h3>
              <div className="skill-list">{group.skills.map((skill) => <div className="skill-row" key={skill.name}><span>{skill.name}</span><span className={`level level-${skill.level.toLowerCase()}`}>{skill.level}</span></div>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="section-shell" id="projects">
      <div className="container">
        <SectionHeading eyebrow="LEARNING BY BUILDING" title={<>Small steps. <span className="accent-text">Real practice.</span></>} description="Projects are a way to turn new concepts into something interactive and useful." />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card glass-card reveal" key={project.name}>
              <div className="project-art"><div className="project-art-grid" /><div className="project-art-icon"><MessageCircle size={28} strokeWidth={1.5} /></div><span className="project-number">PROJECT / 0{index + 1}</span><span className="project-art-caption">An interactive learning experiment</span></div>
              <div className="project-content"><div className="project-title-row"><div><span className="card-kicker">PERSONAL PROJECT</span><h3>{project.name}</h3></div><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
                <p>{project.description}</p>
                <div className="technology-list" aria-label="Technologies">{project.technologies.length ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <span className="technology-placeholder">{project.technologyNote}</span>}</div>
                <div className="project-actions"><DestinationButton label="GitHub" url={project.githubUrl} icon="github" /><DestinationButton label="Live demo" url={project.demoUrl} icon="external" /></div>
              </div>
            </article>
          ))}
          <div className="project-note reveal"><span className="note-mark">+</span><p>More projects will find their place here as I keep learning and building.</p></div>
        </div>
      </div>
    </section>
  )
}

function DestinationButton({ label, url, icon }) {
  const Icon = icon === 'github' ? Github : ArrowUpRight
  if (url) return <a className="destination-button" href={url} target="_blank" rel="noreferrer"><Icon size={15} /> {label}</a>
  return <span className="destination-button destination-disabled" title={`${label} link coming soon`}><Icon size={15} /> {label} <small>coming soon</small></span>
}

export function Education() {
  return (
    <section className="section-shell section-tinted" id="education">
      <div className="container education-layout">
        <div><SectionHeading eyebrow="THE FOUNDATION" title={<>Learning that <span className="accent-text">moves forward.</span></>} description="Building a broad foundation in computing while finding my path in data analytics." /></div>
        <article className="education-card glass-card reveal">
          <div className="education-timeline"><span className="timeline-dot" /><span className="timeline-line" /></div>
          <div className="education-main"><div className="education-topline"><span className="education-status"><i /> CURRENTLY STUDYING</span><span className="education-dates">2023 — 2028</span></div>
            <h3>Bachelor of Technology</h3><p className="education-branch">Computer Science and Engineering</p><p className="education-school">Annamacharya Institute of Technology and Science <span>Tirupati, Andhra Pradesh</span></p>
            <div className="education-facts"><div><span>YEAR</span><strong>3rd Year</strong></div><div><span>EXPECTED GRADUATION</span><strong>2028</strong></div><div><span>CGPA</span><strong>7.9</strong></div></div>
          </div>
          <span className="education-watermark"><BookOpen size={84} strokeWidth={0.75} /></span>
        </article>
      </div>
    </section>
  )
}

export function Certificates() {
  return (
    <section className="section-shell" id="certificates">
      <div className="container">
        <SectionHeading eyebrow="PRACTICAL EXPOSURE" title={<>Learning beyond <span className="accent-text">the classroom.</span></>} description="Job simulations completed through Forage, with practical focus areas to explore further." />
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article className="certificate-card glass-card reveal" key={certificate.name}>
              <div className="certificate-top"><span className="certificate-emblem"><FileBadge2 size={22} /></span><span className="certificate-serial">COMPLETION / 0{index + 1}</span></div>
              <p className="card-kicker">{certificate.organization}</p><h3>{certificate.name}</h3><p className="certificate-type">Certificate of Completion <span /> {certificate.completion}</p>
              <div className="certificate-divider" /><p className="certificate-label">PRACTICAL AREAS</p>
              <div className="certificate-tags">{certificate.practicalAreas.map((area) => <span key={area}>{area}</span>)}</div>
              <DestinationButton label="View certificate" url={certificate.certificateUrl} icon="external" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Achievements() {
  return (
    <section className="section-shell achievement-section" id="achievements">
      <div className="container">
        <SectionHeading eyebrow="OUTSIDE THE CLASSROOM" title={<>Discipline in <span className="accent-text">every pursuit.</span></>} />
        <article className="achievement-card reveal"><div className="achievement-icon"><Trophy size={30} strokeWidth={1.5} /></div><div className="achievement-copy"><span className="card-kicker">PERSONAL ACHIEVEMENT</span><h3>National-Level Taekwondo Player</h3><p>Black Belt</p></div><div className="achievement-seal"><Award size={24} /><span>DISCIPLINE<br />& FOCUS</span></div></article>
      </div>
    </section>
  )
}

export function Contact() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('Your message has not been sent. Connect an email service or backend to enable delivery.')
  }

  return (
    <section className="section-shell contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy reveal"><SectionHeading eyebrow="START A CONVERSATION" title={<>Let's connect<span className="accent-text">.</span></>} description="Interested in learning, collaborating on a project, or sharing an opportunity? I’d be glad to hear from you." />
          <div className="contact-details">
            <div><Mail size={17} /><span><small>EMAIL</small><b><a href={`mailto:${contactEmail}`}>{contactEmail}</a></b></span></div>
            <div><BriefcaseBusiness size={17} /><span><small>LINKEDIN</small><a href="https://www.linkedin.com/in/venkata-divya-kuruva-61b4b4353/" target="_blank" rel="noreferrer"><b>Venkata Divya Kuruva</b></a></span></div>
            <div><Github size={17} /><span><small>GITHUB</small><a href="https://github.com/divyakuruva" target="_blank" rel="noreferrer"><b>divyakuruva</b></a></span></div>
          </div>
          <SocialLinks compact />
        </div>
        <form className="contact-form glass-card reveal" onSubmit={handleSubmit}>
          <div className="form-heading"><h3>Send a message</h3><span><span /> FORM PREVIEW</span></div>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="How should I address you?" required />
          <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="4" placeholder="What would you like to talk about?" required />
          <button className="button button-primary form-submit" type="submit">Prepare message <Send size={16} /></button>
          <p className="form-note" aria-live="polite">{notice || 'This form is a preview. No message is sent until an email service is connected.'}</p>
        </form>
      </div>
    </section>
  )
}

