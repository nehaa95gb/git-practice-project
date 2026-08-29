import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  return <header className="navbar">
    <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark" aria-hidden="true" />GitQuest</a>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? '✕' : '☰'}</button>
    <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
      <a href="#learn" onClick={closeMenu}>Learn</a><a href="#playground" onClick={closeMenu}>Playground</a><a href="#commands" onClick={closeMenu}>Commands</a><a href="#git-vs-github" onClick={closeMenu}>Git vs GitHub</a>
      <a className="nav-github" href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
    </nav>
  </header>
}

export default Navbar
