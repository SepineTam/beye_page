// src/components/Features.js
import { FaCamera, FaComments, FaMapMarkedAlt, FaUniversalAccess } from 'react-icons/fa';

export default function Features({ t }) {
    const featureIcons = [
        <FaCamera key="camera" />,
        <FaComments key="comments" />,
        <FaMapMarkedAlt key="map" />,
        <FaUniversalAccess key="access" />
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.features.title}</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">{t.features.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.features.items.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-light rounded-lg p-8 text-center h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="text-4xl text-primary mb-6 flex justify-center">
                                {featureIcons[index]}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

