import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/products`).then((res) => res.data);
};

export const getProductsByCategory = (category) => {
  return axios.get(`${BASE_URL}/products/category/${category}`).then((res) => res.data);
};

export const getCart = () => {
  return axios.get(`${BASE_URL}/carts/1`).then((res) => res.data);
};

export const addToCart = (id) => {
  return axios.post(`${BASE_URL}/carts/add`, {
    userId: 1,
    products: [
      {
        id: id,
        quantity: 1,
      },
    ],
  }, {
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.data);
};
