// src/app/[lang]/layout.js
import '@/app/globals.css';
import { translations, languages, defaultLanguage } from '@/i18n';

export async function generateStaticParams() {
    return Object.keys(languages).map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
    const { lang } = params;

    return {
        title: lang === 'zh' ? '比翼视界 | Beye Vision' : 'Beye Vision | 比翼视界',
        description: lang === 'zh'
            ? '比翼视界 - 为视障人士提供AI驱动的视觉辅助技术'
            : 'Beye Vision - AI-powered visual assistance for the visually impaired',
    };
}

export default function LangLayout({ children, params }) {
    const { lang } = params;
    const isValidLang = Object.keys(languages).includes(lang);
    const currentLang = isValidLang ? lang : defaultLanguage;

    return (
        <html lang={currentLang}>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="min-h-screen bg-light">
            <main className="flex flex-col min-h-screen">
                {children}
            </main>
        </body>
        </html>
    );
}
