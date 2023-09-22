import React from 'react';
import './paymentform.css';

const PaymentForm = () => {
  const handleCheckout = () => {
    // Agregar lógica para finalizar la compra aquí
    alert('Compra finalizada'); // Ejemplo: Mostrar un mensaje de alerta
  };

  return (
    <div>
      <h2 className="payment-heading">Detalles de Pago</h2>
      <form className="payment-form">
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
      <button onClick={handleCheckout} className="checkout-button">
        Finalizar Compra
      </button>
    </div>
  );
};

export default PaymentForm;
