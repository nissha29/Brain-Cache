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
                color: "bg-blue-500",
                gradient: "from-blue-500 to-blue-600"
            },
            {
                number: 2,
                title: "Save",
                description: "One-click capture to your personal Brain Cache",
                icon: <Save />,
                color: "bg-indigo-500",
                gradient: "from-indigo-500 to-indigo-600"
            },
            {
                number: 3,
                title: "Organize",
                description: "Categorize your saved items",
                icon: <FolderTree />,
                color: "bg-purple-500",
                gradient: "from-purple-500 to-purple-600"
            },
            {
                number: 4,
                title: "Find",
                description: "Powerful search to locate exactly what you need",
                icon: <Search />,
                color: "bg-pink-500",
                gradient: "from-pink-500 to-pink-600"
            },
            {
                number: 5,
                title: "Remember",
                description: "Access your knowledge anytime, anywhere",
                icon: <Brain />,
                color: "bg-rose-500",
                gradient: "from-rose-500 to-rose-600"
            }
        ];
    
        return (
            <div ref={ref} className="max-w-6xl mx-auto py-24 px-4 rounded-3xl">
                <div className="text-center mb-16">
                    <h2 className="sm:text-5xl text-4xl font-bold text-gray-700 mb-6">How It Works</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Brain Cache makes saving and organizing your digital knowledge effortless in just five simple steps.
                    </p>
                </div>
    
                <div className="hidden md:block">
                    <div className="grid grid-cols-5 gap-6 mb-12">
                        {steps.map((step) => (
                            <div key={step.number} className="relative">
                                <div className={`h-2 bg-gradient-to-r ${step.gradient} rounded-full`}></div>
                                <div className="flex justify-center items-center mt-4">
                                    <div className={`${step.color} rounded-full h-16 w-16 flex items-center justify-center text-white shadow-lg z-10 
                                    hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <h3 className="text-xl font-bold text-gray-700">{step.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="grid grid-cols-1 gap-10 mt-12">
                        {steps.map((step, _) => (
                            <div key={step.number} className="flex bg-blue-200/10 hover:scale-105 transition-all duration-300 p-6">
                                <div className={`${step.color} rounded-full h-16 w-16 flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                                    {step.icon}
                                </div>
                                <div className="ml-6">
                                    <div className="flex items-center mb-2">
                                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${step.color} text-white mr-3`}>Step {step.number}</span>
                                        <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                                    </div>
                                    <p className="text-lg text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="md:hidden">
                    <div className="relative">
                        <div className="absolute left-4 top-0 h-full w-1 bg-gray-300"></div>
                        <div className="space-y-10">
                            {steps.map((step) => (
                                <div key={step.number} className="relative flex items-start pl-12">
                                    <div className="absolute left-0 mt-1">
                                        <div className={`${step.color} rounded-full h-10 w-10 flex items-center justify-center text-white shadow-lg z-10`}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="bg-blue-200/10 rounded-xl p-4 hover:shadow-sm w-full">
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${step.color} text-white inline-block mb-2`}>Step {step.number}</span>
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center items-center mt-16">
                    <Button 
                        variant='primary' 
                        size='lg' 
                        text='Get Started Now' 
                        onClick={()=>setIsSignupModelOpen(true)}
                    />
                </div>
            </div>
        );
    }
)