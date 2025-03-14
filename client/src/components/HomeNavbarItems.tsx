import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Cross } from "../icons/Cross";
import { useState } from 'react';
import { HomeNavbarItemsStatus } from "../store/atoms/HomeNavbarItemsStatus";
import { CreateContentModelStatus } from "../store/atoms/CreateContentModelStatus";
import { ShareBrainModelStatus } from "../store/atoms/ShareBrainModelStatus";
import { Auth } from "../routes/auth";
import { authState } from "../store/atoms/authState";
import { useNavigate } from "react-router-dom";


export function HomeNavbarItems() {
    const [hoverItem, setHoverItem] = useState<String | null>(null);
    const [isHomeNavbarItemsOpen, setIsHomeNavbarItemsOpen] = useRecoilState(HomeNavbarItemsStatus);
    const setIsCreateContentModelOpen = useSetRecoilState(CreateContentModelStatus);
    const setIsShareBrainModelOpen = useSetRecoilState(ShareBrainModelStatus);
    const { logout } = Auth();
    const navigate = useNavigate();
    const auth = useRecoilValue(authState);

    if (!isHomeNavbarItemsOpen) {
        return null;
    }

    const handleLogout = () => {
        logout();
    };

    const handleAddContentClick = () => {
        setIsHomeNavbarItemsOpen(false);
        setIsCreateContentModelOpen(true);
    }

    const handleShareBrainClick = () => {
        setIsHomeNavbarItemsOpen(false);
        setIsShareBrainModelOpen(true);
    }

    const handleQueryBrain = () => {
        navigate('/search');
    }

    const menuItems = [
        { id: "queryBrain", label: "Query Your Brain ?", onClick: handleQueryBrain},
        { id: "shareBrain", label: "Share Brain", onClick: handleShareBrainClick },
        { id: "addContent", label: "Add Content", onClick: handleAddContentClick },
        { id: "logout", label: "Logout", onClick: handleLogout },
    ];

    return (
        <div className="flex flex-col fixed top-0 right-0 left-0 bg-white backdrop-blur-md p-6 border-b border-gray-100 z-50 transition-all duration-300 lg:hidden">
            <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-gray-700">
                    Brain<span className="text-blue-600">Cache</span>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-gray-900" onClick={() => setIsHomeNavbarItemsOpen(false)}>
                    <Cross />
                </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 py-3 px-4 mb-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm">
                <div className="text-gray-700 text-base sm:text-xl font-medium">
                    Welcome to Brain Cache,
                </div>
                <div className="text-blue-600 font-bold text-lg sm:text-2xl transition-all duration-300 hover:text-blue-700">
                    {auth.user?.username || "Guest"}
                </div>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center text-lg">
                {menuItems.map((item, _) => (
                    <div
                        key={item.id}
                        className={`relative py-3 px-6 rounded-lg transition-all duration-200 ${hoverItem === item.id ? 'text-blue-600' : 'text-gray-700'
                            } hover:text-blue-600 hover:cursor-pointer ${item.id === 'logout' ? 'bg-red-500 text-white hover:bg-red-600 hover:text-white mt-4 w-full text-center' : ''
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