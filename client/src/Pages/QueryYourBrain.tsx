import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../store/atoms/authState';

export const QueryYourBrain: React.FC = () => {
  const [query, setQuery] = useState('');
  const auth = useRecoilValue(authState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Querying brain for:', query);
    setQuery('');
  };

  return (
    <div className="flex flex-col h-screen text-gray-700">

      <header className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <div className="text-blue-600 text-3xl font-bold hover:cursor-pointer"><span className="text-gray-700">Brain</span>Cache</div>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-medium text-2xl">
            {auth.user?.username.charAt(0).toUpperCase()}
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Query Your Brain
          </h2>

          <div className='px-10'>
            <form onSubmit={handleSubmit} className="relative mt-8">
              <div className="relative rounded-xl px-5">
                <textarea
                  className="w-full p-4 pr-12 bg-transparent outline-none resize-none text-gray-700 placeholder-gray-400 border border-gray-400 rounded-2xl"
                  placeholder="Query Brain"
                  // value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ minHeight: '60px' }}
                />
              </div>
            </form>
            <div className='w-full h-96 border border-gray-400 mt-5 rounded-2xl'>

            </div>
          </div>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>BrainCache can retrieve your stored information. <span className="underline cursor-pointer">Learn more</span>.</p>
      </footer>
    </div>
  );
};