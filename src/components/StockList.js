import React from 'react';

const StockList = ({ stock }) => {
  return (
    <div className="px-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Inventario Actual</h2>
      <div className="space-y-3">
        {stock.map(item => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-sm"
          >
            <span className="font-medium">{item.name}</span>
            <span className="text-gray-600 font-bold">{item.quantity} uds</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockList;