import React, { useEffect, useState } from "react";
import axios from "axios";
import { createProduct, updateProduct, deleteProduct, getAllProducts } from "../services/api";
import "../styles/UserProfile.css";

const API_URL = "http://localhost:5005";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [showMyProducts, setShowMyProducts] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/user/${userId}`);
        const res = await getAllProducts();
        const products = res.products.filter(product => product.shopper === userId)
        setUser({...response, products});
      } catch (error) {
        console.error("Error al obtener la información del usuario", error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleAddProduct = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await createProduct(newProduct, token);
      setUser((prevUser) => ({
        ...prevUser,
        products: prevUser.products ? [...prevUser.products, response.product] : [],
      }));
      setNewProduct({
        name: "",
        description: "",
        price: "",
        quantity: "",
      });
    } catch (error) {
      console.error("Error al agregar el producto", error);
    }
  };

  const handleEditProduct = (productId) => {
    const productToEdit = user.products.find(
      (product) => product._id === productId
    );
    setEditingProduct(productToEdit);
  };

  const handleUpdateProduct = async () => {
    try {
      await updateProduct(editingProduct._id, editingProduct);
      setUser((prevUser) => ({
        ...prevUser,
        products: prevUser.products.map((product) => {
          if (product._id === editingProduct._id) {
            return { ...editingProduct };
          }
          return product;
        }),
      }));
      setEditingProduct(null);
    } catch (error) {
      console.error("Error al actualizar el producto", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      setUser((prevUser) => ({
        ...prevUser,
        products: prevUser.products.filter(
          (product) => product._id !== productId
        ),
      }));
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  };

  const toggleShowMyProducts = () => {
    setShowMyProducts((prevState) => !prevState);
  };

  if (!user) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="userProfile">
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h3 className="optionsTitle">Opciones</h3>
      <button className="toggleButton" onClick={toggleShowMyProducts}>
        {showMyProducts ? "Ocultar Mis Productos" : "Mostrar Mis Productos"}
      </button>
      {showMyProducts && (
        <>
          <h3>Mis Productos</h3>
          {user.products.map((product) => (
            <div key={product.id} className="product">
              {editingProduct && editingProduct._id === product._id ? (
                <div>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        name: e.target.value,
                      })
                    }
                    className="editInput"
                  />
                  <input
                    type="text"
                    value={editingProduct.description}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        description: e.target.value,
                      })
                    }
                    className="editInput"
                  />
                  <input
                    type="text"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: e.target.value,
                      })
                    }
                    className="editInput"
                  />
                  <input
                    type="number"
                    value={editingProduct.quantity}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        quantity: e.target.value,
                      })
                    }
                    className="editInput"
                  />
                  <button className="saveButton" onClick={handleUpdateProduct}>Guardar</button>
                </div>
              ) : (
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                  <button className="editButton" onClick={() => handleEditProduct(product._id)}>
                    Editar
                  </button>
                  <button className="deleteButton" onClick={() => handleDeleteProduct(product._id)}>
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          ))}
        </>
      )}
      <h3>Productos</h3>
      <div className="newProduct">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="newInput"
        />
        <input
          type="text"
          placeholder="Descripción del producto"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          className="newInput"
        />
        <input
          type="text"
          placeholder="Precio del producto"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="newInput"
        />
        <input
          type="number"
          placeholder="Cantidad del producto"
          value={newProduct.quantity}
          onChange={(e) =>
            setNewProduct({ ...newProduct, quantity: e.target.value })
          }
          className="newInput"
        />
        <button className="addButton" onClick={handleAddProduct}>Agregar Producto</button>
      </div>
    </div>
  );
};

export default UserProfile;
