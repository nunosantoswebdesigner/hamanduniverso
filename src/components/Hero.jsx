import Section from "./Section";
import { curve, heroBackground, capasite, catarinaQuemSomos, soraiaQuemSomos } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import { useLangContext } from '../contexts/LangContext';
const Hero = () => {
  const parallaxRef = useRef(null);
  const { t } = useLangContext();
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero" >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-12 lg:mb-16">
          <h1 className="h1 mb-10"> {t('terapia')}{" "} <span className="inline-block relative"> {t('holistica')}{" "} <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="Curve" /> </span></h1>
          <p className="body-1 max-w-3xl mx-auto mb-2 text-n-2 lg:mb-4">{t('hero_text')}</p>
          <span>Carl Jung</span>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient-hero">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img src={capasite} className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" width={1024} height={490} alt="AI" />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned> <Notification className="hidden absolute -left-[5.5rem] bottom-[7.5rem] w-[18rem] xl:flex" imgUrl={catarinaQuemSomos} title="Catarina Luís" text="HamandUniverso" /> </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" imgUrl={soraiaQuemSomos} title="Soraia Pereira" text="SoraialexaPereira" />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[74%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img src={heroBackground} className="w-full" width={1440} height={1800} alt="hero" />
          </div>
          <BackgroundCircles />
        </div>
        <div className="hidden relative z-10 mt-20 lg:block"><h5 className="tagline mb-6 text-center text-n-1/50">{t('hero_bottom_text')}</h5></div>
      </div>
      <BottomLine />
    </Section>
  );
};
export default Hero;