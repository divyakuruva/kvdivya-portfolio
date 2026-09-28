import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Certificates', 'certificates'],
  ['Achievements', 'achievements'],
  ['Contact', 'contact'],
]

export default function Navbar({ theme, onToggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="K.V.Divya home">
          K.V.<span>Divya</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a className={activeSection === 'home' ? 'active' : ''} href="#home" onClick={closeMenu}>Home</a>
          {links.map(([label, id]) => (
            <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
