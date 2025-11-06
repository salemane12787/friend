import React from 'react';

interface StepContainerProps {
  title: string;
  children: React.ReactNode;
}

const StepContainer: React.FC<StepContainerProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-2xl bg-gray-300 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 p-1 shadow-lg">
      <div className="bg-blue-800 text-white flex items-center justify-between px-2 py-1">
        <h2 className="text-xl">{title}</h2>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 bg-gray-300 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 flex items-center justify-center font-bold text-black">_</div>
          <div className="w-5 h-5 bg-gray-300 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 flex items-center justify-center font-bold text-black">[ ]</div>
          <div className="w-5 h-5 bg-gray-300 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 flex items-center justify-center font-bold text-black">X</div>
        </div>
      </div>
      <div className="p-6 md:p-8 text-black">
        {children}
      </div>
    </div>
  );
};

export default StepContainer;