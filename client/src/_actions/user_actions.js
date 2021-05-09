import axios from "axios";
import { LOGIN_USER, REGISTER_USER, CREATE_BOARD_USER } from "./type.js";

export const loginUser = (data) => {
  const request = axios.post(`/api/users/login`, data).then(({ data }) => data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const registerUser = (data) => {
  const request = axios
    .post(`/api/users/register`, data)
    .then(({ data }) => data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const createBoardUser = (data) => {
  console.log(data);
  const request = axios.post(`/api/board/write`, data).then(({ data }) => data);
  return {
    type: CREATE_BOARD_USER,
    payload: request,
  };
};
