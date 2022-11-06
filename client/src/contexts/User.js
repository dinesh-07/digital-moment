import { createContext, useState } from 'react';
import i18n from '../i18n';

const UserContext = createContext({
    user: {},
    loggedIn: false,
    setUser: null,
    toggleLoggedIn: null,
    toggleLang: null,
});

const UserProvider = ({ children }) => {
    const [lang, setLang] = useState(localStorage.getItem('lang') ?? 'en');
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
    const [user, _setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

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

    const setUser = user => {
        _setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    return <UserContext.Provider value={{ toggleLang, loggedIn, toggleLoggedIn, user, setUser }}>{
        children}
        </UserContext.Provider>;
}

export { UserProvider, UserContext };