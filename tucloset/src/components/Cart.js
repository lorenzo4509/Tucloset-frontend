import React, { useEffect, useState } from "react";
import { getCart, deleteCartItem, getProductById } from "../services/api";
import "../styles/Cart.css";

const Cart = ({ userId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const fetchedCart = await getCart(userId);
        fetchedCart.items.forEach(async (item) => {
          const newItem = await getProductById(item.productId);
          setItems((prevState) => [...prevState, newItem.product]);
        });
       
      } catch (error) {
        // Manejar el error
      }
    };

    fetchCart();
  }, [userId]);

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteCartItem(userId, itemId);

      // Actualizar el carrito después de eliminar el artículo
      const updatedCart = await getCart(userId);
      setItems(updatedCart);
    } catch (error) {
      // Manejar el error
    }
  };

  if (items.length === 0) {
    return <div className="page">Cargando carrito...</div>;
  }

  return (
    <div className="cart">
      <h2 className="cartTitle">Carrito de compras</h2>
      {items.map((item) => (
        <div className="cartItem" key={item.id}>
          <div className="cartItemInfo">
            <h3 className="cartItemName">{item.name}</h3>
            <p className="cartItemPrice">Precio: {item.price}</p>
          </div>
          <button
            className="cartItemDelete"
            onClick={() => handleDeleteItem(item.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
