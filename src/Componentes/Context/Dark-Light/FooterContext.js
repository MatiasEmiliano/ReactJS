import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import TextContext from "../context/TextContext";
import AuthContext from "../context/AuthContext";


const FooterContext = () => {

    const{theme,handleTheme}=useContext(ThemeContext)
    const{texts,handleLanguage}=useContext(TextContext)
    const{auth,handleAuth}=useContext(AuthContext)

    return (
      <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
      </footer>
    );
  };
  
  export default FooterContext;