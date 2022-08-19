import { createContext } from "react"
import { useState } from "react";

const AuthContext = createContext()
const initialAuth = null;

const AuthProvider = ({children}) =>{

    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = (e) => {
        if (auth) {
            setAuth(null);
        } else {
            setAuth(true);
        }
    };
    
    const data={auth,handleAuth}
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
export {AuthProvider}