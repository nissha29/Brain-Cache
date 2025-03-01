import { useSetRecoilState } from "recoil";
import { Button } from "./Button";
import { Signin } from "./Signin";
import { SigninModelStatus } from "../store/atoms/SigninModelStatus";

interface scrollProps {
    scrollToFeatures: ()=>void
    scrollToHowItWorks: ()=>void
    scrollToAbout: ()=>void
}

export function Navbar(props: scrollProps) {
    const setIsSigninModelOpen = useSetRecoilState(SigninModelStatus);

    return <div className="fixed top-0 right-0 left-0 z-40">
        <div className="flex justify-between px-24 py-5 shadow-sm bg-white">
            <div className="text-blue-600 text-3xl font-bold font-mono tracking-tighter hover:cursor-pointer"><span className="text-gray-700">Brain</span>Cache</div>
            <div className="flex gap-10 items-center text-gray-700">
                <div className="hover:cursor-pointer hover:text-blue-600 hover:scale-105" onClick={props.scrollToFeatures}>Features</div>
                <div className="hover:cursor-pointer hover:text-blue-600 hover:scale-105" onClick={props.scrollToHowItWorks}>How it Works</div>
                <div className="hover:cursor-pointer hover:text-blue-600 hover:scale-105" onClick={props.scrollToAbout}>About</div>
                <Button variant="primary" text="Sign in" size="md" onClick={()=>setIsSigninModelOpen(true)}/>
            </div>
        </div>
        <Signin />
    </div>
}