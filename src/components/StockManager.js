import React, { useState } from 'react';

const StockManager = ({ products, onStockUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditValue(product.quantity);
  };

  const handleSave = (id) => {
    const newQuantity = parseInt(editValue) || 0;
    onStockUpdate(id, newQuantity);
    setEditingId(null);
  };

  return (
    <div className="px-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Gestión de Stock</h2>
      <div className="space-y-3">
        {products.map(product => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center">
              <span className="font-medium">{product.name}</span>
              
              {editingId === product.id ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="w-24 px-3 py-1 border rounded"
                  />
                  <button 
                    onClick={() => handleSave(product.id)}
                    className="bg-black text-white px-3 py-1 rounded text-sm"
                  >
                    ✓
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 font-bold">{product.quantity} uds</span>
                  <button 
                    onClick={() => handleEdit(product)}
                    className="text-black px-3 py-1 rounded border text-sm"
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockManager;