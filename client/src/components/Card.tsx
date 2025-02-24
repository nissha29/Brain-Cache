import { Share } from "../icons/Share"
import { Trash } from "../icons/Trash"
import Embed from "react-embed"

export function Card(){
    return <div className="border border-gray-300 shadow-sm bg-white h-80 w-64 rounded-lg">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="text-gray-500 hover:text-green-700">
                    <Share />
                </div>
                Project Ideas
            </div>
            <div className="flex gap-2 items-center">
                <div className="text-gray-500 hover:text-green-700">
                    <Share/>
                </div>
                <div className="text-gray-500 hover:text-red-800">
                    <Trash />
                </div>
            </div>
        </div>

        <div className="pt-5 px-5 flex justify-center items-center">
            <Embed url="https://x.com/Nisha_297/status/1891904137140310333"/>
        </div>
    </div>
}