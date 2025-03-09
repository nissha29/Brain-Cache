type contentType = "Document" | "Links" | "X" | "Linkedin" | "Youtube" | "Pinterest" | "Instagram" | "Facebook";

interface User {
    _id: string;
    username: string;
}

export interface NoteProps {
    _id: string,
    link?: string,
    type: contentType
    title: string,
    description: string,
    userId: User,
    createdAt: string,
    canDelete?: boolean
}