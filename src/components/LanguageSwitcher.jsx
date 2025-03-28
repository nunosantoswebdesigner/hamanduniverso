import { useState, useRef, useEffect } from 'react';
import { useLangContext } from '../contexts/LangContext';

const languages = [
  { code: 'pt', name: 'Português', flag: '/images/lang/pt.svg' },
  { code: 'en', name: 'English', flag: '/images/lang/en.svg' },
  { code: 'fr', name: 'Francês', flag: '/images/lang/fr.svg' }
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLangContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-button">
        <img src={languages.find((l) => l.code === lang)?.flag} alt={`${lang} flag`} className="flag-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((language) => (
            <li
              key={language.code}
              onClick={() => { setLang(language.code); setIsOpen(false); }}
              className={lang === language.code ? 'selected' : ''}
            >
              <img src={language.flag} alt={`${language.name} flag`} className="flag-icon" />
              {language.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
