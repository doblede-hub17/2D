import React from 'react';

const ProcessingModal = ({ isProcessing }) => {
  if (!isProcessing) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 text-center">
        <div className="animate-spin w-12 h-12 mx-auto mb-4 border-4 border-black border-t-transparent rounded-full"></div>
        <p className="text-lg font-medium">Procesando imagen...</p>
      </div>
    </div>
  );
};

export default ProcessingModal;