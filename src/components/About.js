// src/components/About.js
import Image from 'next/image';

export default function About({ t }) {
    return (
        <section id="about" className="py-20 bg-light">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">{t.about.title}</h2>
                        <p className="mb-4 text-gray-700">{t.about.paragraph1}</p>
                        <p className="mb-4 text-gray-700">{t.about.paragraph2}</p>
                        <p className="mb-6 text-gray-700">{t.about.paragraph3}</p>
                        <a
                            href="#contact"
                            className="inline-block bg-primary text-white font-semibold uppercase tracking-wide px-6 py-3 rounded-full hover:bg-opacity-90 transition transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            {t.about.button}
                        </a>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-xl">
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                <span className="text-sm">视觉辅助技术示意图</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

