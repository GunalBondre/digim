import * as auth from "../Auth/authTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (State = initialState, action) {
  switch (action.type) {
    case auth.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case auth.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoaded: false,
        user: action.payload,
      };
    case auth.LOGIN_SUCCESS:
    case auth.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case auth.LOGIN_FAIL:
    case auth.REGISTER_FAIL:
    case auth.AUTH_ERROR:
    case auth.LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        isLoading: false,
        user: null,
      };
    default:
      return state;
  }
}
