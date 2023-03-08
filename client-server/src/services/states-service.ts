
import axios from "axios";
import { State } from "types";
import { NEXT_API_URL } from "./config";


const url = NEXT_API_URL + "/api/States";

// Define an Axios interceptor to handle errors globally
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    throw error;
  }
);

const getStates = async () => {
  const response = await axios.get(url);
  return response.data;
};



export default { getStates };
