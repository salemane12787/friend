import React, { useState } from 'react';
import StepContainer from './StepContainer';
import Modal from './Modal';

interface LicenseProps {
  onNext: () => void;
}

const License: React.FC<LicenseProps> = ({ onNext }) => {
  const [showModal, setShowModal] = useState(false);

  const licenseText = `FRIENDSHIP LICENSE AGREEMENT
-----------------------------

PLEASE READ THE FOLLOWING TERMS AND CONDITIONS CAREFULLY.

By clicking "I Agree", you, hereafter referred to as "The Friend", consent to enter into a platonic, non-binding, and hopefully awesome friendship.

1.  PROVISION OF MEMES: The Friend agrees to a regular exchange of high-quality, potentially niche, and contextually appropriate memes.
2.  SUPPORT PROTOCOLS: Both parties agree to provide technical and emotional support for minor life bugs, feature requests (e.g., "Can you listen to me vent?"), and system crashes.
3.  COMMUNICATION: Asynchronous communication is permitted and encouraged. Response times may vary. Acknowledgment of messages with a reaction emoji is considered a valid handshake.
4.  SHARED INTERESTS: You consent to the potential discovery of new hobbies, TV shows, and music, which may consume your free time. We are not liable for any resulting obsessions.
5.  UPDATES & PATCHES: The friendship may receive periodic updates, including but not limited to inside jokes, shared memories, and evolving conversational topics.

This agreement is valid until one party ghosts the other, which is highly discouraged.
`;

  return (
    <StepContainer title="License Agreement">
      <h3 className="text-xl mb-2">Terms and Conditions</h3>
      <p className="text-base mb-4">Please read the following license agreement. You must accept the terms to continue.</p>
      <textarea
        readOnly
        className="w-full h-64 bg-white text-black p-2 border-2 border-solid border-gray-500 border-t-gray-700 border-l-gray-700 text-sm focus:outline-none"
        value={licenseText}
      />
      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gray-300 text-black text-xl px-6 py-1 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-200 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white focus:outline-1 focus:outline-dotted"
        >
          I Do Not Agree
        </button>
        <button
          onClick={onNext}
          className="bg-gray-300 text-black text-xl px-6 py-1 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-200 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white focus:outline-1 focus:outline-dotted"
        >
          I Agree
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <div className="flex items-center">
              <div className="w-12 h-12 flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-red-600"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" /></svg>
              </div>
              <div className="text-left">
                  <p className="text-lg text-black">Friendship protocol requires acceptance.</p>
                  <p className="text-lg text-black">Resistance is futile. (But also, please be my friend?)</p>
              </div>
            </div>
        </Modal>
      )}
    </StepContainer>
  );
};

export default License;