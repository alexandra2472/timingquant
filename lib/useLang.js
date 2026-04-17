import { useState, useEffect } from 'react';

/**
 * Hook for language switching with localStorage persistence.
 * @param {string} key - localStorage key for language preference
 */
export function useLang(key = 'dev-lang') {
  const [lang, setLang] = useState('zh');

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved === 'en' || saved === 'zh') {
      setLang(saved);
    }
  }, [key]);

  return lang;
}
