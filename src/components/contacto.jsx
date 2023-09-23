import React, { useState } from 'react';
import './contacto.css'; // Importa el archivo CSS

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState(''); // Agrega estado para el campo de comentario

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar lógica para enviar el comentario a tu backend si es necesario.
    
    // Muestra el alert
    alert('Comentario enviado');
    
    // Limpia los campos del formulario
    setNombre('');
    setComentario('');
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      {/* ... Información de contacto ... */}
    
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
        <div className="form-group">
          <label htmlFor="comentario">Comentario:</label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Escriba su comentario aquí"
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
