import React from 'react';

const ProductMatcher = ({ products, scannedText, onMatch }) => {
  const findMatches = () => {
    // Normalizamos el texto escaneado
    const normalizedScanned = scannedText.toLowerCase()
      .replace(/[.,]/g, '')
      .trim();

    return products.filter(product => {
      const normalizedProduct = product.name.toLowerCase();
      return (
        (normalizedProduct.includes('harina') || normalizedProduct.includes('fideo')) &&
        normalizedScanned.includes(normalizedProduct.substring(0, 10)) &&
        normalizedScanned.length > 5
      );
    });
  };

  const matches = findMatches();

  return (
    <div className="px-6 mt-4">
      {matches.length > 0 ? (
        <div className="space-y-2">
          <h3 className="font-medium">Productos detectados:</h3>
          {matches.map(product => (
            <div key={product.id} className="bg-gray-100 p-3 rounded-lg">
              <p>{product.name}</p>
              <button 
                onClick={() => onMatch(product)}
                className="mt-2 bg-black text-white px-3 py-1 rounded text-sm"
              >
                Confirmar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No se encontraron productos coincidentes</p>
      )}
    </div>
  );
};

export default ProductMatcher;