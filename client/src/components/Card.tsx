import { useSetRecoilState } from "recoil";
import { Calendar } from "../icons/Calendar"
import { ExternalLink } from "../icons/ExternalLink"
import { Journal } from "../icons/Journal"
import { Trash } from "../icons/Trash"
import { CurrentCardModelDisplay } from "../store/atoms/CurrentCardModelDisplay";
import { NoteProps } from "../types/NoteProps";
import { URL } from '../utils/contants'
import axios from "axios";
import { useNotes } from "../hooks/useNotes";

export function Card(props: NoteProps) {
    const setCurrentCardModel = useSetRecoilState(CurrentCardModelDisplay);
    const { fetchNotes } = useNotes();

    const truncateDescription = (description: string, maxLength: number) => {
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

    const handleCardModel = async(id: string) => {
        try{
            const contentId = id;
            const response = await axios.get(
                `${URL}/content/${contentId}`,
                {
                    headers: {
                        authorization: `${localStorage.getItem('authToken')}`
                    }
                }
            )
            setCurrentCardModel(response.data.note);
        }catch(err: any){
            console.log(`error while displaying card model, ${err}`);
        }
    }

    const handlecardDeletion = async(id: string) => {
        try{
            const contentId = id;
            await axios.delete(
                `${URL}/content/${contentId}`,
                {
                    headers: {
                        authorization: `${localStorage.getItem('authToken')}`
                    }
                }
            )
            fetchNotes()
        }catch(err){
            console.log(`error while displaying card model, ${err}`);
        }
    }

    return <>
        <div className="border border-gray-300 bg-white h-[18.2rem] w-80 rounded-xl">
            <div className="flex justify-between px-3 py-2 bg-blue-50 rounded-t-xl">
                <div className="flex gap-2 items-center text-gray-700">
                    <div className="text-blue-600">
                        <Journal />
                    </div>
                    {truncateDescription(props.title,25)}...
                </div>
                {props?.canDelete && <div className="flex gap-2 items-center">
                    <div className="text-gray-500 hover:text-red-500 hover:cursor-pointer hover:bg-pink-100 rounded-full p-2" onClick={()=>handlecardDeletion(props._id)}>
                        <Trash />
                    </div>
                </div>}
            </div>
            <div>
                <div className="flex gap-2 px-3 py-2 text-gray-700 items-cente">
                    <Calendar />
                    <div className="text-sm">{props.createdAt}</div>
                </div>
            </div>
            <div className={`px-2 py-2 mb-3 text-gray-700 ${props.link ? 'h-24' : 'h-[9.5rem]'} text-center"`}>{truncateDescription(props.description,90)} {props.description.length > 80 && <span className="text-blue-600 hover:cursor-pointer hover:underline" onClick={()=>handleCardModel(props._id)}>read more</span>}</div>
            {props.link && <div className="bg-gray-100/50 rounded-lg text-gray-700 mx-3 py-3">
                <div className="flex gap-2 items-center text-sm px-3 pt-1">
                    <ExternalLink />
                    <a href={props.link} target="_blank" className="text-blue-600 hover:underline">Related Link</a>
                </div>
            </div>}
            <div className="border-b border-gray-200 mt-2"></div>
            <div className="flex justify-center items-center mt-2 text-gray-700 text-sm hover:text-blue-600 hover:cursor-pointer" onClick={()=>handleCardModel(props._id)}>
                View
            </div>
        </div>
    </>
}