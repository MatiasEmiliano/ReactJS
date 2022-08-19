import "./MyPage.css"
import { ThemeProvider } from "../context/ThemeContext";
import { TextProvider } from "../context/TextContext";
import { AuthProvider } from "../context/AuthContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext"
import FooterContext from "./FooterContext";



const MyPageContext = () => {


    return (
        <div className="my-page">
            <ThemeProvider>
                <TextProvider>
                    <AuthProvider>
                        <HeaderContext />
                        <MainContext />
                        <FooterContext />
                    </AuthProvider>
                </TextProvider>
            </ThemeProvider>
        </div>
    );
};

export default MyPageContext;