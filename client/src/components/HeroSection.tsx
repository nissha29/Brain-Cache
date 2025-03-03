import Home from '../assets/home.png' 
import { Button } from './Button'
import { SignupModelStatus } from '../store/atoms/SignupModelStatus';  
import { useSetRecoilState } from 'recoil';
import { Signup } from './Signup';

export default function HeroSection() {
    const setIsSignupModelOpen = useSetRecoilState(SignupModelStatus);

    return (
        <div className="flex flex-col gap-20 justify-center mt-60 items-center">
            <div className="flex flex-col gap-5 w-full justify-center items-center">
                <div className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold text-gray-700">Never Lose<span className="text-blue-600"> What Matters</span></div>
                <div className="mt-1 px-4 md:px-2 max-w-2xl mtext-lg text-gray-700/80 leading-relaxed text-center">
                    Seamlessly store tweets that inspire you, LinkedIn posts worth revisiting, articles that changed your perspective, important links, random thoughts, and those moments of genius that strike when you least expect them.
                </div>
                <div className='flex flex-col items-center justify-center sm:flex-row gap-4 mt-2'>
                    <div>
                        <Button variant='primary' text='Get Started' size='lg' onClick={()=>setIsSignupModelOpen(true)} isLoading={false}/>
                    </div>
                    <div>
                        <Button variant='secondary' text='Watch Demo' size='lg' isLoading={false}/>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={Home} className="w-[95%] xl:w-[85%] h-full border border-gray-200 hover:shadow-blue-400 rounded-md shadow-xl shadow-blue-300" alt="" />
            </div>
            <Signup />
        </div>
    );
}