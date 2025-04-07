import React, { useState, useRef } from 'react';
import ProductMatcher from './ProductMatcher';

const AdvancedOCRScanner = ({ products, onScanComplete }) => {
  const [scannedText, setScannedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  const simulateOCR = (imageData) => {
    setIsProcessing(true);
    // Simulación de OCR - en producción sería una llamada a API
    setTimeout(() => {
      const mockResults = "HARINA DE TRIGO 000\nCantidad: 50\n\nFIDEOS TALLARIN\nCantidad: 30";
      setScannedText(mockResults);
      setIsProcessing(false);
    }, 1500);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        simulateOCR(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductMatch = (product) => {
    // Extraer cantidad del texto escaneado
    const quantityMatch = scannedText.match(new RegExp(`${product.name}.*?(\\d+)`, 'i'));
    const quantity = quantityMatch ? parseInt(quantityMatch[1]) : 0;
    
    if (quantity > 0) {
      onScanComplete({
        productId: product.id,
        productName: product.name,
        quantity: quantity
      });
      setScannedText('');
    }
  };

  return (
    <div className="w-full px-6 mt-6">
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

      {isProcessing && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
          <p>Procesando imagen...</p>
        </div>
      )}

      {scannedText && !isProcessing && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">Texto detectado:</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <pre className="whitespace-pre-wrap">{scannedText}</pre>
          </div>
          
          <ProductMatcher 
            products={products} 
            scannedText={scannedText} 
            onMatch={handleProductMatch}
          />
        </div>
      )}
    </div>
  );
};

export default AdvancedOCRScanner;