import axios from "axios";
import { API_PRESCRIPTIONS, API_BASE_URL } from "../utils/apiConfig";
import { useCurrentUser } from "../hooks/useCurrentUser";

export const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  timeoutErrorMessage: "Request timed out",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const getInstance = axios.create({
  baseURL: API_PRESCRIPTIONS,
  timeout: 30000,
  timeoutErrorMessage: "Request timed out",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
