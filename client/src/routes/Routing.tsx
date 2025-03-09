import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import { Home } from "../Pages/Home";
import { AnotherUserBrain } from "../Pages/AnotherUserBrain";
import { ProtectedRoute } from "./ProtectedRoute";
import { useRecoilValue } from "recoil";
import { authState } from "../store/atoms/authState";
import NotFound from "../components/NotFound";

export function Routing() {
    const auth = useRecoilValue(authState);
    return <div>
        <Routes>
            <Route path="/" element={auth.isAuthenticated ? <Navigate to={'/home'} replace/> : <LandingPage/>}
            />
            <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Home />}/>
                <Route path="/share/:shareLink" element={<AnotherUserBrain />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
}