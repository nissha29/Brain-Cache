import { Calendar } from "../icons/Calendar";
import { ExternalLink } from "../icons/ExternalLink";
import { Journal } from "../icons/Journal";
import { Cross } from '../icons/Cross';
import { useRecoilState } from "recoil";
import { CurrentCardModelDisplay } from "../store/atoms/CurrentCardModelDisplay";
import { NoteProps } from "../types/NoteProps";

export function CardModel() {
  const [currentCardModel, setCurrentCardModel] = useRecoilState<NoteProps | null>(CurrentCardModelDisplay);

  if(! currentCardModel){
    return null;
  }
  
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="px-4 py-3">
          <div className="bg-white rounded-xl w-full max-w-3xl max-h-screen overflow-y-auto">
            <div className="flex justify-between px-4 py-3 bg-blue-50 rounded-t-xl">
              <div className="flex gap-2 items-center text-gray-700">
                <div className="text-blue-600">
                  <Journal />
                </div>
                <h2 className="text-xl font-semibold">{currentCardModel.title}</h2>
              </div>
              <button 
                onClick={()=>setCurrentCardModel(null)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-blue-100"
              >
                <Cross />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex gap-2 text-gray-700 items-center mb-4">
                <Calendar />
                <div>{currentCardModel.createdAt}</div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Description</h3>
                <div className="text-gray-700 whitespace-pre-line">
                  {currentCardModel.description}
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="flex gap-2 items-center">
                  <ExternalLink />
                  <a 
                    href={currentCardModel.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Related Link
                  </a>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button 
                  onClick={()=>setCurrentCardModel(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
