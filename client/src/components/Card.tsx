import { Calendar } from "../icons/Calendar"
import { ExternalLink } from "../icons/ExternalLink"
import { Journal } from "../icons/Journal"
import { Trash } from "../icons/Trash"

type contentType = "Document" | "Links" | "X" | "Linkedin" | "Youtube" | "Pinterest" | "Instagram" | "Facebook";

interface User {
    _id: string;
    username: string;
}

interface NoteProps {
    id: string,
    link: string,
    type: contentType
    title: string,
    description: string,
    userId: User,
    createdAt: string,
}

export function Card(props: NoteProps){
    const truncateDescription = (description: string, maxLength: number = 90) => {
        const trimmedDesc = description.trim();
        
        if (trimmedDesc.length <= maxLength) {
            return trimmedDesc;
        }
        
        const truncated = trimmedDesc.slice(0, maxLength);
        const lastSpaceIndex = truncated.lastIndexOf(' ');
        
        const finalTruncated = lastSpaceIndex > 0 
            ? truncated.slice(0, lastSpaceIndex)
            : truncated;
        
        return `${finalTruncated}`;
    }

    return <div className="border border-gray-300 shadow-sm bg-white h-72 w-96 lg:w-96 xl:w-80 rounded-xl" key={props.id}>
        <div className="flex justify-between px-3 py-2 bg-blue-50 rounded-t-xl">
            <div className="flex gap-2 items-center text-gray-700">
                <div className="text-blue-600">
                    <Journal />
                </div>
                {props.title}
            </div>
            <div className="flex gap-2 items-center">
                <div className="text-gray-500 hover:text-red-500 hover:cursor-pointer hover:bg-pink-100 rounded-full p-2">
                    <Trash />
                </div>
            </div>
        </div>
        <div>
            <div className="flex gap-2 px-3 py-2 text-gray-700 items-cente">
                <Calendar />
                <div className="text-sm">{props.createdAt}</div>
            </div>
        </div>
        <div className="px-3 py-2 mb-2 text-gray-700 h-24 scrollbar-none">{truncateDescription(props.description)} {props.description.length > 80 && <span className="text-blue-600 hover:cursor-pointer">read more</span>}</div>
        <div className="bg-gray-100/50 rounded-lg text-gray-700 mx-3 py-3">
            <div className="flex gap-2 items-center text-sm px-3 pt-1">
                <ExternalLink />
                <a href={props.link} className="text-blue-600 hover:underline">Related Link</a>
            </div>
        </div>
        <div className="border-b border-gray-200 mt-2"></div>
        <div className="flex justify-center items-center mt-2 text-gray-700 text-sm hover:text-blue-600 hover:cursor-pointer">
            View
        </div>
    </div>
}