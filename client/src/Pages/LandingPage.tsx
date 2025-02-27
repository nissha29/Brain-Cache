import { FeaturesSection } from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import { Navbar } from "../components/Navbar";

export default function LandingPage(){
    return <div>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
    </div>
}