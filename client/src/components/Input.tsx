import { ChangeEvent, useState } from 'react';
import { EyeOpen } from '../icons/EyeOpen';
import { EyeClose } from '../icons/EyeClose';
import { AuthformDataProps } from '../types/FormData';

interface InputProps {
    text: string;
    type: 'text' | 'password' | 'file' | 'dropdown';  
    placeholder?: string;
    dropdownOptions?: string[]; 
    name: string,
    formData: AuthformDataProps
    onChange: (name: string, value: string)=>void
}

export function Input(props: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        props.onChange(e.target.name, e.target.value);
    };
    
    return (
        <div>
            <div className="text-gray-700">{props.text}</div>
            <div className="pt-2">
                {props.type === "dropdown" && props.dropdownOptions ? (
                    <select className="w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2 bg-white text-gray-700" onChange={handleChange} name='type' value={props.formData[props.name] || ''}>
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
                            onChange={handleChange}
                            name={props.name}
                            value={props.formData[props.name] || ''}
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
                        onChange={handleChange}
                        name={props.name}
                        value={props.formData[props.name] || ''}
                    />
                )}
            </div>
        </div>
    );
}