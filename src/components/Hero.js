// src/components/Hero.js
export default function Hero({ t }) {
    return (
        <section className="bg-gradient-to-r from-primary to-accent text-white pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
                    {t.hero.title} <span className="text-2xl md:text-3xl">{t.hero.subtitle}</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg mb-8 animate-fadeInUp animate-delay-200">
                    {t.hero.description}
                </p>
                <div className="animate-fadeInUp animate-delay-400">
                    <a
                        href="#features"
                        className="inline-block bg-white text-primary font-semibold uppercase tracking-wide px-6 py-3 rounded-full mx-2 mb-4 md:mb-0 hover:bg-opacity-90 transition transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        {t.hero.buttons.discover}
                    </a>
                    <a
                        href="https://github.com/sepinetam/beye"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wide px-6 py-3 rounded-full mx-2 hover:bg-white hover:text-primary transition transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        {t.hero.buttons.github}
                    </a>
                </div>
            </div>
        </section>
    );
}