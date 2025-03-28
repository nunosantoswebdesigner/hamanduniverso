import Section from "./Section";
import TagLine from "./Tagline";
import { useLangContext } from '../contexts/LangContext';
import { logoSmall } from "../assets";
import { collabApps, getCollabText } from "../constants";
import { LeftCurve, RightCurve } from "./design/Collaboration";
const SobreNos = () => {
  const { t } = useLangContext();
  const collabText = getCollabText(t);
  return (
    <Section crosses id="sobrenos">
      <div className="container lg:flex">
        <div className="max-w-[25rem] text-left">
          <TagLine className="mb-4 ml-1">{t('title_sobre_nos')}</TagLine>
          <h2 className="h2 mb-4 md:mb-8">{t('quem_somos')}</h2>
          <p className="body-2 mt-3 text-n-4 mb-20 lg:mb-5">{collabText}</p>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">

          <div className="relative left-1/2 flex w-[18rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-[13rem] aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[10rem] aspect-square m-auto p-[0.2rem] rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={logoSmall}
                    width={200}
                    height={200}
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
      
    </Section>
  );
};

export default SobreNos;
