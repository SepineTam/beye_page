// src/app/[lang]/page.js
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Technology from '@/components/Technology';
import OpenSource from '@/components/OpenSource';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Meta from '@/components/Meta';
import { translations } from '@/i18n';

export const generateMetadata = ({ params }) => {
    const { lang } = params;
    return {
        title: lang === 'zh' ? '比翼视界 | 为视障人士提供AI视觉辅助技术' : 'Beye Vision | AI-Powered Visual Assistance for the Visually Impaired'
    };
};

export default function Home({ params }) {
    const { lang } = params;
    const t = translations[lang] || translations.en;

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header t={t} currentLang={lang} />
                <Hero t={t} />
                <Features t={t} />
                <About t={t} />
                <Technology t={t} />
                <OpenSource t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </div>
        </>
    );
}