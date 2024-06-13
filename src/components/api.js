import axios from "axios";

const API_BASE_URL = "https://6e8d56cf588feb25.mokky.dev/items";

export const getPizzas = async (params) => {
  const response = await axios.get(`${API_BASE_URL}/pizzas`, {
    params,
  });
  return response.data;
};

export const getOnePizza = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/pizzas/${id}`);
  return response.data;
};
