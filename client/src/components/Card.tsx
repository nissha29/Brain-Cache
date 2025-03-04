import { Calendar } from "../icons/Calendar"
import { ExternalLink } from "../icons/ExternalLink"
import { Journal } from "../icons/Journal"
import { Trash } from "../icons/Trash"


export function Card(){
    return <div className="border border-gray-300 shadow-sm bg-white h-64 w-96 lg:w-96 xl:w-80 rounded-xl">
        <div className="flex justify-between px-3 py-2 bg-blue-50 rounded-t-xl">
            <div className="flex gap-2 items-center text-gray-700">
                <div className="text-blue-600">
                    <Journal />
                </div>
                Project Ideas
            </div>
            <div className="flex gap-2 items-center">
                <div className="text-gray-500 hover:text-red-500 hover:cursor-pointer hover:bg-pink-100 rounded-full p-2">
                    <Trash />
                </div>
            </div>
        </div>
        <div>
            <div className="flex gap-2 p-3 text-gray-700 items-center">
                <Calendar />
                <div className="text-sm">Monday, 3/3/2025</div>
            </div>
        </div>
        <div className="px-3 py-2 text-gray-700">Interesting concept for a new web app using React and AI</div>
        <div className="bg-gray-100/50 rounded-lg text-gray-700 mx-3 py-3">
            <div className="flex gap-2 items-center text-sm px-3">
                <ExternalLink />
                <a href="https://react.dev" className="text-blue-600 hover:underline">Related Link</a>
            </div>
        </div>
        <div className="border-b border-gray-200 mt-2"></div>
        <div className="flex justify-center items-center mt-2 text-gray-700 text-sm hover:text-blue-600 hover:cursor-pointer">
            View
        </div>
    </div>
}