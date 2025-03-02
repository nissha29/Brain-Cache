import { useRecoilState, useSetRecoilState } from "recoil";
import { Cross } from "../icons/Cross";
import { Button } from "./Button";
import { Input } from "./Input";
import { SignupModelStatus } from "../store/atoms/SignupModelStatus";
import { SigninModelStatus } from "../store/atoms/SigninModelStatus";
import { useState } from "react";
import { AuthformDataProps } from "../types/FormData";

export function Signup() {
    const [isSignupModelOpen, setIsSignupModelOpen] = useRecoilState(SignupModelStatus);
    const setIsSigninModelOpen = useSetRecoilState(SigninModelStatus);

    let [formData, setFormData] =  useState<AuthformDataProps>({
        username: "",
        password: "",
    })

    if(!isSignupModelOpen){
        return null;
    }

    const onClickHandler = ()=>{
        setIsSignupModelOpen(false)
        setIsSigninModelOpen(true)
    }

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(`formData - ${formData}`)
    }

    const handleSubmit = () => {
        try{

        }catch(err){
            console.log(`Error on client side while signing in, ${err}`)
        }
    }

    return <div onClick={()=>setIsSignupModelOpen(false)}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="p-5 bg-white rounded-md flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between h-8">
                <div className="text-2xl font-semibold pb-5 text-gray-700">Signup To Brain Cache</div>
                    <div className="text-gray-500 hover:text-gray-800 hover:cursor-pointer transition-colors p-1 rounded-full hover:bg-gray-100" onClick={()=>setIsSignupModelOpen(false)}>
                        <Cross />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                    <Input text="Username" type="text" placeholder="Enter Username" name="username" formData={formData} onChange={handleChange}/>
                    <Input text="Password" type="password" placeholder="•••••••••••••••" name="password" formData={formData}  onChange={handleChange}/>
                    <Button variant="primary" text="Sign up" type="submit" size="lg"/>
                </form>
                <div className="flex justify-center items-center mt-5 text-gray-700">
                    <a href="#" className="hover:underline hover:text-blue-600" onClick={onClickHandler}>Already have an account?</a>
                </div>
            </div>
        </div>
    </div>
}