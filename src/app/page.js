// src/app/page.js
import { redirect } from 'next/navigation';
import { defaultLanguage } from '@/i18n';

export default function Home() {
  // 重定向到默认语言路径
  redirect(`/${defaultLanguage}`);
}