import React, { useState, useEffect } from 'react';
import { getProduct } from '../services/api';

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProduct(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        // Manejar el error
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Cargando producto...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default Product;