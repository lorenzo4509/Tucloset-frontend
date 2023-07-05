import React, { useEffect, useState } from 'react';
import { getCart, deleteCartItem } from '../services/api';

const Cart = ({ cartId }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const fetchedCart = await getCart(cartId);
        setCart(fetchedCart);
      } catch (error) {
        // Manejar el error
      }
    };

    fetchCart();
  }, [cartId]);

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteCartItem(cartId, itemId);
      // Actualizar el carrito después de eliminar el artículo
      const updatedCart = await getCart(cartId);
      setCart(updatedCart);
    } catch (error) {
      // Manejar el error
    }
  };

  if (!cart) {
    return <div>Cargando carrito...</div>;
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Precio: {item.price}</p>
          <button onClick={() => handleDeleteItem(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
