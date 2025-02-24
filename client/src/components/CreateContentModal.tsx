import { Cross } from "../icons/Cross";
import { Button } from "./Button";
import { Input } from "./Input";

interface ContentModalProps {
    open: Boolean
}

export function CreateContentModal(props: ContentModalProps) {
    if(!props.open){
        return null;
    }
    return <div>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="p-5 bg-white rounded-md flex flex-col justify-center">
                <div className="flex justify-end">
                    <Cross />
                </div>
                <div className="text-2xl font-semibold pb-5">Add Content</div>
                <form action="" className="flex flex-col gap-4">
                    <Input text="Title" type="text" placeholder="Enter Title"/>
                    <Input text="Type" type="text" placeholder="Enter Type of Content"/>
                    <Input text="Link" type="text" placeholder="Enter Link"/>
                    <Input text="Description" type="text" placeholder="Enter Description"/>
                    <Button variant="primary" text="Add Content" type="submit" size="lg"/>
                </form>
            </div>
        </div>
    </div>
}