import React, { useState, useRef } from 'react';
import PickingConfirmationModal from './PickingConfirmationModal';

const OCRProcessing = ({ products, onProcess }) => {
  const fileInputRef = useRef(null);
  const [detectedProducts, setDetectedProducts] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const simulateOCR = () => {
    // Simulación de OCR con productos del sistema
    const mockResults = [
      { 
        id: 5, 
        name: 'FIDEOS SPAGHETTI PAQUETE 500 GR', 
        quantity: 50 
      },
      { 
        id: 1, 
        name: 'HARINA DE TRIGO 000 BOLSA 25 KG', 
        quantity: 30 
      }
    ];

    const validProducts = mockResults.filter(scannedItem => 
      products.some(p => 
        p.id === scannedItem.id && 
        p.quantity >= scannedItem.quantity
      )
    );

    setDetectedProducts(validProducts);
    setShowConfirmation(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      simulateOCR();
    }
  };

  const handleConfirmPicking = () => {
    onProcess(detectedProducts);
    setShowConfirmation(false);
    setDetectedProducts([]);
  };

  return (
    <div className="px-6 mt-6">
      <input 
        type="file" 
        accept="image/*" 
        capture="environment"
        ref={fileInputRef}
        onChange={handleImageUpload}
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

      {showConfirmation && (
        <PickingConfirmationModal 
          detectedProducts={detectedProducts}
          onConfirm={handleConfirmPicking}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default OCRProcessing;