import { DocumentSvg } from "../icons/Document";
import { Instagram } from "../icons/Instagram";
import { Link } from "../icons/Link";
import { Linkedin } from "../icons/Linkedin";
import { Pinterest } from "../icons/Pinterest";
import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube";

export function BottomBar() {
    return <div className="fixed bottom-0 left-0 right-0 bg-blue-200/50 w-screen h-20 flex flex-col lg:hidden">
        <div className="text-gray-700 font-bold text-xl flex justify-center items-center pt-2">Brain<span className="text-blue-600">Cache</span></div>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-1">
            <div className="hover:cursor-pointer hover:bg-blue-200 p-2 rounded-full"><Linkedin color="text-gray-700"/></div>
            <div className="hover:cursor-pointer hover:bg-blue-200 p-2 rounded-full"><Youtube color="text-gray-700"/></div>
            <div className="hover:cursor-pointer hover:bg-blue-200 p-2 rounded-full"><Twitter color="text-gray-700"/></div>
            <div className="hover:cursor-pointer hover:bg-blue-200 p-2 rounded-full"><Pinterest color="text-gray-700"/></div>
            <div className="hover:cursor-pointer hover:bg-blue-200 p-2 rounded-full"><Instagram color="text-gray-700"/></div>
            <div className="hover:cursor-pointer hover:bg-blue-200 p-2 rounded-full"><DocumentSvg color="text-gray-700"/></div>
            <div className="hover:cursor-pointer hover:bg-blue-200 p-2 rounded-full"><Link color="text-gray-700"/></div>
        </div>
    </div>
}