import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import { Home } from "../Pages/Home";

export function Routing() {
    return <div>
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
    </div>
}