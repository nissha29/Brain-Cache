import { useRecoilState, useSetRecoilState } from "recoil";
import { Cross } from "../icons/Cross";
import { useState } from 'react';
import { NavbarItemsStatus } from "../store/atoms/NavbarItemsStatus";
import { SigninModelStatus } from "../store/atoms/SigninModelStatus";

interface scrollProps {
    scrollToFeatures: ()=>void
    scrollToHowItWorks: ()=>void
    scrollToAbout: ()=>void
}

export function NavbarItems(props: scrollProps) {
    const [hoverItem, setHoverItem] = useState<String | null>(null);
    const [isNavbarItemsOpen, setIsNavbarItemsOpen] = useRecoilState(NavbarItemsStatus);
    const setIsSigninModelOpen = useSetRecoilState(SigninModelStatus);

    if(!isNavbarItemsOpen){
        return null;
    }

    const handleSigninClick = () => {
        setIsSigninModelOpen(true);
        setIsNavbarItemsOpen(false);
    };

    const menuItems = [
        { id: "features", label: "Features", onClick: props.scrollToFeatures },
        { id: "howItWorks", label: "How It Works", onClick: props.scrollToHowItWorks },
        { id: "about", label: "About", onClick: props.scrollToAbout },
        { id: "signin", label: "Sign In", onClick: handleSigninClick },
    ];
    
    return (
        <div className="flex flex-col fixed top-0 right-0 left-0 bg-white backdrop-blur-md p-6 border-b border-gray-100 z-50 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-gray-700">
                    Brain<span className="text-blue-600">Cache</span>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-gray-900" onClick={()=>setIsNavbarItemsOpen(false)}>
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
                            item.id === 'signin' ? 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white mt-4 w-full text-center' : ''
                        }`}
                        onMouseEnter={() => setHoverItem(item.id)}
                        onMouseLeave={() => setHoverItem(null)}
                        onClick={item.onClick}
                    >
                        {item.label}
                        {hoverItem === item.id && item.id !== 'signin' && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}