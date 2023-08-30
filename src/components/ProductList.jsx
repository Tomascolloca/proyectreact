// src/components/ProductList.jsx
import React, { useState } from 'react';
import { data } from '../data';

export const ProductList = ({ allProducts, setAllProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos'); // Estado para la categoría seleccionada

  // Función para cambiar la categoría seleccionada
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Función para filtrar los productos por categoría
  const filteredProducts = selectedCategory === 'Todos'
    ? data
    : data.filter((product) => product.categoria === selectedCategory);

  return (
    <div>
      {/* Agrega los botones de filtro */}
      <div>
        <button onClick={() => handleCategoryChange('Todos')}>Todos</button>
        <button onClick={() => handleCategoryChange('accesorios')}>Accesorios</button>
        <button onClick={() => handleCategoryChange('perfumeria')}>Perfumes</button>
        <button onClick={() => handleCategoryChange('zapatillas')}>Zapatillas</button>
        {/* Agrega más botones para otras categorías si es necesario */}
      </div>

      <div className='container-items'>
        {filteredProducts.map((product) => (
          <div className='item' key={product.id}>
            <figure>
              <img src={product.img} alt={product.nameProduct} />
            </figure>
            <div className='info-product'>
              <h2> {product.nameProduct}</h2>
              <p className='precio'> ${product.precio}</p>
              <button onClick={() => onAddProduct()}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
