import axios from 'axios';

const API_URL = 'http://localhost:5005';

export const getCart = async (cartId) => {
  try {
    const response = await axios.get(`${API_URL}/carts/${cartId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el carrito', error);
    throw error;
  }
};

export const deleteCartItem = async (cartId, itemId) => {
  try {
    await axios.delete(`${API_URL}/carts/${cartId}/items/${itemId}`);
  } catch (error) {
    console.error('Error al eliminar el artículo del carrito', error);
    throw error;
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el producto', error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión', error);
    throw error;
  }
};

export const signup = async (name, password, email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, { name, password, email });
    return response.data;
  } catch (error) {
    console.error('Error al crear una cuenta', error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos', error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el producto', error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el producto', error);
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_URL}/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el producto', error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_URL}/products/${productId}`);
  } catch (error) {
    console.error('Error al eliminar el producto', error);
    throw error;
  }
};

export const getAllCarts = async () => {
  try {
    const response = await axios.get(`${API_URL}/carts`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los carritos', error);
    throw error;
  }
};

export const getCartByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/carts/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el carrito', error);
    throw error;
  }
};

export const createCart = async (cartData) => {
  try {
    const response = await axios.post(`${API_URL}/carts`, cartData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el carrito', error);
    throw error;
  }
};

export const updateCart = async (userId, cartData) => {
  try {
    const response = await axios.put(`${API_URL}/carts/${userId}`, cartData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el carrito', error);
    throw error;
  }
};

export const deleteCart = async (userId) => {
  try {
    await axios.delete(`${API_URL}/carts/${userId}`);
  } catch (error) {
    console.error('Error al eliminar el carrito', error);
    throw error;
  }
};
