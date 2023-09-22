import React, { useState } from 'react';
import './Button.css';

export default function Header({ allProducts, setAllProducts }) {
  const [cartVisible, setCartVisible] = useState(false);

  const removeFromCart = (productToRemove) => {
    const updatedCart = allProducts.filter((product) => product.id !== productToRemove.id);
    setAllProducts(updatedCart);
  };

  const handleCheckout = () => {
    alert('Gracias por su compra');
    setAllProducts([]); // Reiniciar el carrito
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const calcularTotal = () => {
    let total = 0;
    for (const product of allProducts) {
      total += product.precio * product.cantidad;
    }
    return total;
  };

  return (
    <header>
      <h1>Categorias</h1>

      <div className="container-icon">
        <div className='container-cart-icon' onClick={toggleCartVisibility}>
          <div className="cart-icon">
            {/* SVG aquí */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
            </svg>
          </div>
          <div className="count-products">
            <span id="contador-productos">{allProducts.length}</span>
          </div>
        </div>
      </div>

      {cartVisible && (
        <div className={`container-cart-products`}>
          {allProducts.length ? (
            <div>
              {allProducts.map((product) => (
                <div className='cart-product' key={product.id}>
                  <div className='info-cart-product'>
                    <h3 className='titulo-producto-carrito'>{product.nameProduct}</h3>
                    <p className='precio-producto-carrito'>${product.precio}</p>
                    <p className='cantidad-producto-carrito'>{product.cantidad}x</p>
                  </div>
                  <button
                    className="custom-button custom-button-delete"
                    onClick={() => removeFromCart(product)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
              <div className='cart-total'>
                <h3>Total:</h3>
                <span className="total-pagar">${calcularTotal()}</span>
              </div>
              <button
                className="custom-button custom-button-checkout"
                onClick={() => handleCheckout()}
              >
                Pagar
              </button>
            </div>
          ) : (
            <p className='cart-empty'>El carrito está vacío</p>
          )}
        </div>
      )}
    </header>
  );
}
