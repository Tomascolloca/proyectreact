import React, { useState } from 'react';
import './contacto.css'; // Importa el archivo CSS

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  // Agrega más estados para otros campos del formulario si es necesario

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega lógica para manejar el envío del formulario aquí
    console.log('Formulario enviado:', nombre); // Ejemplo: Mostrar el nombre en la consola
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3 className="contact-subheading">Información de Contacto</h3>
          <p><strong>Teléfono:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> info@tuempresa.com</p>
          <p><strong>Dirección:</strong> Calle Principal #123, Ciudad, País</p>
        </div>
        <div className="contact-item">
          <h3 className="contact-subheading">Horario de Atención</h3>
          <p><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Sábados:</strong> 10:00 AM - 2:00 PM</p>
          <p><strong>Domingos:</strong> Cerrado</p>
        </div>
      </div>
      <div className="contact-map">
        {/* Aquí puedes agregar un mapa de ubicación si es necesario */}
      </div>
      <h3 className="contact-subheading">Déjanos tu comentario:</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese su nombre"
          />
        </div>
        {/* Agrega más campos del formulario según sea necesario */}
        <div className="form-group">
          <label htmlFor="comentario">Comentario:</label>
          <textarea
            id="comentario"
            // Agrega un estado y un manejador para este campo si es necesario
            placeholder="Escriba su comentario aquí"
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
