// src/components/Meta.js
export default function Meta({ lang }) {
  const baseUrl = 'https://beye-vision.vercel.app';
  const title = lang === 'zh' ? '比翼视界 | 为视障人士提供AI视觉辅助技术' : 'Beye Vision | AI-Powered Visual Assistance for the Visually Impaired';
  const description = lang === 'zh' 
    ? '比翼视界通过创新的AI技术赋能视障人士，提供场景识别、语音交互、导航辅助和无障碍设计等功能。' 
    : 'Beye Vision empowers the visually impaired through innovative AI technology, offering scene recognition, voice interaction, navigation assistance, and accessibility features.';
  
  return (
    <>
      {/* 基本元标签 */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={lang === 'zh' ? '视障辅助,AI视觉,无障碍技术,场景识别,语音交互' : 'visual assistance,AI vision,accessibility technology,scene recognition,voice interaction'} />
      <meta name="author" content="Beye Vision Team" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}/${lang}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${baseUrl}/${lang}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      
      {/* 规范链接 */}
      <link rel="canonical" href={`${baseUrl}/${lang}`} />
      <link rel="alternate" href={`${baseUrl}/zh`} hrefLang="zh" />
      <link rel="alternate" href={`${baseUrl}/en`} hrefLang="en" />
      <link rel="alternate" href={`${baseUrl}/zh`} hrefLang="x-default" />
    </>
  );
}