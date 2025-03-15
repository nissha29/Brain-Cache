import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authState } from '../store/atoms/authState';
import { ArrowUp } from '../icons/ArrowUp';
import { AccountModelStatus } from '../store/atoms/AccountModelStatus';
import { AccountModel } from '../components/AccountModel';
import { useQuery } from '../hooks/useQuery';
import { Loader } from '../icons/Loader';

export const QueryYourBrain: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const auth = useRecoilValue(authState);
  const [IsAccountModelOpen, setIsAccountModelOpen] = useRecoilState(AccountModelStatus);
  const { fetchAiResponse } = useQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await fetchAiResponse(query);
    setIsLoading(false);
    setResponse(result);
    setQuery('');
  };

  return (
    <div className="flex flex-col h-screen text-gray-700">

      <header className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <div className="text-blue-600 text-3xl font-bold hover:cursor-pointer"><span className="text-gray-700">Brain</span>Cache</div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-medium text-2xl hover:cursor-pointer" onClick={() => setIsAccountModelOpen(prev => !prev)}>
            {auth.user?.username.charAt(0).toUpperCase()}
          </div>
          {IsAccountModelOpen && <div className="fixed right-14 top-20">
            <AccountModel />
          </div>}
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Query Your Brain
          </h2>

          <div className='px-10'>
            <form className="relative mt-8">
              <div className="relative rounded-xl px-5 flex items-center">
                <textarea
                  className="w-full p-4 pr-12 bg-transparent outline-none resize-none text-gray-700 placeholder-gray-400 border-2 border-gray-400 rounded-2xl scrollbar-none"
                  placeholder="Query Brain"
                  rows={1}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ minHeight: '60px' }}
                />
                <div className='absolute right-9 bg-blue-600 rounded-full p-1 hover:cursor-pointer' onClick={handleSubmit}>
                  <ArrowUp />
                </div>
              </div>
            </form>
            <div className='w-full h-96 border border-gray-400 mt-5 rounded-2xl py-2 px-3'>
              {isLoading
                ?
                <div className='flex gap-2'>
                  <div className='animate-spin'><Loader /></div>
                  Thinking....
                </div>
                :
                <div className='overflow-y-scroll h-[22rem] py-1 flex justify-center scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-200'>
                  {response}
                </div>
              }
            </div>
          </div>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>BrainCache can retrieve your stored information.</p>
      </footer>
    </div>
  );
};