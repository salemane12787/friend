import React, { useState, useEffect } from 'react';
import StepContainer from './StepContainer';

interface InstallationProps {
  onNext: () => void;
}

const statusMessages = [
  "Initializing friendship protocols...",
  "Compiling dad jokes...",
  "Calibrating humor sensors...",
  "Downloading inside jokes (template pack)...",
  "Defragmenting emotional baggage...",
  "Establishing secure meme channel...",
  "Ensuring mutual weirdness compatibility...",
  "Buffering sincerity...",
  "Finalizing installation...",
  "Engaging friendship.exe...",
];

const Installation: React.FC<InstallationProps> = ({ onNext }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(statusMessages[0]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onNext, 1000); 
          return 100;
        }
        return prev + 1;
      });
    }, 80);

    const statusInterval = setInterval(() => {
      setStatus(statusMessages[Math.floor(Math.random() * statusMessages.length)]);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StepContainer title="Installing Friendship...">
      <h3 className="text-xl mb-4">Please wait while the friendship is installed.</h3>
      <p className="text-base mb-6">This may take a moment. Do not turn off your computer or your newfound sense of camaraderie.</p>
      
      <div className="w-full bg-white border-2 border-solid border-gray-500 border-t-gray-700 border-l-gray-700 p-1">
        <div 
          className="bg-blue-700 h-6 transition-all duration-100 ease-linear text-right px-2 text-white"
          style={{ width: `${progress}%` }}
        >
         {progress > 5 && `${progress}%`}
        </div>
      </div>
      
      <div className="text-left text-base h-6 mt-4">
        <p>{status}</p>
      </div>
    </StepContainer>
  );
};

export default Installation;