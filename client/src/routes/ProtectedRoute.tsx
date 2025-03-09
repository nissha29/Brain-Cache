import { useRecoilValue } from "recoil";
import { authState } from "../store/atoms/authState";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
    const auth = useRecoilValue(authState);

    if(! auth.isAuthenticated){
        return <Navigate to={'/'} replace/>
    }

    return <Outlet />;
}