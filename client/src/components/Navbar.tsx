import { useSetRecoilState } from "recoil";
import { Button } from "./Button";
import { Signin } from "./Signin";
import { SigninModelStatus } from "../store/atoms/SigninModelStatus";

export function Navbar() {
    const setIsSigninModelOpen = useSetRecoilState(SigninModelStatus);

    return <div className="fixed inset-0">
        <div className="flex justify-between px-10 py-5 shadow-sm bg-white">
            <div className="text-blue-600 text-3xl font-bold font-mono tracking-tighter hover:cursor-pointer"><span className="text-gray-700">Brain</span>Cache</div>
            <div className="flex gap-7 items-center text-gray-700">
                <div>Features</div>
                <div>How it Works?</div>
                <div>About</div>
                <Button variant="primary" text="Sign in" size="md" onClick={()=>setIsSigninModelOpen(true)}/>
            </div>
        </div>
        <Signin />
    </div>
}