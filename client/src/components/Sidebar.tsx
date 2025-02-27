import { DocumentSvg } from "../icons/Document";
import { Facebook } from "../icons/Facebook";
import { Instagram } from "../icons/Instagram";
import { Link } from "../icons/Link";
import { Linkedin } from "../icons/Linkedin";
import { Pinterest } from "../icons/Pinterest";
import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube"
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="h-screen ml-11 w-60">
        <div className="flex items-center py-7">
            <div className="text-blue-600 text-3xl font-bold font-mono tracking-tighter hover:cursor-pointer"><span className="text-gray-700">Brain</span>Cache</div>
        </div>
        <div className="text-gray-700 flex flex-col gap-7 pt-3">
            <SidebarItem icon={<Linkedin />} text={"Linkedin"} />
            <SidebarItem icon={<Youtube />} text={"Youtube"} />
            <SidebarItem icon={<Twitter />} text={"Tweets"} />
            <SidebarItem icon={<Pinterest />} text={"Pinterest"} />
            <SidebarItem icon={<Instagram />} text={"Instagram"} />
            <SidebarItem icon={<Facebook />} text={"Facebook"} />
            <SidebarItem icon={<DocumentSvg />} text={"Documents"} />
            <SidebarItem icon={<Link />} text={"Links"} />
        </div>
    </div>
}