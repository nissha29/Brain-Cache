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
import { useEffect, useState } from "react";
import { useNotes } from "../hooks/useNotes";
import { NoteProps } from "../types/NoteProps";
import { CardModel } from "../components/CardModel";
import { CurrentCardModelDisplay } from "../store/atoms/CurrentCardModelDisplay";
import { CurrType } from "../store/atoms/currType";
import { NoNotes } from "../components/NoNotes";


export function Home() {
    const setIsCreateContentModelOpen = useSetRecoilState(CreateContentModelStatus);
    const setIsShareBrainModelOpen = useSetRecoilState(ShareBrainModelStatus);
    const [IsAccountModelOpen, setIsAccountModelOpen] = useRecoilState(AccountModelStatus);
    const setIsHomeNavbarModelOpen = useSetRecoilState(HomeNavbarItemsStatus);
    const currentCardModel = useRecoilValue(CurrentCardModelDisplay);
    const currentType = useRecoilValue(CurrType);
    const notes = useRecoilValue(NotesStatus);
    const { fetchNotes } = useNotes();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadNotes = async () => {
            setIsLoading(true);
            await fetchNotes();
            setIsLoading(false);
        };

        loadNotes();
    }, []);

    const filterNotes = (activeType: string, notes: Array<NoteProps>) => {
        switch (activeType) {
            case 'linkedin':
                return notes.filter(note => note.type[0] === 'Linkedin');
            case 'youtube':
                return notes.filter(note => note.type[0] === 'Youtube');
            case 'twitter':
                return notes.filter(note => note.type[0] === 'X');
            case 'pinterest':
                return notes.filter(note => note.type[0] === 'Pinterest');
            case 'instagram':
                return notes.filter(note => note.type[0] === 'Instagram');
            case 'document':
                return notes.filter(note => note.type[0] === 'Document');
            case 'link':
                return notes.filter(note => note.type[0] === 'Links');
            default:
                return notes;
        }
    }

    const filteredNotes = filterNotes(currentType, notes);


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
            {isLoading ?
                <div className="fixed inset-0 flex items-center justify-center lg:ml-60">
                    <div className="bg-white p-6 rounded-2xl flex flex-col items-center">
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                            <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                        </div>
                        <span className="text-gray-700 text-lg font-medium">Loading Brain...</span>
                    </div>
                </div>
                : filteredNotes.length === 0 ?
                    <div className="flex justify-center items-center mt-40">
                        <NoNotes />
                    </div>
                    :
                    <div className="flex flex-wrap 2xl:gap-14 gap-6 mt-10 lg:mb-10 justify-center lg:justify-start items-center sm:mx-14 mb-28 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-300 scrollbar-none sm:scrollbar-thin pt-3 px-2">
                        {filteredNotes?.map((note: NoteProps) => (

                            <Card key={note._id} _id={note._id} link={note.link} type={note.type} title={note.title} description={note.description} userId={note.userId} createdAt={note.createdAt} canDelete={true} />

                        ))}
                    </div>
            }
            <BottomBar />
        </div>
        <CreateContentModal />
        <ShareBrainModel />
        <HomeNavbarItems />
        {currentCardModel && <CardModel />}
    </div>
}