import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { useLangContext } from '../contexts/LangContext';
const Footer = () => {
  const { t } = useLangContext();
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. {t('all_rights')}. 
          <span className="block md:inline"> {t('feito_por')} <a href="https://www.instagram.com/nunosantosdev/" target="_blank"> <u className="hover:text-color-1">Nuno Santos</u>  </a> {t('com')} ❤️</span>
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
