import React from 'react';
import './App.css';
import ProductsProvider from './stores/productsStore/index';

function App() {
  return (
    <div className="App">
      <ProductsProvider></ProductsProvider>
    </div>
  );
}

export default App;
