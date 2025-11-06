import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-sm bg-gray-300 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 p-1">
        <div className="bg-blue-800 text-white flex items-center justify-between px-2 py-1">
          <h2 className="text-lg">System Alert</h2>
           <div onClick={onClose} className="w-5 h-5 bg-gray-300 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 flex items-center justify-center font-bold text-black cursor-pointer">X</div>
        </div>
        <div className="p-6">
            {children}
            <div className="mt-6 flex justify-center">
                <button
                onClick={onClose}
                className="bg-gray-300 text-black text-xl px-10 py-1 border-2 border-solid border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-200 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white focus:outline-1 focus:outline-dotted"
                >
                OK
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;