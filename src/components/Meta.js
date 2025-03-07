// src/components/Meta.js
import { Metadata } from 'next';

export function generateMetadata({ lang }) {
  const baseUrl = 'https://beye-vision.vercel.app';
  const title = lang === 'zh' ? '比翼视界 | 为视障人士提供AI视觉辅助技术' : 'Beye Vision | AI-Powered Visual Assistance for the Visually Impaired';
  const description = lang === 'zh' 
    ? '比翼视界通过创新的AI技术赋能视障人士，提供场景识别、语音交互、导航辅助和无障碍设计等功能。' 
    : 'Beye Vision empowers the visually impaired through innovative AI technology, offering scene recognition, voice interaction, navigation assistance, and accessibility features.';

  return {
    title,
    description,
    keywords: lang === 'zh' ? '视障辅助,AI视觉,无障碍技术,场景识别,语音交互' : 'visual assistance,AI vision,accessibility technology,scene recognition,voice interaction',
    authors: [{ name: 'Beye Vision Team' }],
    openGraph: {
      type: 'website',
      url: `${baseUrl}/${lang}`,
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'zh': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/zh`,
      },
    },
  };
}

export default function Meta() {
  return null;
}