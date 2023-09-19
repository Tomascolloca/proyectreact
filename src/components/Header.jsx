import React, { useState } from 'react';
import './Button.css'
export default function Header({ allProducts, setAllProducts }) {
  const [cartVisible, setCartVisible] = useState(false);

  // Función para eliminar productos del carrito
  const removeFromCart = (productToRemove) => {
    const updatedCart = allProducts.filter((product) => product.id !== productToRemove.id);
    setAllProducts(updatedCart);
  };

  // Función para manejar el proceso de pago (puede ajustarse según tus necesidades)
  const handleCheckout = () => {
    // Puedes agregar aquí la lógica para procesar el pago y mostrar un mensaje de agradecimiento
    alert('Gracias por su compra');
    // Luego, puedes reiniciar el carrito si es necesario
    setAllProducts([]);
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
      <h1>Tienda</h1>

      <div className="container-icon">
        <div className='container-cart-icon' onClick={toggleCartVisibility}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            {/* Icono de carrito aquí */}

            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="icon-cart"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M3 4h1l2.68 10.97a2 2 0 002 1.56h8.24a2 2 0 002-1.56L20 4h1M9 14H7a2 2 0 01-2-2m0-4a2 2 0 012-2h10a2 2 0 012 2m-2 4h-2"
  ></path>
</svg>

          </svg>
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
