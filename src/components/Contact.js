// src/components/Contact.js
"use client";

import { useState } from 'react';

export default function Contact({ t }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 模拟提交
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });

            // 3秒后重置消息
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.contact.title}</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">{t.contact.description}</p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {submitted ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            感谢您的留言！我们将尽快回复您。
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                {t.contact.form.name}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                {t.contact.form.email}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                {t.contact.form.message}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary resize-y"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-primary text-white font-semibold uppercase tracking-wide px-8 py-3 rounded-full hover:bg-opacity-90 transition transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isSubmitting ? '发送中...' : t.contact.form.button}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

