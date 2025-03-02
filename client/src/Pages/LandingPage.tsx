import { useRef } from "react";
import { FeaturesSection } from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { HowItWorksSection } from "../components/HowItWorks";
import { AboutSection } from "../components/AboutSection";
import { CtaSection } from "../components/CtaSection";
import Footer from "../components/Footer";

export default function LandingPage(){
    const featuresRef = useRef(null);
    const howItWorksRef = useRef(null);
    const aboutRef = useRef(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return <div>
        <Navbar 
            scrollToFeatures={()=>scrollToSection(featuresRef)}
            scrollToHowItWorks={()=>scrollToSection(howItWorksRef)}
            scrollToAbout={()=>scrollToSection(aboutRef)}
            featuresRef={featuresRef}
            howItWorksRef={howItWorksRef}
            aboutRef={aboutRef}
            scrollToSection={scrollToSection}
        />
        <HeroSection />
        <FeaturesSection ref={featuresRef}/>
        <HowItWorksSection ref={howItWorksRef}/>
        <AboutSection ref={aboutRef}/>
        <CtaSection />
        <Footer />
    </div>
}