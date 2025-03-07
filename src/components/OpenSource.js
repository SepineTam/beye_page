// src/components/OpenSource.js
import { FaGithub } from 'react-icons/fa';

export default function OpenSource({ t }) {
    return (
        <section id="open-source" className="py-20 bg-gradient-to-r from-primary to-accent text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.openSource.title}</h2>
                <p className="max-w-2xl mx-auto mb-4">{t.openSource.paragraph1}</p>
                <p className="max-w-2xl mx-auto mb-8">{t.openSource.paragraph2}</p>
                <a
                    href="https://github.com/sepinetam/beye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-dark font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <FaGithub className="mr-2 text-xl" /> {t.openSource.button}
                </a>
            </div>
        </section>
    );
}
