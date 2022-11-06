import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';





// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
i18n

.use(Backend)
.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
.init({
fallbackLng: 'en',
lng: localStorage.getItem('lang') ?? 'en',
debug: true,
});




export default i18n;