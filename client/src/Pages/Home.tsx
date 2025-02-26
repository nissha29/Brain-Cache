import { useSetRecoilState } from "recoil";
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

export function Home(){
    const setIsCreateContentModelOpen = useSetRecoilState(CreateContentModelStatus);
    const setIsShareBrainModelOpen = useSetRecoilState(ShareBrainModelStatus);

    return <div className="flex overflow-y-hidden">
        <div className="bg-gray-50 shadow-sm">
            <Sidebar />
        </div>
        <div className="w-screen h-screen flex flex-col">
            <div className="flex justify-between px-14 mt-7">
                <div className="text-gray-700 font-bold text-2xl">All Notes</div>
                <div className="flex gap-3">
                    <Button variant="secondary" startIcon={<Share />} text="Share Brain" size="md" onClick={()=>setIsShareBrainModelOpen(prev => !prev)}/>
                    <Button variant="primary" startIcon={<Plus />} text="Add Content" size="md" onClick={()=>setIsCreateContentModelOpen(prev => !prev)}/>
                    <div className="hover:cursor-pointer">
                        <Account />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-y-14 my-12 mx-14 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-300">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <CreateContentModal />
        <ShareBrainModel />
    </div>
}