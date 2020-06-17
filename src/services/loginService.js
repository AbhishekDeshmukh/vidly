import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";
import { get } from "lodash";

const apiEndPoing = apiUrl + "/auth";
const token = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoing, {
    email,
    password,
  });
  localStorage.setItem(token, jwt);
}

export function loginwithjwt(jwt) {
  localStorage.setItem(token, jwt);
}

// export

export function getCurrentUser() {
  try {
    const tokenRecived = localStorage.getItem(token);
    return jwtDecode(tokenRecived);
  } catch (ex) {
    return null;
  }
}

export function logOut() {
  localStorage.removeItem(token);
}

function getJwt() {
  return localStorage.getItem(token);
}

export default {
  login,
  loginwithjwt,
  getCurrentUser,
  logOut,
};
