import { userConstants } from "../constants/user.constant";
import { userService } from "../service/userService";
import { alertActions } from "./alert.action";

export const userActions = {
  signin,
  logout,
  register,
  getUser,
};

const signin = (email, password) => (dispatch) => {
  return userService.signin(email, password).then((data) => {
    if (data) {
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: { user: data },
      });
      dispatch({
        type: alertActions.success,
        payload: { message: "logis successful" },
      });
      history.push("/");
    } else {
      dispatch({
        type: userConstants.LOGIN_FAILURE,
      });
      dispatch({
        type: alertActions.error,
        payload: { message: "login failed" },
      });
    }
  });
};

const logout = () => {
  userService.logout();
  return {
    type: userConstants.LOGOUT,
  };
};

const register = (companyName, email, password) => (dispatch) => {
  return userService.register(companyName, email, password).then((data) => {
    if (data) {
      dispatch({
        type: userConstants.REGISTER_SUCCESS,
        payload: { user: data },
      });
      dispatch({
        type: alertActions.success,
        payload: { message: "registraton successfull" },
      });
      history.push("/signin");
    } else {
      dispatch({
        type: userConstants.REGISTER_FAILURE,
      });
      dispatch({
        type: alertActions.error,
        payload: { message: "Registration Failed" },
      });
    }
  });
};

const getUser = (id) => (dispatch) => {
  return userService.getUser(id).then((data) => {
    if (data) {
      dispatch({
        type: userConstants.GETALL_SUCCESS,
        payload: { user: data },
      });
    }
  });
};
