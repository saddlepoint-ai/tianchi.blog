import { data } from '../data/site';

export type Lang = 'en' | 'zh';

export function getLangFromUrl(url: URL | string): Lang {
  const path = typeof url === 'string' ? url : url.pathname;
  const [, lang] = path.split('/');
  if (lang === 'zh') return 'zh';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof data['en']['ui']) {
    return data[lang].ui[key] || data.en.ui[key];
  }
}
