import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, addProductToCart } from '../services/api';
import '../styles/Home.css';

const Home = ({ userId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log(response.products);
        setProducts(response.products);
      } catch (error) {
        console.log('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      await addProductToCart(userId, product._id);
    } catch (error) {
      console.log('Error al guardar en el carrito', error);
    }
  };

  return (
    <div className="container">
      <body>
        <h1 className="title">Bienvenido a Tucloset</h1>
        <h2 className="sectionTitle">Productos</h2>
        <div className="productList">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="productCard">
                <Link to={`/products/${product._id}`} className="productLink">
                  <h3 className="productName">{product.name}</h3>
                  <p className="productDescription">{product.description}</p>
                  <p className="productPrice">{product.price} $</p>
                  <p className="productQuantity">STOCK {product.quantity}</p>
                </Link>
                <button
                  className="addToCartButton"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            ))
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      </body>
    </div>
  );
};

export default Home;
