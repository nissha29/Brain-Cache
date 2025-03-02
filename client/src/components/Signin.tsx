import { useRecoilState, useSetRecoilState } from "recoil";
import { Cross } from "../icons/Cross";
import { SigninModelStatus } from "../store/atoms/SigninModelStatus";
import { Button } from "./Button";
import { Input } from "./Input";
import { SignupModelStatus } from "../store/atoms/SignupModelStatus";
import { AuthformDataProps } from "../types/FormData";
import { useState } from "react";

export function Signin() {
    const [isSigninModelOpen, setIsSigninModelOpen] = useRecoilState(SigninModelStatus);
    const setIsSignupModelOpen = useSetRecoilState(SignupModelStatus);

    let [formData, setFormData] =  useState<AuthformDataProps>({
        username: "",
        password: "",
    })
    
    if(!isSigninModelOpen){
        return null;
    }

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(`formData - ${formData}`)
    }

    const onClickHandler = () => {
        setIsSigninModelOpen(false),
        setIsSignupModelOpen(true)
    }

    const handleSubmit = () => {
        try{
            console.log(`formData - ${formData}`)
        }catch(err){
            console.log(`Error on client side while signing in, ${err}`)
        }
    }

    return <div onClick={()=>setIsSigninModelOpen(false)}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="p-5 bg-white rounded-md flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between h-8">
                <div className="text-2xl font-semibold pb-5 text-gray-700">Signin To Brain Cache</div>
                    <div className="text-gray-500 hover:text-gray-800 hover:cursor-pointer transition-colors p-1 rounded-full hover:bg-gray-100" onClick={()=>setIsSigninModelOpen(false)}>
                        <Cross />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                    <Input text="Username" type="text" placeholder="Enter Username" name="username" formData={formData} onChange={handleChange}/>
                    <Input text="Password" type="password" placeholder="•••••••••••••••" name="password" formData={formData} onChange={handleChange}/>
                    <Button variant="primary" text="Sign in" type="submit" size="lg"/>
                </form>
                <div className="flex justify-center items-center mt-5 text-gray-700">
                    <div>New User? <a href="#" className="hover:underline hover:text-blue-600" 
                    onClick={onClickHandler}>
                        Register here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}