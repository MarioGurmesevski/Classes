import { LOGIN, LOGOUT } from "../const/authActions.const";
export const login = (email, password) => {
  return {
    type: LOGIN,
    payload: {
      email,
      password,
      name: "mario",
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
