import { useLangContext } from '../contexts/LangContext';
const Generating = ({ className }) => {
  const { t } = useLangContext();
  return (
    <div className={`flex items-center justify-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${ className || "" } text-base`}>{t('ser_essencia')}...</div>
  );
};

export default Generating;
