import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import SobreNos from "./components/SobreNos";
import QuemSomos from "./components/QuemSomos";
import Testemunhos from "./components/Testemunhos";
import Contactos from "./components/Contactos";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";
import UserConsent from './components/UserConsent.jsx';
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Servicos />
        <SobreNos />
        <QuemSomos />
        <Testemunhos />
        <Contactos />
        <Footer />
      </div>
      <ButtonGradient />
      <UserConsent />
    </>
  );
};
export default App;