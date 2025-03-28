import Button from "./Button";
import { useLangContext } from '../contexts/LangContext';
const ModalPoliticas = ({ isOpen, onClose }) => {
  const { t } = useLangContext();
  return (
    <div className={`z-50 fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-n-8/90 rounded-lg shadow-lg p-10 mx-6 lg:w-1/2 mb-5">
        <h2 className="text-lg font-bold mb-8">{t('politicas_privacidade')}</h2>
        <div className="h-80 overflow-y-auto">
          <p className="text-gray-600">1. - {t('text_politicas_privacidade_1')}</p>
          <p className="text-gray-600">2. - {t('text_politicas_privacidade_2')}</p>
          <p className="text-gray-600">3. - {t('text_politicas_privacidade_3')}</p>
          <p className="text-gray-600">4. - {t('text_politicas_privacidade_4')}</p>
          <p className="text-gray-600">5. - {t('text_politicas_privacidade_5')}</p>
          <p className="text-gray-600">6. - {t('text_politicas_privacidade_6')}</p>
        </div>
        <Button className="mt-10" onClick={onClose}>{t('fechar')}</Button>
      </div>
    </div>
  );
};

export default ModalPoliticas;