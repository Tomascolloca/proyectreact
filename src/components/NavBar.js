import React, { useState } from 'react';
import './Button.css';
import CartWidget from './CartWidget';

function Navbar() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <nav className="navbar" style="background-color: #e3f2fd;">  
      <div className="container">
        <a className="navbar-brand" href="/">Tu Tienda</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/carrito">
                Carrito
                <span className="badge badge-pill badge-primary">{cartItemCount}</span>
              </a>
            </li>
            <li className="nav-item">
              <CartWidget cartItemCount={cartItemCount} toggleCartVisibility={toggleCartVisibility} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


