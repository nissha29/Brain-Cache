import { ReactElement } from "react"

interface SidebarItemProps {
    icon: ReactElement,
    text: String,
}

export function SidebarItem(props: SidebarItemProps){
    return <div className="flex gap-5 items-center text-lg hover:cursor-pointer hover:bg-blue-300 px-3 py-1 rounded-md">
        {props.icon} {props.text}
    </div>
}