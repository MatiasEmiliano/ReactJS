import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import TextContext from "../context/TextContext";
import AuthContext from "../context/AuthContext";

const MainContext = () => {

    const{theme,handleTheme}=useContext(ThemeContext)
    const{texts,handleLanguage}=useContext(TextContext)
    const{auth,handleAuth}=useContext(AuthContext)

    return (
      <main className={theme}>
        {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
        <p>{texts.mainContent}</p>
      </main>
    );
  };
  
  export default MainContext;