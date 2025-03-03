import { forwardRef } from "react";

interface FeaturesSectionProps {
}

export const FeaturesSection = forwardRef<HTMLDivElement, FeaturesSectionProps>(
    function FeaturesSection(_, ref) {
        return (
            <div ref={ref} className="relative w-full mt-24 bg-blue-200/40 xl:bg-white px-10">
                <div className="absolute top-0 left-0 w-full h-80 xl:bg-blue-200/40"></div>

                <div className="relative">
                    <div className="flex justify-center items-center">
                        <div className="text-gray-700 font-bold text-3xl md:text-4xl mt-16 text-center">
                            How Brain Cache Extends Your Memory?
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-center items-center mt-16 px-12 md:px-12 lg:px-48 2xl:gap-20 xl:gap-10">
                        <FeaturesCard
                            num={1}
                            heading={"Universal Content Capture"}
                            text={"Save anything valuable you encounter online—tweets, articles, LinkedIn posts, youtube videos embed, your thoughts and webpages — with a single click"}
                        />
                        <FeaturesCard
                            num={2}
                            heading={"Smart Organization"}
                            text={"Brain Cache helps categorizing your saved content, creating a structured knowledge base without any manual effort. Find what you need when you need it"}
                        />
                        <FeaturesCard
                            num={3}
                            heading={"Thought Capture"}
                            text={"Don't let brilliant ideas slip away. Quickly record random thoughts, insights, and 'aha moments' directly in Brain Cache before they disappear forever"}
                        />
                    </div>
                </div>
            </div>
        );
    }
);

interface FeaturesProps {
    num: number
    heading: string,
    text: string,
}

function FeaturesCard(props: FeaturesProps) {
    return (
        <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 -mb-8 text-xl font-bold text-white bg-blue-600 rounded-full shadow-lg z-0">
                {props.num}
            </div>

            <div className="w-96 p-3 max-w-72 sm:max-w-full sm:p-10 2xl:p-8 xl:py-8 xl:px-3 pt-12 bg-white rounded-xl shadow-md border border-blue-100 transition-all duration-300 hover:shadow-lg hover:cursor-pointer hover:scale-105 group">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-blue-600 group-hover:text-blue-800">
                        {props.heading}
                    </h3>

                    <p className="leading-relaxed text-gray-600">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    );
}