// src/components/Header.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaEye, FaBars, FaGithub } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ t, currentLang }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link href={`/${currentLang}`} className="flex items-center text-xl font-bold text-dark">
                            <FaEye className="text-primary text-2xl mr-2" />
                            Beye <span className="text-primary ml-1">Vision</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <ul className="flex space-x-8">
                            <li>
                                <a href="#features" className="text-dark font-medium hover:text-primary transition">
                                    {t.nav.features}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-dark font-medium hover:text-primary transition">
                                    {t.nav.about}
                                </a>
                            </li>
                            <li>
                                <a href="#technology" className="text-dark font-medium hover:text-primary transition">
                                    {t.nav.technology}
                                </a>
                            </li>
                            <li>
                                <a href="#open-source" className="text-dark font-medium hover:text-primary transition">
                                    {t.nav.openSource}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-dark font-medium hover:text-primary transition">
                                    {t.nav.contact}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/sepinetam/beye"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-dark font-medium hover:text-primary transition"
                                >
                                    <FaGithub className="mr-1" /> GitHub
                                </a>
                            </li>
                            <li>
                                <LanguageSwitcher currentLang={currentLang} />
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="flex items-center md:hidden space-x-4">
                        <a
                            href="https://github.com/sepinetam/beye"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark hover:text-primary transition"
                        >
                            <FaGithub className="text-xl" />
                        </a>
                        <LanguageSwitcher currentLang={currentLang} />
                        <button
                            className="text-dark text-xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FaBars />
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white py-4 px-4">
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#features"
                                    className="block text-dark font-medium hover:text-primary transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t.nav.features}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block text-dark font-medium hover:text-primary transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t.nav.about}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#technology"
                                    className="block text-dark font-medium hover:text-primary transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t.nav.technology}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#open-source"
                                    className="block text-dark font-medium hover:text-primary transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t.nav.openSource}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block text-dark font-medium hover:text-primary transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t.nav.contact}
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

