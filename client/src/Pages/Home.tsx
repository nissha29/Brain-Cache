import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { Account } from "../icons/Account";
import { Plus } from "../icons/Plus";
import { Share } from "../icons/Share";
import { CreateContentModelStatus } from "../store/atoms/CreateContentModelStatus"
import { ShareBrainModelStatus } from "../store/atoms/ShareBrainModelStatus";
import { CreateContentModal } from "../components/CreateContentModel"
import { ShareBrainModel } from "../components/ShareBrainModel"
import { AccountModel } from "../components/AccountModel";
import { AccountModelStatus } from "../store/atoms/AccountModelStatus";
import { Hamburger } from "../icons/Hamburger";
import { HomeNavbarItems } from "../components/HomeNavbarItems";
import { HomeNavbarItemsStatus } from "../store/atoms/HomeNavbarItemsStatus";
import { BottomBar } from "../components/BottomBar";
import { NotesStatus } from "../store/atoms/NotesStatus"
import { useEffect } from "react";
import { useFetchNotes } from "../hooks/useFetchNotes";


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

export function Home() {
    const setIsCreateContentModelOpen = useSetRecoilState(CreateContentModelStatus);
    const setIsShareBrainModelOpen = useSetRecoilState(ShareBrainModelStatus);
    const [IsAccountModelOpen, setIsAccountModelOpen] = useRecoilState(AccountModelStatus);
    const setIsHomeNavbarModelOpen = useSetRecoilState(HomeNavbarItemsStatus);
    const notes = useRecoilValue(NotesStatus);
    const { fetchNotes } = useFetchNotes();

    useEffect(() => {
        fetchNotes();
    }, [])

    return <div className="flex overflow-y-hidden w-screen h-screen"
    >
        <div className="bg-blue-300/50 shadow-sm rounded-r-3xl">
            <Sidebar />
        </div>
        <div className="w-screen h-screen flex flex-col">
            <div className="justify-between px-14 mt-7 hidden lg:flex">
                <div className="text-gray-700 font-bold text-2xl">My Notes</div>
                <div className="flex gap-3">
                    <Button variant="secondary" startIcon={<Share />} text="Share Brain" size="md" onClick={() => setIsShareBrainModelOpen(prev => !prev)} isLoading={false} />
                    <Button variant="primary" startIcon={<Plus />} text="Add Content" size="md" onClick={() => setIsCreateContentModelOpen(prev => !prev)} isLoading={false} />
                    <div className="hover:cursor-pointer" onClick={() => setIsAccountModelOpen(prev => !prev)}>
                        <Account />
                        {IsAccountModelOpen && <div className="fixed right-14 top-20">
                            <AccountModel />
                        </div>}
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden justify-between px-5 pt-5" onClick={() => {
                setIsHomeNavbarModelOpen(true)
            }}>
                <div className="flex justify-center items-center text-gray-700 font-bold text-2xl">All Notes</div>
                <div className="hover:cursor-pointer"><Hamburger /></div>
            </div>
            <div className="flex flex-wrap gap-8 mt-10 lg:mb-10 justify-evenly items-center mx-14 mb-28 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-300 scrollbar-none sm:scrollbar-thin">
                {notes?.map((note: NoteProps) => (
                    <Card key={note._id} id={note._id} link={note.link} type={note.type} title={note.title} description={note.description} userId={note.userId} createdAt={note.createdAt} />
                ))}
            </div>
            <BottomBar />
        </div>
        <CreateContentModal />
        <ShareBrainModel />
        <HomeNavbarItems />
    </div>
}