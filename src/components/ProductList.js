import React, { useState } from 'react';

const ProductList = ({ products, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 mt-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-3 max-h-[60vh] overflow-y-auto">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">ID: {product.id}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`font-bold ${product.quantity < 500 ? 'text-red-500' : 'text-gray-600'}`}>
                  {product.quantity} uds
                </span>
                <button 
                  onClick={() => onEdit(product)}
                  className="bg-black text-white px-3 py-1 rounded text-sm"
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;