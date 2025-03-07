// src/components/Footer.js
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer({ t }) {
    return (
        <footer className="bg-dark text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Beye Vision</h3>
                        <p className="text-gray-300 mb-4">{t.footer.description}</p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition duration-300"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition duration-300"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/sepinetam/beye"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition duration-300"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">{t.footer.links}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#features" className="text-gray-300 hover:text-white transition">
                                    {t.nav.features}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-white transition">
                                    {t.nav.about}
                                </a>
                            </li>
                            <li>
                                <a href="#technology" className="text-gray-300 hover:text-white transition">
                                    {t.nav.technology}
                                </a>
                            </li>
                            <li>
                                <a href="#open-source" className="text-gray-300 hover:text-white transition">
                                    {t.nav.openSource}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-white transition">
                                    {t.nav.contact}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:info@beyevision.com"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    info@beyevision.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/sepinetam/beye"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    GitHub Repository
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
                    {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
