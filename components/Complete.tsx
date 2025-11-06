import React from 'react';
import StepContainer from './StepContainer';

const Complete: React.FC = () => {
  return (
    <StepContainer title="Installation Complete!">
      <div className="text-center">
        <h3 className="text-3xl mb-4">Success!</h3>
        <p className="text-xl mb-6">
          The 'Friendship' software has been successfully installed.
        </p>

        <div className="flex items-center text-left text-base bg-gray-200 p-4 border-2 border-solid border-gray-400 border-t-gray-500 border-l-gray-500 mb-8">
          <svg className="w-16 h-16 text-blue-600 mx-auto mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <p>
              Jokes aside, this is just a silly way of saying I'm really glad we met and I'm super excited for our friendship to 'install' and grow. 
            </p>
            <p className="mt-4">
              Looking forward to getting to know you better!
            </p>
          </div>
        </div>

        <div className="flex justify-end">
            <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-300 text-black text-2xl px-8 py-1 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-200 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white focus:outline-1 focus:outline-dotted"
            >
            Finish
            </a>
        </div>
      </div>
    </StepContainer>
  );
};

export default Complete;