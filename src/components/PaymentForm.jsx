import React from 'react';

const PaymentForm = () => {
  const handleCheckout = () => {
    // Agregar lógica para finalizar la compra aquí
    alert('Compra finalizada'); // Ejemplo: Mostrar un mensaje de alerta
  };

  return (
    <div>
      <h2>Detalles de Pago</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" placeholder="Ingrese su nombre" />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" placeholder="Ingrese su apellido" />
        </div>
        {/* Agregar más campos de entrada según sea necesario */}
      </form>
      <h3>Forma de Pago:</h3>
      <div>
        <label>
          <input type="radio" name="formaPago" value="efectivo" />
          Efectivo
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="formaPago" value="tarjeta" />
          Tarjeta de Crédito
        </label>
      </div>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default PaymentForm;
