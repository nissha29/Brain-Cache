import { Brain } from "../icons/Brain";
import { Lightbulb } from "../icons/LightBulb";
import { Users } from "../icons/User";
import { Zap } from "../icons/Zap";
import { forwardRef } from "react";

interface AboutSectionProps {
}

export const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(
    function AboutSection(_, ref) {
        return (
            <section ref={ref} className="py-20 bg-blue-200/40">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Section header */}
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center justify-center p-2 bg-blue-200 rounded-lg mb-4">
                            <Brain />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-700 mb-4">About Brain Cache</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're building the ultimate second brain for the information age.
                        </p>
                    </div>
    
                    {/* Main content grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-blue-600">Our Vision</h3>
                            <p className="text-gray-700/80 leading-relaxed text-lg">
                                Brain Cache emerged from a fundamental challenge: extracting meaningful insights from the digital noise. We created a solution that allows you to capture and retrieve valuable content precisely when you need it.
                            </p>
                            <p className="text-gray-700/80 leading-relaxed text-lg">
                                Brain Cache, crafted by a solo innovator with firsthand experience of information overload, provides a powerful system that transforms how you capture, organize, and instantly retrieve your most valuable digital knowledge.
                            </p>
                        </div>
    
                        {/* Right side: Core values */}
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Core Values</h3>
    
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="h-12 w-12 rounded-full bg-pink-200 flex items-center justify-center">
                                            <Lightbulb />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Knowledge Empowerment</h4>
                                        <p className="text-gray-600">We believe your collected knowledge should be easily accessible and organized, empowering you to make connections and find inspiration.</p>
                                    </div>
                                </div>
    
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center">
                                            <Users />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-1">User-Centered Design</h4>
                                        <p className="text-gray-600">Everything we build starts with understanding how people actually save and retrieve information, not how we think they should.</p>
                                    </div>
                                </div>
    
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center">
                                            <Zap />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Seamless Integration</h4>
                                        <p className="text-gray-600">Your knowledge collection should fit naturally into your workflow, becoming an extension of your thinking rather than another tool to manage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
)