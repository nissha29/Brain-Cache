import { useRecoilState } from "recoil";
import { Cross } from "../icons/Cross";
import { Button } from "./Button";
import { Input } from "./Input";
import { CreateContentModelStatus } from "../store/atoms/CreateContentModelStatus";

export function CreateContentModal() {
    const [isCreateContentModelOpen, setIsCreateContentModelOpen] = useRecoilState(CreateContentModelStatus);
    if(!isCreateContentModelOpen){
        return null;
    }
    
    return <div onClick={() => setIsCreateContentModelOpen(false)}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="p-5 bg-white rounded-md flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between h-8">
                <div className="text-2xl font-semibold pb-5 text-gray-700">Add Content</div>
                    <div className="text-gray-500 hover:text-gray-800 hover:cursor-pointer transition-colors p-1 rounded-full hover:bg-gray-100" onClick={()=>setIsCreateContentModelOpen(false)}>
                        <Cross />
                    </div>
                </div>
                <form action="" className="flex flex-col gap-4 mt-8">
                    <Input text="Title" type="text" placeholder="Enter Title"/>
                    <Input text="Type" type="dropdown" placeholder="Enter Type of Content" dropdownOptions={["Document / Links", "X", "Linkedin", "Youtube", "Pinterest", "Instagram", "Facebook"]}/>
                    <Input text="Link" type="text" placeholder="Enter Link"/>
                    <Input text="Description" type="text" placeholder="Enter Description"/>
                    <Button variant="primary" text="Add Content" type="submit" size="lg"/>
                </form>
            </div>
        </div>
    </div>
}