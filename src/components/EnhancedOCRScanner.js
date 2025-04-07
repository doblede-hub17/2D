import React, { useState, useRef } from 'react';

const EnhancedOCRScanner = ({ onScan }) => {
  const fileInputRef = useRef(null);

  const processImage = () => {
    // Simulación OCR mejorada
    const mockResults = [
      { name: 'Harina 000', quantity: 50 },
      { name: 'Fideo Tallarin', quantity: 30 }
    ];
    
    // Filtramos solo productos con harina/fideo
    const filtered = mockResults.filter(item => 
      item.name.toLowerCase().includes('harina') || 
      item.name.toLowerCase().includes('fideo')
    );
    
    onScan(filtered);
  };

  return (
    <div className="w-full px-6 mt-20">
      <input 
        type="file" 
        accept="image/*" 
        capture="environment"
        ref={fileInputRef}
        onChange={processImage}
        className="hidden"
      />
      <button 
        onClick={() => fileInputRef.current.click()}
        className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-3 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Escanear Hoja de Picking</span>
      </button>
    </div>
  );
};

export default EnhancedOCRScanner;