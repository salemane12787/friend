import React from 'react';
import StepContainer from './StepContainer';

interface ComponentsProps {
  onNext: () => void;
}

const features = [
  "Random Meme Delivery System",
  "Advanced Pun Engine (Beta)",
  "Unsolicited Music Recommendations",
  "Occasional Overthinking-as-a-Service",
  "Support for Deep, Meaningful Conversations",
  "Shared Spotify Playlist Integration",
  "Guaranteed 24-hour response time (except when sleeping)",
];

const Components: React.FC<ComponentsProps> = ({ onNext }) => {
  return (
    <StepContainer title="Choose Components">
      <h3 className="text-xl mb-2">Select Friendship Features</h3>
      <p className="text-base mb-6">The following components will be installed. (Note: All components are mandatory for optimal performance.)</p>
      <div className="bg-white border-2 border-solid border-gray-500 border-t-gray-700 border-l-gray-700 p-4 space-y-3 text-lg">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`feature-${index}`}
              className="h-4 w-4"
              checked
              disabled
            />
            <label htmlFor={`feature-${index}`} className="ml-3 text-black opacity-75 text-base">
              {feature}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={onNext}
          className="bg-gray-300 text-black text-2xl px-8 py-1 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-200 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white focus:outline-1 focus:outline-dotted"
        >
          Install
        </button>
      </div>
    </StepContainer>
  );
};

export default Components;