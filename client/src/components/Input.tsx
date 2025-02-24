interface InputProps {
    text: string,
    type: 'text' | 'password' | 'file',
    placeholder: string
}

export function Input(props: InputProps){
    return <div>
        <div>{props.text}</div>
        <div className="pt-2">
            <input type="text" className="w-96 px-2 h-10 outline-none border border-blue-500 rounded-md focus:border-2" placeholder={props.placeholder}/>
        </div>
    </div>
}