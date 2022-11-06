import { createContext, useState } from 'react';
import i18n from '../i18n';

const UserContext = createContext({
    id: -1,
    loggedIn: false,
    setId: null,
    toggleLoggedIn: null,
    toggleLang: null,
});

const UserProvider = ({ children }) => {
    console.log(localStorage.getItem('lang'));
    const [lang, setLang] = useState(localStorage.getItem('lang') ?? 'en');
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
    const [id, _setId] = useState(Number.parseInt(localStorage.getItem('id') ?? -1));

    const toggleLang = () => {
        const newLang = lang === 'en' ? 'fr' : 'en';
        setLang(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem('lang', newLang);
    };

    const toggleLoggedIn = () => {
        localStorage.setItem('loggedIn', !loggedIn);
        setLoggedIn(!loggedIn);
    }

    const setId = newId => {
        _setId(newId);
        localStorage.setItem('id', newId);
    }

    return <UserContext.Provider value={{ toggleLang, loggedIn, toggleLoggedIn, id, setId }}>{
        children}
        </UserContext.Provider>;
}

export { UserProvider, UserContext };