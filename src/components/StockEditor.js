import React, { useState } from 'react';

const StockEditor = ({ products, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditValue(product.quantity.toString());
  };

  const handleSave = (id) => {
    onUpdate(id, parseInt(editValue) || 0);
    setEditingId(null);
  };

  return (
    <div className="px-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Editor de Stock</h2>
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
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <button 
                    onClick={() => handleSave(product.id)}
                    className="bg-black text-white px-3 py-1 rounded"
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 font-bold">{product.quantity} uds</span>
                  <button 
                    onClick={() => handleEdit(product)}
                    className="text-black px-3 py-1 rounded border"
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

export default StockEditor;