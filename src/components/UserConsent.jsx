import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLangContext } from '../contexts/LangContext';

export default function UserConsent() {
  const { t } = useLangContext();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
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
    <div className="fixed bottom-0 right-0 bg-gray-900 text-white p-4 rounded-md flex items-center z-50">
      <p>{t('cocckies_texto')}.</p>
      <button
        onClick={acceptCookies}
        className="text-black px-4 py-2 rounded-md font-bold ml-4"
        style={{backgroundColor: '#f9b090'}}
      >
        {t('aceitar')}
      </button>
    </div>
  );
}
