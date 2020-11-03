import axios from "axios";

export const signin = (email, password) => {
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
export const logout = () => {
  localStorage.removeItem("user");
};

export const register = (companyName, email, password) => {
  axios.post("http://localhost:3636/users/signup", {
    companyName,
    email,
    password,
  });
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("token"));
};
export const getUser = (id) => {
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
