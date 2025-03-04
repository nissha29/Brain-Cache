import { useRecoilState, useSetRecoilState } from "recoil";
import { Cross } from "../icons/Cross";
import { useState } from 'react';
import { HomeNavbarItemsStatus } from "../store/atoms/HomeNavbarItemsStatus";
import { CreateContentModelStatus } from "../store/atoms/CreateContentModelStatus";
import { ShareBrainModelStatus } from "../store/atoms/ShareBrainModelStatus";


export function HomeNavbarItems() {
    const [hoverItem, setHoverItem] = useState<String | null>(null);
    const [isHomeNavbarItemsOpen, setIsHomeNavbarItemsOpen] = useRecoilState(HomeNavbarItemsStatus);
    const setIsCreateContentModelOpen = useSetRecoilState(CreateContentModelStatus);
    const setIsShareBrainModelOpen = useSetRecoilState(ShareBrainModelStatus);

    if(!isHomeNavbarItemsOpen){
        return null;
    }

    const handleLogout = () => {
        setIsHomeNavbarItemsOpen(false);
    };

    const handleAddContentClick = ()=>{
        setIsHomeNavbarItemsOpen(false);
        setIsCreateContentModelOpen(true);
    }

    const handleShareBrainClick = ()=>{
        setIsHomeNavbarItemsOpen(false);
        setIsShareBrainModelOpen(true);
    }

    const menuItems = [
        { id: "shareBrain", label: "Share Brain", onClick:  handleShareBrainClick},
        { id: "addContent", label: "Add Content", onClick: handleAddContentClick },
        { id: "logout", label: "Logout", onClick: handleLogout },
    ];
    
    return (
        <div className="flex flex-col fixed top-0 right-0 left-0 bg-white backdrop-blur-md p-6 border-b border-gray-100 z-50 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-gray-700">
                    Brain<span className="text-blue-600">Cache</span>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-gray-900" onClick={()=>setIsHomeNavbarItemsOpen(false)}>
                    <Cross />
                </button>
            </div>
            
            <div className="flex flex-col gap-5 items-center justify-center text-lg">
                {menuItems.map((item, _) => ( 
                    <div 
                        key={item.id}
                        className={`relative py-3 px-6 rounded-lg transition-all duration-200 ${
                            hoverItem === item.id ? 'text-blue-600' : 'text-gray-700'
                        } hover:text-blue-600 hover:cursor-pointer ${
                            item.id === 'logout' ? 'bg-red-500 text-white hover:bg-blue-600 hover:text-white mt-4 w-full text-center' : ''
                        }`}
                        onMouseEnter={() => setHoverItem(item.id)}
                        onMouseLeave={() => setHoverItem(null)}
                        onClick={item.onClick}
                    >
                        {item.label}
                        {hoverItem === item.id && item.id !== 'logout' && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}