import Section from "./Section";
import { useLangContext } from '../contexts/LangContext';
import { catarinaQuemSomos, soraiaQuemSomos } from "../assets";
import { servicesIconsCatarina, servicesIconsSoraia } from "../constants";
import { Gradient, VideoBar, VideoChatMessage } from "./design/Services";
import ChatBubbleWing from "../../src/assets/svg/ChatBubbleWing";
import { Icon5 } from "../assets/"
const QuemSomos = () => {
  const { t } = useLangContext();
  return (
    <Section id="services">
      <div className="container">
        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Catarina Luis</h4>
                <p className="body-2 mb-[2rem] text-n-3">{t('quem_somos_catarina')}</p>
                <ul className="flex items-center justify-between">
                  {servicesIconsCatarina.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                      <a href={item.link} target="_blank">
                        <img src={item.icon} width={24} height={24} alt={item.name} />
                      </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={catarinaQuemSomos}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Catarina Profile Photo"
                />
                <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
                  {t('vamos_falar')}!
                  <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
                    <img
                      src={Icon5}
                      width={26}
                      height={26}
                      alt="Brainwave"
                    />
                  </div>
                  <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
                  {t('online')} - {t('presencial')}
                  </p>
                  <ChatBubbleWing
                    className="absolute right-full bottom-0 -scale-x-100"
                    pathClassName="fill-n-6"
                  />
                </div>
                <VideoBar />
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Soraia Pereira</h4>
                <p className="body-2 mb-[2rem] text-n-3">{t('quem_somos_soraia')}</p>
                <ul className="flex items-center justify-between">
                  {servicesIconsSoraia.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                      <a href={item.link} target="_blank">
                        <img src={item.icon} width={24} height={24} alt={item.name} />
                      </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={soraiaQuemSomos}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Soraia Profile Photo"
                />
                     <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
                  {t('vamos_falar')}!
                  <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
                    <img
                      src={Icon5}
                      width={26}
                      height={26}
                      alt="Brainwave"
                    />
                  </div>
                  <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
                  {t('online')} - {t('presencial')}
                  </p>
                  <ChatBubbleWing
                    className="absolute right-full bottom-0 -scale-x-100"
                    pathClassName="fill-n-6"
                  />
                </div>
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default QuemSomos;
