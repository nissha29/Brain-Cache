import { useRecoilState } from "recoil"
import { NotesStatus } from "../store/atoms/NotesStatus"
import { useEffect } from "react";
import axios from "axios";
import { URL } from '../utils/contants'
import { Card } from "./Card";

type contentType = "Document" | "Links" | "X" | "Linkedin" | "Youtube" | "Pinterest" | "Instagram" | "Facebook";

interface User {
    _id: string;
    username: string;
}

interface NoteProps {
    _id: string,
    link: string,
    type: contentType
    title: string,
    description: string,
    userId: User,
    createdAt: string,
}

export function Notes() {
    const [notes, setNotes] = useRecoilState(NotesStatus);

    async function fetchNotes(){
        try{
            const response = await axios.get(
                `${URL}/content`,
                {
                    headers: {
                        authorization: `${localStorage.getItem('authToken')}`
                    }
                }
            )
            setNotes(response.data.content);
            // console.log(response.data.content);
        }
        catch(err: any){
            
        }
    }

    useEffect(()=>{
        fetchNotes()
    }, [notes])

    return <div>
        {notes.map((note: NoteProps)=>(
            <div key={note._id}>
                <Card />
            </div>
        ))}
    </div>
}