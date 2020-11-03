import { authHeader } from "../helpers/auth-header";
import axios from "axios";

const signin = (email, password) => {
  return axios
    .post("http://localhost:3636/users/signin", { email, password })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data);
        console.log("success");
        return response.data;
      }
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

const register = (companyName, email, password) => {
  axios.post("http://localhost:3636/users/signup", {
    companyName,
    email,
    password,
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const getUser = (id) => {
  axios
    .post("http://localhost:3636/users/verify", {
      id,
    })
    .then((user) => {
      if (user) {
        return user.companyName;
      }
    });
};
export const userService = {
  signin,
  logout,
  getUser,
  register,
  getCurrentUser,
};
