import { useRecoilState, useSetRecoilState } from "recoil";
import { Cross } from "../icons/Cross";
import { SigninModelStatus } from "../store/atoms/SigninModelStatus";
import { Button } from "./Button";
import { Input } from "./Input";
import { SignupModelStatus } from "../store/atoms/SignupModelStatus";
import { AuthformDataProps } from "../types/FormData";
import { useState } from "react";
import axios from "axios";
import { Alert } from "../icons/Alert";
import { URL } from "../utils/contants";

export function Signin() {
    const [isSigninModelOpen, setIsSigninModelOpen] = useRecoilState(SigninModelStatus);
    const setIsSignupModelOpen = useSetRecoilState(SignupModelStatus);

    let [formData, setFormData] = useState<AuthformDataProps>({
        username: "",
        password: "",
    })
    const [error, setError] = useState<String>('');
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    if (!isSigninModelOpen) {
        return null;
    }

    const handleChange = (name: string, value: string) => {
        setError('')
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onClickHandler = () => {
        setIsSigninModelOpen(false),
            setIsSignupModelOpen(true)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${URL}/signin`,
                formData
            )
            const token = response.data.token;
            localStorage.setItem('authToken', token);
            axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
            console.log(axios.defaults.headers.common['authorization']);
            setIsSigninModelOpen(false);
            setIsLoading(false);
        } catch (err: any) {
            if (err.response) {
                if (err.response.status === 400) {
                    setError('Invalid Credentials');
                    setIsLoading(false);
                } else if (err.response.status === 409) {
                    setError('User already exists');
                    setIsLoading(false);
                } else if (err.response.status === 500) {
                    setError('Server error');
                    setIsLoading(false);
                } else {
                    setError(err.response.data.message || `An error occurred ${err}`);
                    setIsLoading(false);
                }
            }
        }
    }

    return <div onClick={() => setIsSigninModelOpen(false)}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="p-5 bg-white rounded-md flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between h-8">
                    <div className="text-xl sm:text-2xl font-semibold pb-5 text-gray-700">Signin To Brain Cache</div>
                    <div className="text-gray-500 hover:text-gray-800 hover:cursor-pointer transition-colors p-1 rounded-full hover:bg-gray-100" onClick={() => setIsSigninModelOpen(false)}>
                        <Cross />
                    </div>
                </div>
                {error && (
                    <div
                        className="flex items-center bg-[#ff9b9b5b] border border-red-700 text-red-800 p-2 rounded-md mt-5 space-x-2 font-playwrite"
                    >
                        <Alert />
                        <p className="text-sm">{error}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                    <Input text="Username" type="text" placeholder="Enter Username" name="username" formData={formData} onChange={handleChange} required={true}/>
                    <Input text="Password" type="password" placeholder="•••••••••••••••" name="password" formData={formData} onChange={handleChange} required={true}/>
                    <Button variant="primary" text="Sign in" type="submit" size="lg" isLoading={isLoading} />
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