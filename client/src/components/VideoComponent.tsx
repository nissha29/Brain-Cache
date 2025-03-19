import Brain_Cache from '../assets/Brain-cache.mp4';
import { useRecoilState } from 'recoil';
import { VideoComponentStatus } from '../store/atoms/videoComponentStatus';
import { Button } from './Button';

export default function VideoComponent() {
  const [isOpen, setIsOpen] = useRecoilState(VideoComponentStatus);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 w-full">
      <div className='fixed top-10 right-28 z-50'>
        <Button text='Close' size='lg' variant='primary' onClick={() => setIsOpen(false)} />
      </div>
      <div onClick={(e) => e.stopPropagation()} className='flex items-center justify-center mt-28'>
        <video
          src={Brain_Cache}
          controls
          width="70%"
          autoPlay={false}
          muted={false}
          playsInline
          className='rounded-xl'
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}