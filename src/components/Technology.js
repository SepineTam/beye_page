// src/components/Technology.js
import { FaEye, FaBrain, FaObjectGroup, FaCommentDots } from 'react-icons/fa';

export default function Technology({ t }) {
    const techIcons = [
        <FaEye key="eye" />,
        <FaBrain key="brain" />,
        <FaObjectGroup key="object" />,
        <FaCommentDots key="comment" />
    ];

    return (
        <section id="technology" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.technology.title}</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">{t.technology.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.technology.items.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-light rounded-lg p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="text-3xl text-primary mb-4 flex justify-center">
                                {techIcons[index]}
                            </div>
                            <h3 className="text-lg font-bold text-dark mb-2">{tech.title}</h3>
                            <p className="text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

