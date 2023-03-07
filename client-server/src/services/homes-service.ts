
import axios from "axios";
import { House } from "types";
import { NEXT_API_URL } from "./config";

const url = NEXT_API_URL + "/Homes";

// Define an Axios interceptor to handle errors globally
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    throw error;
  }
);

export const createHome = async (house: House) => {
  const response = await axios.post(url, house);
  return response.data;
};

export const getHomes = async (city_id: number) => {
  const response = await axios.get(url, { params: { city_id } });
  return response.data
};

export const updateHome = async (house: House) => {
  const response = await axios.put(url, house);
  return response.data;
};

export const deleteHome = async (home_id: number) => {
  console.log('inside delete home front end')
  console.log(url)
  
  const response = await axios.delete(url, { params: { home_id } });
  return response.data;
};

export default { getHomes,  deleteHome, updateHome, createHome };
