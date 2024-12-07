import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, verificarToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const token = await verificarToken()
            if(!token) {
                navigate("/")
            }
        })()
        if (!isAuthenticated)navigate('/');
    },[isAuthenticated, navigate , verificarToken]);
    

    return (
        <>
            {isAuthenticated ? children : null}
        </>
  )

};