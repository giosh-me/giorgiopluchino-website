import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Chi Sono', path: '/chi-sono' },
        { name: 'Metodo', path: '/metodo' },
        { name: 'Ventures', path: '/ventures' },
        { name: 'Contatti', path: '/contatti' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Giorgio Pluchino
                </Link>

                {/* Desktop Nav */}
                <nav className="navbar-desktop">
                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Button variant="primary" className="navbar-cta" onClick={() => window.location.href = '/contatti'}>
                        Prenota consulenza
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                <div className={`navbar-mobile ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="navbar-mobile-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? 'nav-link-mobile active' : 'nav-link-mobile'}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <Button variant="primary" className="mobile-cta" onClick={() => {
                                setMobileMenuOpen(false);
                                window.location.href = '/contatti';
                            }}>
                                Prenota consulenza
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
