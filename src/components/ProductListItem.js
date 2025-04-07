import React from 'react';

const ProductListItem = ({ product, onEdit }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-3">
      <div className="flex justify-between items-center">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
          <p className="text-sm text-gray-500">ID: {product.id}</p>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <span className={`font-bold text-lg ${product.quantity < 500 ? 'text-red-500' : 'text-gray-600'}`}>
            {product.quantity.toLocaleString()} uds
          </span>
          <button 
            onClick={() => onEdit(product)}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;