
import axios from "axios";
import { City } from "types";
import { NEXT_API_URL } from "./config";


const url = NEXT_API_URL + "/api/Cities";

// Define an Axios interceptor to handle errors globally
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    throw error;
  }
);

const getCities = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const updateCity = async (city: City) => {
  const response = await axios.put(url, city);
  return response.data;
};

export default { getCities };
