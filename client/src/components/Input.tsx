import { ChangeEvent, useState } from 'react';
import { EyeOpen } from '../icons/EyeOpen';
import { EyeClose } from '../icons/EyeClose';
import { AuthformDataProps, contentFormDataProps } from '../types/FormData';

interface InputProps {
    text: string;
    type: 'text' | 'password' | 'file' | 'dropdown' | 'textarea';  
    placeholder?: string;
    dropdownOptions?: string[]; 
    name: string;
    formData: AuthformDataProps | contentFormDataProps;
    onChange: (name: string, value: string) => void;
    required: boolean;
}

export function Input(props: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        props.onChange(e.target.name, e.target.value);
    };
    
    return (
        <div>
            <div className="text-gray-700">
                {props.text} {props.required === false && <span className='text-gray-500'>(Optional)</span>}
            </div>
            <div className="pt-2">
                {props.type === "dropdown" && props.dropdownOptions ? (
                    <select 
                        className="w-72 sm:w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2 bg-white text-gray-700"
                        onChange={handleChange} 
                        name={props.name} 
                        value={props.formData[props.name] || ''} 
                        required={props.required}
                        defaultValue={"document"}
                    >
                        <option value="" disabled>Select an option</option>
                        {props.dropdownOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                ) : props.type === "password" ? (
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-72 sm:w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2 text-gray-700"
                            placeholder={props.placeholder}
                            onChange={handleChange}
                            name={props.name}
                            value={props.formData[props.name] || ''}
                            required={props.required}
                        />
                        <button 
                            type="button"
                            className="absolute right-10 sm:right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <EyeOpen /> : <EyeClose />}
                        </button>
                    </div>
                ) : props.type === "textarea" ? (
                    <textarea
                        className="w-72 sm:w-96 px-2 h-20 outline-none border border-gray-300 rounded-md focus:border-2 text-gray-700 resize-none"
                        placeholder={props.placeholder}
                        onChange={handleChange}
                        name={props.name}
                        value={props.formData[props.name] || ''}
                        required={props.required}
                    />
                ) : (
                    <input
                        type={props.type}
                        className="w-72 sm:w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2 text-gray-700"
                        placeholder={props.placeholder}
                        onChange={handleChange}
                        name={props.name}
                        value={props.formData[props.name] || ''}
                        required={props.required}
                    />
                )}
            </div>
        </div>
    );
}
