import Button from "./Button";
import { useLangContext } from '../contexts/LangContext';
const ModalTermos = ({ isOpen, onClose }) => {
  const { t } = useLangContext();
  return (
    <div className={`z-50 fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-n-8/90 rounded-lg shadow-lg p-10 mx-6 lg:w-1/2 mb-5">
        <h2 className="text-lg font-bold mb-8">{t('termos_condicoes')}</h2>
        <div className="h-80 overflow-y-auto">
          <p className="text-gray-600"><b>1 - {t('text_title_termos_condicoes_1')}:</b> {t('text_termos_condicoes_1')}</p>
          <p className="text-gray-600"><b>2 - {t('text_title_termos_condicoes_2')}:</b> {t('text_termos_condicoes_2')}</p>
          <p className="text-gray-600"><b>3 - {t('text_title_termos_condicoes_3')}:</b> {t('text_termos_condicoes_3')}</p>
          <p className="text-gray-600"><b>4 - {t('text_title_termos_condicoes_4')}:</b> {t('text_termos_condicoes_4')}</p>
          <p className="text-gray-600"><b>5 - {t('text_title_termos_condicoes_5')}:</b> {t('text_termos_condicoes_5')}</p>
          <p className="text-gray-600"><b>6 - {t('text_title_termos_condicoes_6')}:</b> {t('text_termos_condicoes_6')}</p>
          <p className="text-gray-600"><b>7 - {t('text_title_termos_condicoes_7')}:</b> {t('text_termos_condicoes_7')}</p>
        </div>
        <Button className="mt-10" onClick={onClose}>{t('fechar')}</Button>
      </div>
    </div>
  );
};

export default ModalTermos;