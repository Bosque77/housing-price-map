
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

export const createCity = async (new_city: {city_name: string, state_id: number}) => {
  // update the url so it sends it to the city id
  const url = NEXT_API_URL + "/api/Cities/";
  const response = await axios.post(url, new_city);
  return response.data;
};

export const updateCity = async (updated_city: {city_id: number, city_name: string, state_id: number}) => {
  // update the url so it sends it to the city id
  const url = NEXT_API_URL + "/api/Cities/" + updated_city.city_id;
  const response = await axios.put(url, updated_city );
  return response.data;
};

const deleteCity = async (id: number) => {
  const response = await axios.delete(url + "/" + id);
  return response.data;
};


export default { getCities, updateCity, deleteCity, createCity };
