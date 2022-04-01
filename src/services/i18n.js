import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LazyImportPlugin from './LazyImportPlugin';

const i18nBuilder = (options?: InitOptions) =>
  i18n
    .use(LazyImportPlugin)
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      debug: true,
      ns: ['Common'],
      saveMissing: true, // for missing key handler to fire
      missingKeyHandler: function (lng, ns, key, fallbackValue) {
        console.log(key);
      },
      ...options,
    });

export default i18nBuilder;

// // import i18n, { InitOptions } from 'i18next';
// // import { initReactI18next } from 'react-i18next';

// // const i18nBuilder = (options?: InitOptions) =>
// //   i18n
// //     .use(LazyImportPlugin)
// //     .use(initReactI18next)
// //     .init({
// //       lng: 'en',
// //       fallbackLng: 'en',
// //       interpolation: {
// //         escapeValue: false,
// //       },
// //       ns: ['Common'],
// //       saveMissing: true, // for missing key handler to fire
// //       missingKeyHandler: function (lng, ns, key, fallbackValue) {
// //         console.log(key);
// //       },
// //       ...options,
// //     });

// // export default i18nBuilder;


// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend'
// // import Backend from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// const fallbackLng = ['en'];
// const availableLanguages = ['en', 'uz', 'ru'];


// const options = {
//   // order and from where user language should be detected
//   order: ['localStorage','navigator'],

//   lookupLocalStorage: 'i18nextLng'
  
// }


// i18n
//   .use(Backend)
//   .use(LanguageDetector) // detect user language
//   .use(initReactI18next) // pass the i18n instance to react-i18next.
//   .init({
//     fallbackLng, // fallback language is english.
//     detection: options,
//     lng: "uz",
//     preload: ['en', 'ru', 'uz'],
//     // preload: true,
//     ns: ['Common'],
//     backend:{
//       loadPath: '../{{lng}}/{{ns}}.json'
//     },


//     debug: true,
//     whitelist: availableLanguages,
//     interpolation: {
//       escapeValue: false, // no need for react. it escapes by default
//     },
//     react: {useSuspense: false}
//   });

// export default i18n;
