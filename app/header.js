'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="nav-brand" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Hushtag Logo" className="nav-logo-img" />
          <span>Hushtag</span>
        </Link>

        <button 
          className="nav-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
          <span style={{ opacity: isMenuOpen ? '0' : '1' }}></span>
          <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'nav-links-active' : ''}`}>
          <li><Link href="/#features" onClick={closeMenu}>Features</Link></li>
          <li><Link href="/#workflow" onClick={closeMenu}>Workflow</Link></li>
          <li><Link href="/privacy" onClick={closeMenu}>Privacy Policy</Link></li>
          <li><Link href="/terms" onClick={closeMenu}>Terms of Service</Link></li>
          <li>
            <Link href="#download" className="nav-cta" onClick={closeMenu}>
              Download App
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
