import React, { useState } from 'react';

const EditStockModal = ({ product, onClose, onSave }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Editar Stock</h2>
        <p className="mb-2">{product.name}</p>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Cantidad:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancelar
          </button>
          <button
            onClick={() => onSave(product.id, quantity)}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStockModal;