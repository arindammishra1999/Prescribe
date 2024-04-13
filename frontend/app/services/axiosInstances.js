import axios from "axios";
import API_BASE_URL from "../utils/apiConfig";

export const instance = axios.create(
  {
  baseURL: API_BASE_URL,
  timeout: 30000,
  timeoutErrorMessage: "Request timed out",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
}
);

export const prescriptionInstance = axios.create(
  {
  baseURL: "http://127.0.0.1:3001/api",
  timeout: 30000,
  timeoutErrorMessage: "Request timed out",
  headers: {
    "Content-Type": "application/json",
  },
}
);
