import React, { useState } from 'react';
import { data } from '../data';

export default function ProductList({ allProducts, setAllProducts }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const onAddProduct = (product) => {
    // Copia el carrito de compras actual
    const newCart = [...allProducts];

    // Verifica si el producto ya está en el carrito
    const existingProduct = newCart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.cantidad += 1; // Incrementa la cantidad si ya existe
    } else {
      newCart.push({ ...product, cantidad: 1 }); // Agrega el producto al carrito
    }

    // Actualiza el estado del carrito
    setAllProducts(newCart);
  };

  // Función para cambiar la categoría seleccionada
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
        {data
          .filter((product) => selectedCategory === 'Todos' || product.categoria === selectedCategory)
          .map((product) => (
            <div className='item' key={product.id}>
              <figure>
                <img src={product.img} alt={product.nameProduct} />
              </figure>
              <div className='info-product'>
                <h2>{product.nameProduct}</h2>
                <p className='precio'>${product.precio}</p>
                <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
