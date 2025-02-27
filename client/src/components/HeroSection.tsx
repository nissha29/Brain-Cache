import Home from '../assets/home.png' 
import { Button } from './Button'
import { SignupModelStatus } from '../store/atoms/SignupModelStatus';  
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Signup } from './Signup';
import { SigninModelStatus } from '../store/atoms/SigninModelStatus';

export default function HeroSection() {
    const setIsSignupModelOpen = useSetRecoilState(SignupModelStatus);
    const isSigninModelOpen = useRecoilValue(SigninModelStatus);

    return (
        <div className="flex justify-between mx-24 mt-60 items-center">
            <div className="flex flex-col gap-5 w-full">
                <div className="text-6xl font-bold text-gray-700">Never Lose<span className="text-blue-600"> What Matters</span></div>
                <div className="mt-1 pl-2 max-w-2xl text-lg text-gray-700/80 leading-relaxed">
                    Seamlessly store tweets that inspire you, LinkedIn posts worth revisiting, articles that changed your perspective, important links, random thoughts, and those moments of genius that strike when you least expect them.
                </div>
                <div className='flex gap-4 mt-2'>
                    <div className={`z-0 ${isSigninModelOpen ? `blur-sm`: ``}`}>
                        <Button variant='primary' text='Get Started' size='lg' onClick={()=>setIsSignupModelOpen(true)}/>
                    </div>
                    <div className={`z-0 ${isSigninModelOpen ? `blur-sm`: ``}`}>
                        <Button variant='secondary' text='Watch Demo' size='lg'/>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <img src={Home} className="w-[200%] h-full border border-gray-200 rounded-xl" alt="" />
            </div>
            <Signup />
        </div>
    );
}