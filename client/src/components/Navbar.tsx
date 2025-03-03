import { useSetRecoilState } from "recoil";
import { Button } from "./Button";
import { Signin } from "./Signin";
import { SigninModelStatus } from "../store/atoms/SigninModelStatus";
import { Hamburger } from "../icons/Hamburger";
import { NavbarItemsStatus } from "../store/atoms/NavbarItemsStatus";
import { NavbarItems } from "./NavbarItems";
import { RefObject } from "react";

interface scrollProps {
    scrollToFeatures: ()=>void
    scrollToHowItWorks: ()=>void
    scrollToAbout: ()=>void
    featuresRef: RefObject<HTMLElement | null>
    howItWorksRef: RefObject<HTMLElement | null>
    aboutRef: RefObject<HTMLElement | null>
    scrollToSection: (ref: React.RefObject<HTMLElement | null>)=>void
}

export function Navbar(props: scrollProps) {
    const setIsSigninModelOpen = useSetRecoilState(SigninModelStatus);
    const setIsNavbarItemsOpen = useSetRecoilState(NavbarItemsStatus);

    return <div className="fixed top-0 right-0 left-0 z-10">
        <div className="flex justify-between items-center px-3 sm:px-10 py-5 bg-white">
            <div className="text-blue-600 text-3xl font-bold font-mono tracking-tighter hover:cursor-pointer mt-1"><span className="text-gray-700">Brain</span>Cache</div>
            <div className="lg:flex gap-10 items-center text-gray-700 hidden">
                <div className="hover:cursor-pointer hover:text-blue-600 hover:scale-105" onClick={props.scrollToFeatures}>Features</div>
                <div className="hover:cursor-pointer hover:text-blue-600 hover:scale-105" onClick={props.scrollToHowItWorks}>How it Works</div>
                <div className="hover:cursor-pointer hover:text-blue-600 hover:scale-105" onClick={props.scrollToAbout}>About</div>
                <Button variant="primary" text="Sign in" size="md" onClick={()=>setIsSigninModelOpen(true)} isLoading={false}/>
            </div>
            <div className="lg:hidden hover:cursor-pointer" onClick={()=>setIsNavbarItemsOpen(true)}><Hamburger /></div>
        </div>
        <Signin />
        <div className="lg:hidden rounded-full hover:cursor-pointer">
            <NavbarItems 
                scrollToFeatures={()=>props.scrollToSection(props.featuresRef)}
                scrollToHowItWorks={()=>props.scrollToSection(props.howItWorksRef)}
                scrollToAbout={()=>props.scrollToSection(props.aboutRef)}
            />
        </div>
    </div>
}