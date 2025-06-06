import Heading from "./Heading";
import Section from "./Section";
import PricingList from "./PricingList";
import { useLangContext } from '../contexts/LangContext';
import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
const Contactos = () => {
  const { t } = useLangContext();
  return (
    <Section className="overflow-hidden" id="contactos">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading
          tag={t('title_contacts')}
          title={t('vamos_falar')}
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Contactos;
