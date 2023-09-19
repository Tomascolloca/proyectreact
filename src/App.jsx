import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  const [allProducts, setAllProducts] = useState([]);

  return (
    <>
      {/* Navbar de Bootstrap personalizado */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Tu Tienda</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/carrito">Carrito</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido de la página */}
      <div className="container">
        <Header allProducts={allProducts} setAllProducts={setAllProducts} />
        <ProductList allProducts={allProducts} setAllProducts={setAllProducts} />
      </div>
    </>
  );
}

export default App;

