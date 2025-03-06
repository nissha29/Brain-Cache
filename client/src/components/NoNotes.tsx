import { useSetRecoilState } from "recoil"
import { CreateContentModelStatus } from "../store/atoms/CreateContentModelStatus"
import { Button } from "./Button";
import { Plus } from "../icons/Plus";

export function NoNotes() {
    const setIsCreateContentModelOpen = useSetRecoilState(CreateContentModelStatus);
    return <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center h-96 w-full text-center p-6">
            <div className="bg-blue-100 rounded-full p-8 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-700 mb-2">No Notes to Show</h2>
            <p className="text-gray-500 mb-6 max-w-md">No notes found for the selected category. Try selecting a different category or add new content.</p>
            <Button variant="primary" startIcon={<Plus />} text="Add Content" size="md" onClick={() => setIsCreateContentModelOpen(true)} />
        </div>
    </div>
}