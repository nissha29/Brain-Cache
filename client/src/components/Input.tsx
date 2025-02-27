import { useState } from 'react';
import { EyeOpen } from '../icons/EyeOpen';
import { EyeClose } from '../icons/EyeClose';

interface InputProps {
    text: string;
    type: 'text' | 'password' | 'file' | 'dropdown';  
    placeholder?: string;
    dropdownOptions?: string[]; 
}

export function Input(props: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <div>
            <div className="text-gray-700">{props.text}</div>
            <div className="pt-2">
                {props.type === "dropdown" && props.dropdownOptions ? (
                    <select className="w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2 bg-white text-gray-700">
                        {props.dropdownOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : props.type === "password" ? (
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2 text-gray-700"
                            placeholder={props.placeholder}
                        />
                        <button 
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <EyeOpen />
                            ) : (
                                <EyeClose />
                            )}
                        </button>
                    </div>
                ) : (
                    <input
                        type={props.type}
                        className="w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2 text-gray-700"
                        placeholder={props.placeholder}
                    />
                )}
            </div>
        </div>
    );
}