import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import ProductListItem from './components/ProductListItem';
import ProductSearch from './components/ProductSearch';
import EditStockModal from './components/EditStockModal';
import OCRProcessing from './components/OCRProcessing';
import ProductImporter from './components/ProductImporter';
import LocalStorageManager from './components/LocalStorageManager';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedProducts = LocalStorageManager.loadProducts();
    if (savedProducts.length > 0) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      LocalStorageManager.saveProducts(products);
    }
  }, [products]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImportProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const handleEditStock = (productId, newQuantity) => {
    setProducts(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    setEditingProduct(null);
  };

  const handleProcessPicking = (pickingItems) => {
    setProducts(prev => 
      prev.map(product => {
        const pickedItem = pickingItems.find(item => item.id === product.id);
        return pickedItem 
          ? { ...product, quantity: Math.max(0, product.quantity - pickedItem.quantity) }
          : product;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <LayoutHeader title="StockMaster Pro" />
      
      <ProductImporter onImport={handleImportProducts} />
      
      <OCRProcessing 
        products={products} 
        onProcess={handleProcessPicking} 
      />
      
      <ProductSearch onSearch={setSearchTerm} />
      
      <div className="px-6">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h2 className="text-xl font-bold text-gray-800">Total de productos: {filteredProducts.length}</h2>
        </div>
        
        <div className="space-y-3">
          {filteredProducts.map(product => (
            <ProductListItem 
              key={product.id} 
              product={product} 
              onEdit={setEditingProduct}
            />
          ))}
        </div>
      </div>
      
      {editingProduct && (
        <EditStockModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleEditStock}
        />
      )}
    </div>
  );
};

export default App;

// DONE