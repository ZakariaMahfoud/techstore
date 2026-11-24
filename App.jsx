import React, { useState } from 'react';
import productsData from './data.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [cartCount, setCartCount] = useState(0);

  const categories = ['Tous', 'Phones', 'PlayStation', 'TVs'];

  // Si la catégorie est "Tous", afficher tous les produits.
  // Sinon, afficher seulement les produits de cette catégorie.
  const filteredProducts = selectedCategory === 'Tous'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  function addToCart(product) {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <main>
        <Hero />

        <h2 className="section-title">Nos produits</h2>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />
      </main>
    </div>
  );
}

export default App;