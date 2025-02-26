interface InputProps {
    text: string;
    type: 'text' | 'password' | 'file' | 'dropdown';  
    placeholder?: string;
    dropdownOptions?: string[]; 
}

export function Input(props: InputProps) {
    return (
        <div>
            <div>{props.text}</div>
            <div className="pt-2">
                {props.type === "dropdown" && props.dropdownOptions ? (
                    <select className="w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2 bg-white">
                        {props.dropdownOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={props.type}
                        className="w-96 px-2 h-10 outline-none border border-gray-300 rounded-md focus:border-2"
                        placeholder={props.placeholder}
                    />
                )}
            </div>
        </div>
    );
}
