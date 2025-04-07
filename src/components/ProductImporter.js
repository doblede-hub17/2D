import React, { useState } from 'react';

const ProductImporter = ({ onImport }) => {
  const [importText, setImportText] = useState('');
  const [previewProducts, setPreviewProducts] = useState([]);

  const parseProducts = () => {
    const lines = importText.split('\n').filter(line => line.trim() !== '');
    const parsedProducts = lines.map((line, index) => ({
      id: index + 1,
      name: line.trim().toUpperCase(),
      quantity: 10000
    }));

    setPreviewProducts(parsedProducts);
  };

  const handleImport = () => {
    if (previewProducts.length > 0) {
      onImport(previewProducts);
      setImportText('');
      setPreviewProducts([]);
    }
  };

  return (
    <div className="px-6 mt-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Importar Productos</h2>
        
        <textarea
          rows="6"
          placeholder="Pega aquí el listado de productos (un producto por línea)"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black mb-4"
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
        />

        <div className="flex space-x-4">
          <button 
            onClick={parseProducts}
            className="flex-1 bg-gray-200 text-black py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Vista Previa
          </button>
          <button 
            onClick={handleImport}
            disabled={previewProducts.length === 0}
            className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
          >
            Importar Productos
          </button>
        </div>

        {previewProducts.length > 0 && (
          <div className="mt-6">
            <h3 className="font-bold mb-2">Vista Previa ({previewProducts.length} productos)</h3>
            <div className="max-h-64 overflow-y-auto border rounded-lg">
              {previewProducts.map(product => (
                <div 
                  key={product.id} 
                  className="px-4 py-2 border-b last:border-b-0 bg-gray-50 flex justify-between"
                >
                  <span>{product.name}</span>
                  <span className="text-gray-600">10,000 uds</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImporter;