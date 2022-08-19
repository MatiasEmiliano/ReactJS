import { createContext } from "react"
import { useState } from "react";

const TextContext = createContext()
const translations = {
    es: {
        headerTitle: "Mi aplicación CON Context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenid@ invitad@",
        mainHello: "Hola Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pié de página",
    },
    en: {
        headerTitle: "My application with Context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello User",
        mainContent: "My main content",
        footerTitle: "My footer",
    },
};
const initialLanguage = "es"

const TextProvider = ({children}) =>{
    
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);
    

    const handleLanguage = (e) => {
        //console.log(e.target.value);
        if (e.target.value === "es") {
            setLanguage("es");
            setTexts(translations.es);
        } else {
            setLanguage("en");
            setTexts(translations.en);
        }
    };
    
    const data={texts,handleLanguage}

    return (
        <TextContext.Provider value={data}>
            {children}
        </TextContext.Provider>

    )
}


export default TextContext
export {TextProvider}