import Button from "./Button";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import ModalPoliticas from '../components/ModalPoliticas.jsx';
import ModalTermos from '../components/ModalTermos.jsx';
import { useLangContext } from '../contexts/LangContext';
const PricingList = () => {
  const { t } = useLangContext();
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showModalTermos, setShowModalTermos] = useState(false);
  const [showModalPoliticas, setShowModalPoliticas] = useState(false);
 
  const handleOpenModalPoliticas = () => { setShowModalPoliticas(true); document.body.classList.add('no-scroll'); };
  const handleCloseModalPoliticas = () => { setShowModalPoliticas(false); document.body.classList.remove('no-scroll'); };
  const handleOpenModalTermos = () => { setShowModalTermos(true); document.body.classList.add('no-scroll'); };
  const handleCloseModalTermos = () => { setShowModalTermos(false); document.body.classList.remove('no-scroll'); };

  const handleChange = ({ target: { name, value } }) => { setForm({ ...form, [name]: value }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send( 'service_l6j7lqa', 'template_6v3yj28',
        {
          from_name: form.name,
          to_name: 'HamandUniverso',
          from_email: form.email,
          to_email: 'hamanduniverso@gmail.com',
          message: form.message,
        },
        'At21G8MKrknY1k2cn',
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: `${t('obrigado_por_entrar_em_contato')} 😃`,
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: `${t('alguma_coisa_deu_errado')} 😢`,
            type: 'danger',
          });
        },
      );
  };

  return (
    <div className="block">
      <div className="w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
        <div className="w-full">
          {/* Alert */}
          {alert.show && <Alert {...alert} />}
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="lg:m-12 flex flex-col space-y-7">
            {/* Nome */}
            <label className="space-y-3">
              <span className="block field-label">{t('nome')}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input w-full p-4 rounded-lg border border-n-6"
                placeholder="ex., Carl Jung"
              />
            </label>
            {/* Email */}
            <label className="space-y-3">
              <span className="block field-label">{t('email')}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input w-full p-4 rounded-lg border border-n-6"
                placeholder="ex., carljung@sunlight.com"
              />
            </label>
            {/* Mensagem */}
            <label className="space-y-3">
              <span className="block field-label">{t('mensagem')}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input w-full p-4 rounded-lg border border-n-6"
                placeholder={t('quero_saber_mais_informcoes_sobre')}
              />
            </label>
            {/* Submit */}
            <Button className="w-full mb-6 field-btn" type="submit" disabled={loading} >{loading ? t('a_enviar') : t('enviar')}</Button>
          </form>
          <div className="text-center mt-10">
            <div className="block md:inline"><button onClick={handleOpenModalPoliticas} className="text-xs font-code font-bold tracking-wider uppercase border-b hover:text-color-1">{t('politicas_privacidade')}</button></div>
            <div className="mx-4 hidden md:inline"><span className="">|</span></div>
            <div className="block md:inline"><button onClick={handleOpenModalTermos} className="text-xs font-code font-bold tracking-wider uppercase border-b hover:text-color-1">{t('termos_condicoes')}</button></div>
          </div>
          <ModalPoliticas isOpen={showModalPoliticas} onClose={handleCloseModalPoliticas} />
          <ModalTermos isOpen={showModalTermos} onClose={handleCloseModalTermos} />
        </div>
      </div>
    </div>
  );
};

export default PricingList;
