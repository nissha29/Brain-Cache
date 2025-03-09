import { useRecoilState } from "recoil";
import { Cross } from "../icons/Cross";
import { Button } from "./Button";
import { Input } from "./Input";
import { CreateContentModelStatus } from "../store/atoms/CreateContentModelStatus";
import { useState } from "react";
import { contentFormDataProps } from "../types/FormData";
import axios from "axios";
import { Alert } from "../icons/Alert";
import { URL } from '../utils/contants.ts'
import { useNotes } from "../hooks/useNotes.tsx";

export function CreateContentModal() {
    const [isCreateContentModelOpen, setIsCreateContentModelOpen] = useRecoilState(CreateContentModelStatus);
    const [formData, setFormData] = useState<contentFormDataProps>({
        link: "",
        type: "",
        title: "",
        description: ""
    })
    const [error, setError] = useState<String>('');
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const { fetchNotes } = useNotes();

    if (!isCreateContentModelOpen) {
        return null;
    }

    const handleChange = (name: string, value: string) => {
        setError('');
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await axios.post(
                `${URL}/content`,
                formData,
                {
                    headers: {
                        authorization: `${localStorage.getItem('authToken')}`
                    }
                }
            )
            fetchNotes();
            setIsCreateContentModelOpen(false);
            setIsLoading(false);
            setFormData({
                link: "",
                type: "",
                title: "",
                description: "",
            })
        } catch (err: any) {
            if (err.response) {
                setError(err.response.data.message || `An error occurred ${err}`);
                setIsLoading(false);
            }
        }
    }

    return <div onClick={() => setIsCreateContentModelOpen(false)}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="p-5 bg-white rounded-md flex flex-col justify-center" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between h-8">
                    <div className="text-2xl font-semibold pb-5 text-gray-700">Add Content</div>
                    <div className="text-gray-500 hover:text-gray-800 hover:cursor-pointer transition-colors p-1 rounded-full hover:bg-gray-100" onClick={() => setIsCreateContentModelOpen(false)}>
                        <Cross />
                    </div>
                </div>
                {error && (
                    <div
                        className="flex items-center bg-[#ff9b9b5b] border border-red-700 text-red-800 p-2 rounded-md mt-5 space-x-2 font-playwrite leading-relaxed max-w-sm"
                    >
                        <Alert />
                        <p className="text-sm">{error}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                    <Input text="Title" type="text" placeholder="Enter Title" name="title" formData={formData} onChange={handleChange} required={true} />
                    <Input text="Type" type="dropdown" placeholder="Enter Type of Content" dropdownOptions={["Document", "Links", "X", "Linkedin", "Youtube", "Pinterest", "Instagram", "Facebook"]} name="type" formData={formData} onChange={handleChange} required={true} />
                    <Input text="Link" type="text" placeholder="Enter Link" name="link" formData={formData} onChange={handleChange} required={false} />
                    <Input text="Description" type="textarea" placeholder="Enter Description" name="description" formData={formData} onChange={handleChange} required={true} />
                    <Button variant="primary" text="Add Content" type="submit" size="lg" isLoading={isLoading} />
                </form>
            </div>
        </div>
    </div>
}