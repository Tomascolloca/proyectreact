import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import PaymentForm from './components/PaymentForm';
import Contacto from './components/contacto'; // Importa el componente Contacto

function App() {
  const [allProducts, setAllProducts] = useState([]);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            ALL TITUD
          </a>
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
              <li className="nav-item">
                <Link to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/pago">Pago</Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto">Contacto</Link> {/* Actualiza el enlace */}
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header allProducts={allProducts} setAllProducts={setAllProducts} />
                  <ProductList allProducts={allProducts} setAllProducts={setAllProducts} />
                </div>
              }
            />
            <Route path="/pago" element={<PaymentForm />} />
            <Route path="/contacto" element={<Contacto />} /> {/* Actualiza esta ruta */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
