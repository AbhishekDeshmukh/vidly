import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/users";

export function saveUser(user) {
  return http.post(apiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
