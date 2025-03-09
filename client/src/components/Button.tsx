import { ReactElement } from "react";
import { Loader } from "../icons/Loader";

interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    size: "sm" | "md" | "lg",
    startIcon?: ReactElement
    type?: "submit"
    isLoading?: Boolean
    onClick?: () => void
}

const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-800",
    secondary: "border border-blue-600 text-blue-600 hover:bg-blue-300/30"
}

const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-8 py-3 text-lg",
}

const defaultStyles = "rounded-md flex gap-2 justify-center items-center cursor-pointer"

export const Button = (props: ButtonProps) => {
    return <>
       <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.isLoading ? 'opacity-80' : ''}`}
        onClick={props.onClick}
        >
            {props.isLoading
              ?
              <div className="animate-spin flex justify-center items-center">
                <Loader />
              </div>
              :
              <div className={`${defaultStyles}`}>
                {props.startIcon} {props.text}
              </div>
            }
        </button>
    </>
}