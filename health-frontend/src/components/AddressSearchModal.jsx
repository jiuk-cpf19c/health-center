import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressSearchModal = ({ onComplete, onClose }) => {
  const handleComplete = (data) => {
    const fullAddress = data.address;
    onComplete(fullAddress);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
        <DaumPostcode onComplete={handleComplete} />
        <button onClick={onClose} className="mt-2 text-sm text-gray-600 hover:underline">닫기</button>
      </div>
    </div>
  );
};

export default AddressSearchModal;
