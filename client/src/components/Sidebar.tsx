import { DocumentSvg } from "../icons/Document";
import { Instagram } from "../icons/Instagram";
import { Link } from "../icons/Link";
import { Linkedin } from "../icons/Linkedin";
import { Pinterest } from "../icons/Pinterest";
import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube"
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen ml-11 w-60 hidden lg:block">
        <div className="flex items-center py-7">
            <div className="text-blue-600 text-3xl font-bold hover:cursor-pointer"><span className="text-gray-700">Brain</span>Cache</div>
        </div>
        <div className="text-gray-700 flex flex-col gap-7 pt-3">
            <SidebarItem icon={<Linkedin color="text-blue-500"/>} text={"Linkedin"} />
            <SidebarItem icon={<Youtube color="text-red-500"/>} text={"Youtube"} />
            <SidebarItem icon={<Twitter color="text-sky-500"/>} text={"Tweets"} />
            <SidebarItem icon={<Pinterest color="text-red-500"/>} text={"Pinterest"} />
            <SidebarItem icon={<Instagram color="text-pink-500"/>} text={"Instagram"} />
            <SidebarItem icon={<DocumentSvg color="text-blue-500"/>} text={"Documents"} />
            <SidebarItem icon={<Link color="text-blue-500"/>} text={"Links"} />
        </div>
    </div>
}