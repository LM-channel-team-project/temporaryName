import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./type.js";

export const loginUser = (data) => {
  const request = axios
    .post(`/api/login`, data)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const registerUser = (data) => {
  const request = axios
    .post(`/api/register`, data)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
};
