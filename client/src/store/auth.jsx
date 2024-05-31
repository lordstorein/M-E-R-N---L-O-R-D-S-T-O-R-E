import { createContext, useContext, useState } from "react";
export const AuthContext = createContext()
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")

    const storeTokenInLS = (serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem('token', serverToken)
    };

    const checkToken = ()=>{
       const storedToken = localStorage.getItem("token");
        if(!storedToken) {
            return '/signup'
        } else {
            return '/aftereffect'
        }
    }

    const isLoggedIn = ()=>{
        const storedToken = localStorage.getItem("token");
        if(!storedToken){
            return '/signup'
        }
    }

    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token")
    }
    const userAuthentication = async ()=>{
        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })

            if(response.ok) {
                const data = await response.json()
                setUser(data.userData);
            }
        } catch (error) {
            console.error('error fetching data')
        }
    }
    
    useEffect(()=>{
        if(token){
        userAuthentication();   
    } 
    }, [])

    return ( 
    <AuthContext.Provider value={{isLoggedIn,checkToken,storeTokenInLS, LogoutUser, user}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error('useAuth used outside of the provider')
    }
    return authContextValue;
}