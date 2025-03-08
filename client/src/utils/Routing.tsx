import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import { Home } from "../Pages/Home";
import { AnotherUserBrain } from "../Pages/AnotherUserBrain";

export function Routing() {
    return <div>
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/brain/:shareLink" element={<AnotherUserBrain />}/>
        </Routes>
    </div>
}