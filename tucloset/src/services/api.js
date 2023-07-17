import axios from "axios";

const API_URL = "http://localhost:5005";

export const getCart = async (cartId) => {
  try {
    const response = await axios.get(`${API_URL}/api/carts/${cartId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el carrito", error);
    throw error;
  }
};

export const deleteCartItem = async (cartId, itemId) => {
  try {
    await axios.delete(`${API_URL}/carts/${cartId}/items/${itemId}`);
  } catch (error) {
    console.error("Error al eliminar el artículo del carrito", error);
    throw error;
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el producto", error);
    throw error;
  }
};

export const createSession = async (userId, token) => {
  try {
    const response = await axios.post(`${API_URL}/api/sessions/login`, {
      userId,
      token,
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear la sesión", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/api/sessions/`);
    return response.data;
  } catch (error) {
    console.error("Error al cerrar la sesión", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    throw error;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear una cuenta", error);
    throw error;
  }
};

export const getAllProducts = async (name, description, price) => {
  try {
    const response = await axios.get(`${API_URL}/api/products`, {
      name,
      description,
      price,
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el producto", error);
    throw error;
  }
};

export const createProduct = async (productData, token) => {
  try {
    const response = await axios.post(`${API_URL}/api/products`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto", error);
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(
      `${API_URL}/api/products/${productId}`,
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el producto", error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_URL}/api/products/${productId}`);
  } catch (error) {
    console.error("Error al eliminar el producto", error);
    throw error;
  }
};

export const getAllCarts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/carts`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los carritos", error);
    throw error;
  }
};

export const getCartByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/api/carts/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el carrito", error);
    throw error;
  }
};

export const createCart = async (userId, items) => {
  try {
    const response = await axios.post(`${API_URL}/api/carts`, {
      userId,
      items,
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el carrito", error);
    throw error;
  }
};

export const updateCart = async (userId, cartData) => {
  try {
    const response = await axios.put(
      `${API_URL}/api/carts/${userId}`,
      cartData
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el carrito", error);
    throw error;
  }
};

export const deleteCart = async (userId) => {
  try {
    await axios.delete(`${API_URL}/api/carts/${userId}`);
  } catch (error) {
    console.error("Error al eliminar el carrito", error);
    throw error;
  }
};

export const addProductToCart = async (userId, productId) => {
  try {
    await axios.post(`${API_URL}/api/carts/addItem`, {
      userId,
      productId
    });
  } catch (error) {
    console.error("Error al agregar el producto al carrito", error);
    throw error;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};
