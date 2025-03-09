import { useSetRecoilState } from "recoil";
import { authState } from "../store/atoms/authState";
import { useNavigate } from "react-router-dom";

interface User {
    id: string,
    username: string,
}

export function Auth(){
    const navigate = useNavigate();
    const setAuth = useSetRecoilState(authState);

    function login(token: string, user: User){
        localStorage.setItem('authToken', token);
        setAuth({
            isAuthenticated: true,
            user: user
        })
        navigate('/home');
    }

    function logout(){
        localStorage.removeItem('authToken');
        setAuth({
            isAuthenticated: false,
            user: null,
        })
        navigate('/');
    }

    return { login, logout };
}