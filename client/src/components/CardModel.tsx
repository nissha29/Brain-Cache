import { Calendar } from "../icons/Calendar";
import { ExternalLink } from "../icons/ExternalLink";
import { Journal } from "../icons/Journal";
import { Cross } from '../icons/Cross';
import { useRecoilState } from "recoil";
import { CardModelStatus } from "../store/atoms/CardModelStatus";

export function CardModal() {
  const [isCardModelOpen, setIsCardModelOpen] = useRecoilState(CardModelStatus);
  const projectData = {
    title: "Project Ideas",
    date: "Monday, 3/3/2025",
    shortDescription: "Interesting concept for a new web app using React and AI",
    fullDescription: "This innovative web application concept combines the power of React for frontend development with AI technologies to create a responsive and intelligent user experience. The application aims to solve common productivity challenges by leveraging machine learning algorithms to predict user behavior and preferences. By integrating React's component-based architecture with state-of-the-art AI models, we can create an intuitive interface that adapts to individual user needs.\n\nThe core features would include personalized dashboards, automated task prioritization, and smart content suggestions based on user activity patterns. The application would utilize natural language processing for improved search capabilities and sentiment analysis to gauge user satisfaction. React's virtual DOM would ensure optimal performance, while the AI components would run efficiently using WebAssembly or through API integrations with cloud-based services.\n\nFor the tech stack, we're considering React 18 with TypeScript for type safety, Redux for state management, and styled-components for the UI. The AI functionality could be implemented using TensorFlow.js for client-side processing or by connecting to services like OpenAI's API for more complex operations. The authentication system would use OAuth 2.0, and data would be stored in a combination of local storage and cloud databases depending on privacy requirements.\n\nNext steps include creating wireframes, setting up the development environment, and researching the most appropriate AI models for our specific use cases. We should also consider conducting user surveys to validate our assumptions about the problems we're trying to solve.",
    link: "https://react.dev",
    linkText: "Related Link"
  };

  if(! isCardModelOpen){
    return null;
  }
  
  return (
    <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-3xl max-h-screen overflow-y-auto">
            <div className="flex justify-between px-4 py-3 bg-blue-50 rounded-t-xl">
              <div className="flex gap-2 items-center text-gray-700">
                <div className="text-blue-600">
                  <Journal />
                </div>
                <h2 className="text-xl font-semibold">{projectData.title}</h2>
              </div>
              <button 
                // onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-blue-100"
              >
                <Cross />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex gap-2 text-gray-700 items-center mb-4">
                <Calendar />
                <div>{projectData.date}</div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Description</h3>
                <div className="text-gray-700 whitespace-pre-line">
                  {projectData.fullDescription}
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="flex gap-2 items-center">
                  <ExternalLink />
                  <a 
                    href={projectData.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {projectData.linkText}
                  </a>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button 
                //   onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
