import { useEffect, useState } from 'react';
import { Cross } from '../icons/Cross';
import { Link } from '../icons/Link';
import { Button } from './Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ShareBrainModelStatus } from '../store/atoms/ShareBrainModelStatus';
import { sharingStatus } from '../store/atoms/sharingStatus';
import { useShare } from '../hooks/useShare';
import { shareLink } from '../store/atoms/shareLink';

export function ShareBrainModel(){
  const [isCopied, setIsCopied] = useState(false);
  const [isSharingEnabled, setIsSharingEnabled] = useRecoilState<boolean>(sharingStatus);
  const [isShareBrainModelOpen, setIsShareBrainModelOpen] = useRecoilState(ShareBrainModelStatus);
  const { fetchShareLink } = useShare();
  const shareLinkValue = useRecoilValue(shareLink);
  
  const handleCopyLink = async() => {
    try{
      await navigator.clipboard.writeText(shareLinkValue);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }catch(err){
      console.log(`error while copying text`);
    }
  };

  useEffect(()=>{
    if(isSharingEnabled) fetchShareLink(isSharingEnabled);
  },[isSharingEnabled])
  
  if(!isShareBrainModelOpen){
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4" onClick={()=>setIsShareBrainModelOpen(false)}>
      <div className="bg-white rounded-lg p-6 shadow-2xl max-w-md w-full transition-transform duration-300 transform" onClick={(e)=>e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-2xl text-gray-700">Share Your Brain</h2>
          <button 
            className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-100 hover:cursor-pointer"
            onClick={()=>setIsShareBrainModelOpen(false)}
          >
            <Cross />
          </button>
        </div>
        
        <div className="border-b border-gray-200 mb-4 pb-2"></div>
        
        <p className="text-gray-600 mb-4">
          {isSharingEnabled 
            ? "Your brain is currently shared. Others can access it with the link below."
            : "Enable sharing to generate a link that allows others to access your brain."}
        </p>
        
        <div className="flex gap-3 mb-6">
          <Button 
            variant={isSharingEnabled ? "primary" : "secondary"} 
            text={isSharingEnabled ? "Disable Sharing" : "Enable Sharing"} 
            size="md"
            onClick={()=>{
              const newSharingValue = !isSharingEnabled;
              setIsSharingEnabled(newSharingValue);
              fetchShareLink(newSharingValue);
            }}
          />
        </div>
        
        {isSharingEnabled && (
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Share link</span>
                <button 
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  <Link />
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>
              
              <div className="relative">
                <input 
                  className="w-full py-2 px-3 pr-10 border border-gray-300 rounded-md bg-white text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  type="text" 
                  value={shareLinkValue} 
                  readOnly
                />
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              Anyone with this link will be able to view your brain's content.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShareBrainModel;