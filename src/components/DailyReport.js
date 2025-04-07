import React from 'react';

const DailyReport = ({ dailyOutputs }) => {
  return (
    <div className="px-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Reporte Diario de Salidas</h2>
      <div className="space-y-3">
        {dailyOutputs.map((output, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-sm"
          >
            <span className="font-medium">{output.name}</span>
            <span className="text-gray-600 font-bold">{output.quantity} uds</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyReport;