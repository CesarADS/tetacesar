import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { setItem, getItem } = useLocalStorage();

    const getLoginByLocalStorage = () => {
        const token = getItem('token');
        if (token) {
            setIsAuthenticated(true);
            return  token ;
        }
        return null;
    };

    const [token, setToken] = useState(getLoginByLocalStorage);
    const verificarToken = () => {
        if(token){
            const response = axios.get("http://localhost:8080/usuarios/verificarLogin/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if(response.status === 200){
                return token
            }
            return null
        }
        return null
    }
    useEffect(() => {
        const storedData = getLoginByLocalStorage();
        if (storedData) setToken(storedData);
    }, []);

    const login = (token) => {
        setItem('token', token);
        setToken(token);
        setIsAuthenticated(true);
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, token, verificarToken }}>
        {children}
      </AuthContext.Provider>
    );
};