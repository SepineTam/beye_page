// src/components/LanguageSwitcher.js
"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaLanguage, FaChevronDown } from 'react-icons/fa';
import { languages } from '@/i18n';

export default function LanguageSwitcher({ currentLang }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex items-center text-dark hover:text-primary transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaLanguage className="text-xl mr-1" />
                <span className="hidden sm:inline">{languages[currentLang]}</span>
                <FaChevronDown className="ml-1 text-xs" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-10">
                    <ul className="py-1">
                        {Object.entries(languages).map(([code, name]) => (
                            <li key={code}>
                                <Link
                                    href={`/${code}`}
                                    className={`block px-4 py-2 hover:bg-gray-100 ${
                                        currentLang === code ? 'font-bold text-primary' : 'text-dark'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

