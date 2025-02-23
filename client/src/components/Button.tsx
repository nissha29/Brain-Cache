import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    size: "sm" | "md" | "lg",
    startIcon?: ReactElement
    onClick: () => void
}

const variantStyles = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-blue-300 text-blue-600"
}

const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-4 py-1 text-lg",
}

const defaultStyles = "rounded-md flex gap-1 justify-center items-center"

export const Button = (props: ButtonProps) => {
    return <>
        <button 
        className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}
        onClick={props.onClick}
        >
            {props.startIcon} {props.text}
        </button>
    </>
}