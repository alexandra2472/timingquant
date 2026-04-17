import { useState, useEffect } from 'react';

const LANG_CHANGE_EVENT = 'dev-lang-change';

/**
 * Dispatch a custom event so all components sharing the same lang key
 * re-render when the language changes (works within the same tab).
 */
export function dispatchLangChange(key, lang) {
  localStorage.setItem(key, lang);
  window.dispatchEvent(new CustomEvent(LANG_CHANGE_EVENT, { detail: { key, lang } }));
}

/**
 * Hook for language switching with localStorage persistence.
 * Listens to a custom 'dev-lang-change' event so all components stay in sync
 * even within the same tab when the nav layout changes the language.
 * @param {string} key - localStorage key for language preference
 */
export function useLang(key = 'dev-lang') {
  const [lang, setLang] = useState('zh');

  // Read initial value from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved === 'en' || saved === 'zh') {
      setLang(saved);
    }
  }, [key]);

  // Listen for language changes triggered by the nav layout
  useEffect(() => {
    const handleChange = (e) => {
      if (e.detail?.key === key) {
        setLang(e.detail.lang);
      }
    };
    window.addEventListener(LANG_CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(LANG_CHANGE_EVENT, handleChange);
  }, [key]);

  return lang;
}
