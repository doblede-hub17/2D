import React from 'react';

const PickingConfirmationModal = ({ detectedProducts, onConfirm, onCancel }) => {
  const totalItemsToDiscount = detectedProducts.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Confirmar Picking</h2>
          
          <div className="space-y-4">
            {detectedProducts.map((product, index) => (
              <div 
                key={index} 
                className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium text-sm">{product.name}</h3>
                  <p className="text-gray-600 text-xs">Cantidad: {product.quantity}</p>
                </div>
                <div 
                  className={`px-3 py-1 rounded-full text-xs font-bold 
                    ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                  {product.quantity > 0 ? 'Válido' : 'Sin Stock'}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-sm font-medium">Total de productos a descontar: {detectedProducts.length}</p>
            <p className="text-lg font-bold text-gray-800">Total unidades: {totalItemsToDiscount}</p>
          </div>

          <div className="mt-6 flex space-x-4">
            <button 
              onClick={onCancel}
              className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              Cancelar
            </button>
            <button 
              onClick={onConfirm}
              className="flex-1 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Confirmar Picking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickingConfirmationModal;