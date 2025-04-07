import React, { useState, useEffect } from 'react';

const LocalStorageManager = {
  saveProducts: (products) => {
    localStorage.setItem('stockMasterProducts', JSON.stringify(products));
  },
  
  loadProducts: () => {
    const savedProducts = localStorage.getItem('stockMasterProducts');
    return savedProducts ? JSON.parse(savedProducts) : [];
  },

  clearProducts: () => {
    localStorage.removeItem('stockMasterProducts');
  }
};

export default LocalStorageManager;