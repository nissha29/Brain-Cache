import { ReactElement } from "react"
import { useSetRecoilState } from "recoil"
import { CurrType } from "../store/atoms/currType"

interface SidebarItemProps {
    icon: ReactElement,
    text: String,
    currType: string,
}

export function SidebarItem(props: SidebarItemProps){
    const setCurrentType = useSetRecoilState(CurrType);
    return <div className="flex gap-5 items-center text-lg hover:cursor-pointer hover:bg-blue-300 px-3 py-1 rounded-md" onClick={()=>setCurrentType(props.currType)}>
        {props.icon} {props.text}
    </div>
}