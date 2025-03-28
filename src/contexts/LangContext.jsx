import Cookies from 'js-cookie';
import { createContext, useContext, useState, useEffect } from 'react';
import pt from '../constants/lang/pt';
import en from '../constants/lang/en';
import fr from '../constants/lang/fr';
export const LangContext = createContext({
  lang: 'pt',
  setLang: () => {},
  t: () => '',
});

export function useLangContext() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLangContext must be used within a LangProvider');
  }
  return context;
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => Cookies.get('selectedLang') || 'pt');

  useEffect(() => {
    Cookies.set('selectedLang', lang, { expires: 365 });
  }, [lang]);

  const translations = { pt, en, fr };

  const t = (key) => translations[lang][key] || '';

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}