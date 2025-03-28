import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLangContext } from '../contexts/LangContext';
import { background } from "../assets";

export default function UserConsent() {
  const { t } = useLangContext();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Verifica se o cookie de consentimento já foi definido
    if (!Cookies.get("UserConsent")) {
      setShowPopup(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("UserConsent", "true", { expires: 365 });
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-gray-900 text-white p-4 rounded-md flex items-center gap-4 z-50 w-[400px]">
      <p>{t('cocckies_texto')}.</p>
      <button
        onClick={acceptCookies}
        className="text-black px-4 py-2 rounded-md font-bold"
        style={{backgroundColor: '#f9b090'}}
      >
        {t('aceitar')}
      </button>
    </div>
  );
}
