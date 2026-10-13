'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { href: '/#work', label: 'Work' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" aria-label="Fantine Mpacko Priso, home" onClick={() => setMenuOpen(false)}>
          Fantine Mpacko Priso<span className="wordmark-dot">.</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className={`menu-mark ${menuOpen ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="site-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer shell">
      <span>Fantine Mpacko-Priso</span>
      <span className="mono">Research · Engineering · People</span>
      <Link className="text-link" href="/">Back to top <span aria-hidden="true">↑</span></Link>
    </footer>
  )
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar />{children}<Footer /></>
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>
}

export function PageIntro({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <section className="page-intro shell">
      <Eyebrow>{kicker}</Eyebrow>
      <h1 className="display-title">{title}</h1>
      <p className="intro-copy">{description}</p>
    </section>
  )
}
