import axios from "axios";
import * as auth from "./authTypes";
import { returnErrors } from "./errorAction";
export const loadUser = () => (dispatch) => {
  dispatch({ type: auth.USER_LOADING });
  // get token from localstorage
  const token = getState().authenticate.token;
  // headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  axios
    .get("http://localhost:3636/users/verifyUser", config)
    .then((res) =>
      dispatch({
        type: auth.USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: auth.AUTH_ERROR,
      });
    });
};
