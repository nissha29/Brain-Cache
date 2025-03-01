import { Brain } from '../icons/Brain'
import { Compass } from '../icons/Compass';
import { Save } from '../icons/Save';
import { FolderTree } from '../icons/FolderTree';
import { Search } from '../icons/Search';
import { Button } from './Button';
import { useSetRecoilState } from 'recoil';
import { SignupModelStatus } from '../store/atoms/SignupModelStatus';
import { forwardRef } from "react";

interface HowItWorksSectionProps {
}

export const HowItWorksSection = forwardRef<HTMLDivElement, HowItWorksSectionProps>(
    function HowItWorksSection(_, ref) {
        const setIsSignupModelOpen = useSetRecoilState(SignupModelStatus);

        const steps = [
            {
                number: 1,
                title: "Discover",
                description: "Find valuable content across the web",
                icon: <Compass />,
                color: "bg-blue-500"
            },
            {
                number: 2,
                title: "Save",
                description: "One-click capture to your personal Brain Cache",
                icon: <Save />,
                color: "bg-indigo-500"
            },
            {
                number: 3,
                title: "Organize",
                description: "Categorize your saved items",
                icon: <FolderTree />,
                color: "bg-purple-500"
            },
            {
                number: 4,
                title: "Find",
                description: "Powerful search to locate exactly what you need",
                icon: <Search />,
                color: "bg-pink-500"
            },
            {
                number: 5,
                title: "Remember",
                description: "Access your knowledge anytime, anywhere",
                icon: <Brain />,
                color: "bg-rose-500"
            }
        ];
    
        return (
            <div ref={ref} className="max-w-6xl mx-auto py-24 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-700 mb-4">How It Works ?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Brain Cache makes saving and organizing your digital knowledge effortless in just five simple steps.
                    </p>
                </div>
    
                <div className="relative">
                    
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
                    
                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative flex flex-col md:flex-row items-center md:items-start group">
                        
                                <div className="md:hidden w-full flex items-center mb-4">
                                    <div className={`${step.color} rounded-full p-4 text-white flex-shrink-0`}>
                                        {step.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold text-gray-700">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                                
                        
                                <div className="hidden md:block md:w-5/12 md:pr-8">
                                    {index % 2 === 0 && (
                                        <div className="text-right">
                                            <h3 className="text-2xl font-bold text-gray-700 mb-2">{step.title}</h3>
                                            <p className="text-lg text-gray-600">{step.description}</p>
                                        </div>
                                    )}
                                </div>
                                
                            
                                <div className="hidden md:flex md:w-2/12 items-center justify-center z-10">
                                    <div className={`${step.color} rounded-full h-16 w-16 flex items-center justify-center text-white shadow-lg 
                                    group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                </div>
                                
                            
                                <div className="hidden md:block md:w-5/12 md:pl-8">
                                    {index % 2 === 1 && (
                                        <div className="text-left">
                                            <h3 className="text-2xl font-bold text-gray-700 mb-2">{step.title}</h3>
                                            <p className="text-lg text-gray-600">{step.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex justify-center items-center mt-24">
                    <Button variant='primary' size='lg' text='Get Started Now' onClick={()=>setIsSignupModelOpen(true)}/>
                </div>
            </div>
        );
    }
)
