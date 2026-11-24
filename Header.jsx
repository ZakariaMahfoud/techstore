import React from 'react';
function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>⚡ TechStore</h1>
      <div className="cart">🛒 Panier : {cartCount}</div>
    </header>
  );
}

export default Header;