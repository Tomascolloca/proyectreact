import React from 'react';
import './paymentform.css';

const PaymentForm = ({ allProducts, setAllProducts }) => {
  const handleCheckout = () => {
    
    alert('Compra finalizada'); 
    
    console.log("Productos en PaymentForm:", allProducts); // Asegúrate de que este log esté aquí

    // Limpia el carrito después de la compra
    setAllProducts([]);
  };

  return (
    <div>
      <h2 className="payment-heading">Detalles de Pago</h2>
      <form className="payment-form">
        {/* Mostrar la lista de productos seleccionados */}
        {allProducts.length > 0 ? (
          <div className="selected-products">
            <h3>Productos Seleccionados:</h3>
            <ul>
              {allProducts.map((product) => (
                <li key={product.id}>
                  {product.nameProduct} - ${product.precio} - Cantidad: {product.cantidad}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p></p>
        )}

        <div className="input-container">
          <label htmlFor="nombre" className="label">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingrese su nombre"
            className="input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="apellido" className="label">
            Apellido:
          </label>
          <input
            type="text"
            id="apellido"
            placeholder="Ingrese su apellido"
            className="input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su email"
            className="input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="direccion" className="label">
            Dirección de Envío:
          </label>
          <input
            type="text"
            id="direccion"
            placeholder="Ingrese su dirección de envío"
            className="input"
          />
        </div>
      </form>
      <h3>Forma de Pago:</h3>
      <div className="payment-methods">
        <label className="radio-label">
          <input type="radio" name="formaPago" value="efectivo" />
          Efectivo
        </label>
        <label className="radio-label">
          <input type="radio" name="formaPago" value="tarjeta" />
          Tarjeta de Crédito
        </label>
      </div>
      {/*  información de los productos seleccionados desde "allProducts" */}
      <button onClick={handleCheckout} className="checkout-button">
        Finalizar Compra
      </button>
    </div>
  );
};

export default PaymentForm;
