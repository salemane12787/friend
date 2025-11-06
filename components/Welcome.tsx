import React from 'react';
import StepContainer from './StepContainer';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <StepContainer title="Friendship Installer v1.0">
      <div className="flex">
        <div className="mr-8 flex-shrink-0">
            <img src="https://img.icons8.com/plasticine/100/000000/monitor.png" alt="retro computer" width="96" height="96" />
        </div>
        <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl mb-4">Welcome to the Friendship Setup Wizard</h3>
            <p className="text-base md:text-lg mb-6">
                This wizard will install a new high-quality friendship on your system.
                <br />
                It is recommended that you close all other emotional applications before continuing.
            </p>
            <p className="text-base">Click "Next" to continue.</p>
        </div>
      </div>
      <div className="flex justify-end mt-8 border-t-2 border-gray-400 pt-4">
          <button
              onClick={onNext}
              className="bg-gray-300 text-black text-2xl px-8 py-1 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-200 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white focus:outline-1 focus:outline-black focus:outline-dotted"
          >
              Next &gt;
          </button>
      </div>
    </StepContainer>
  );
};

export default Welcome;