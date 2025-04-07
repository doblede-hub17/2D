import React from 'react';

const DailyReportExport = ({ outputs }) => {
  const exportToCSV = () => {
    const csvContent = [
      'Producto,Cantidad',
      ...outputs.map(item => `"${item.name}",${item.quantity}`)
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `reporte_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="px-6 mt-6">
      <button 
        onClick={exportToCSV}
        className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Exportar Reporte Diario</span>
      </button>
    </div>
  );
};

export default DailyReportExport;