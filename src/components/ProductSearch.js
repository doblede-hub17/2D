import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="px-6 mb-6 sticky top-16 bg-gray-50 pt-4 pb-4 z-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar producto por nombre o ID..."
          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
          value={searchTerm}
          onChange={handleSearch}
        />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-400 absolute right-3 top-3.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

export default ProductSearch;