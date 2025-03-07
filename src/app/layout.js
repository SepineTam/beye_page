// src/app/layout.js
import './globals.css';

export const metadata = {
    title: 'Beye Vision | 比翼视界',
    description: '比翼视界 - 为视障人士提供AI驱动的视觉辅助技术',
};

export default function RootLayout({ children }) {
    return (
        <html>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}

