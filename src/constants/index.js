
// Imagens
import { cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, logoSmall, chromecast, disc02, smallSphere, facebook, file02, homeSmile, instagram,  plusSquare, recording01, recording03, serviceOne, serviceTwo, serviceThree, serviceFour, serviceFive, serviceSix, searchMd, sliders04, telegram, tiktok, yourlogo, clienteCard, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from "../assets";

export const getNavigation = (t) => [
  { id: "0", title: t('servicos'), url: "#servicos", },
  { id: "1", title: t('sobre_nos'), url: "#sobrenos", },
  { id: "2", title: t('testemunhos'), url: "#testemunhos", },
  { id: "3", title: t('contactos'), url: "#contactos", }
];

export const getRoadmap = (t) => [
  {
    id: "0",
    title: t('metodologia_humanoterapeuta'),
    text: t('descricao_metodologia_humanoterapeuta'),
    date: "54€",
    status: t('online'),
    imageUrl: serviceOne,
    colorful: true,
  },
  {
    id: "1",
    title: t('constelacao_familiar'),
    text: t('descricao_constelacao_familiar'),
    date: "54€",
    status: t('online'),
    imageUrl: serviceTwo,
    colorful: true,
  },
  {
    id: "2",
    title: t('consulta_astrologica'),
    text: t('descricao_consulta_astrologica'),
    date: "54€",
    status: t('online'),
    imageUrl: serviceThree,
    colorful: true,
  },
  {
    id: "3",
    title: t('consulta_astrologica_infantil'),
    text: t('descricao_consulta_astrologica_infantil'),
    date: "54€",
    status: t('online'),
    imageUrl: serviceFour,
    colorful: true,
  },
  {
    id: "4",
    title: t('registos_akashicos'),
    text: t('descricao_registos_akashicos'),
    date: "54€",
    status: t('online'),
    imageUrl: serviceFive,
    colorful: true,
  },
  {
    id: "5",
    title: t('harmonizacoes'),
    text: t('descricao_harmonizacoes'),
    date: "45€",
    status: t('online'),
    imageUrl: serviceSix,
    colorful: true,
  },
  
];

// export const getRoadmap = (t) => [
//   {
//     id: "0",
//     title: t('metodologia_humanoterapeuta'),
//     text: t('descricao_metodologia_humanoterapeuta'),
//     date: "45€",
//     status: t('online'),
//     imageUrl: serviceOne,
//     colorful: true,
//   },
//   {
//     id: "1",
//     title: t('registos_akashicos'),
//     text: t('descricao_registos_akashicos'),
//     date: "45€",
//     status: t('online'),
//     imageUrl: serviceTwo,
//     colorful: true,
//   },
//   {
//     id: "2",
//     title: t('consulta_astrologica'),
//     text: t('descricao_consulta_astrologica'),
//     date: "45€",
//     status: t('online'),
//     imageUrl: serviceThree,
//     colorful: true,
//   },
//   {
//     id: "3",
//     title: t('harmonizacoes'),
//     text: t('descricao_harmonizacoes'),
//     date: "36€",
//     status: t('online'),
//     imageUrl: serviceFour,
//     colorful: true,
//   },
// ];


export const getBenefits = (t) => [
  {
    id: "0",
    imageUrl: smallSphere,
    name: 'Ana Soares',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente1,
    review: t('review_ana_soares'),
  },
  {
    id: "1",
    imageUrl: smallSphere,
    light: true,
    name: 'Anzhelika Ishkova',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente2,
    review: t('review_anzhelika_ishkova'),
  },
  {
    id: "2",
    imageUrl: smallSphere,
    name: 'Wander Pardini',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente3,
    review: t('review_wander_pardini'),
  },
  {
    id: "3",
    imageUrl: smallSphere,
    light: true,
    name: 'António Graça',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente4,
    review: t('review_antonio_graca'),
  },
  {
    id: "4",
    imageUrl: smallSphere,
    name: 'Nuno Santos',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente5,
    review: t('review_nuno_santos'),
  },
  {
    id: "5",
    imageUrl: smallSphere,
    name: 'Lourenço Caetano',
    position: 'Marketing Director at GreenLeaf',
    backgroundImage:'./src/assets/logo-small.png',
    img: cliente6,
    review: t('review_lourenco_caetano'),
  },
];
export const getCollabText = (t) => t('colaboracao_texto');

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];


export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const servicesIconsCatarina = [
  {
    id: "0",
    link: "https://www.facebook.com/catanouk66",
    name: "facebook",
    icon: facebook,
  },
  {
    id: "1",
    link: "https://www.instagram.com/hamanduniverso_catanouk66/",
    name: "instagram",
    icon: instagram,
  },
  {
    id: "2",
    link: "tel:+351915825671",
    name: "phone",
    icon: disc02,
  },
  {
    id: "3",
    link: "https://wa.me/+351915825671",
    name: "whatsapp",
    icon: chromecast,
  },
  {
    id: "4",
    link: "mailto:hamanduniverso@gmail.com",
    name: "email",
    icon: sliders04,
  }
];

export const servicesIconsSoraia = [
  {
    id: "0",
    link: "https://www.facebook.com/alexa.pereira.5667/",
    name: "facebook",
    icon: facebook,
  },
  {
    id: "1",
    link: "https://www.instagram.com/soraialexa.pereira/",
    name: "instagram",
    icon: instagram,
  },
  {
    id: "2",
    link: "tel:+34644661591",
    name: "phone",
    icon: disc02,
  },
  {
    id: "3",
    link: "https://wa.me/+34644661591",
    name: "whatsapp",
    icon: chromecast,
  },
  {
    id: "4",
    link: "mailto:hamanduniverso@gmail.com",
    name: "email",
    icon: sliders04,
  }
];


export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    // text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  { id: "0", title: "Icon1", icon: Icon1, width: 40, height: 40 },
  { id: "1", title: "Icon2", icon: Icon2, width: 40, height: 40 },
  { id: "2", title: "Icon3", icon: Icon3, width: 40, height: 40 },
  { id: "3", title: "Icon4", icon: Icon4, width: 40, height: 40 },
  { id: "4", title: "Icon5", icon: Icon5, width: 40, height: 40 },
  { id: "5", title: "Icon6", icon: Icon6, width: 40, height: 40 },
  { id: "6", title: "Icon7", icon: Icon7, width: 40, height: 40 },
  { id: "7", title: "Icon8", icon: Icon8, width: 40, height: 40 },
  
];

export const socials = [
  {
    id: "0",
    title: "Intagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/hamanduniverso_catanouk66/",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/catanouk66/",
  },
  {
    id: "2",
    title: "Tiktok",
    iconUrl: tiktok,
    url: "http://tiktok.com/@hamanduniverso/",
  },
  // {
  //   id: "3",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
];
