import axios from "../../utils/axios";
import Cookies from "universal-cookie";
import { toast } from "react-hot-toast";
const cookies = new Cookies();
export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: "LOGIN_USER", payload: res.data });
    toast.success("Login successful");
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error);
  }
};

export const signUpUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/signup", user);
    dispatch({ type: "SIGNUP", payload: res.data });
    toast.success("Signed Up Successfully");
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error);
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    const token = cookies.get("access_token");
    if (!token) return;
    const res = await axios.get(`/auth/validate-auth/${token}`);
    dispatch({ type: "LOAD_USER", payload: { token, user: res.data } });
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/auth/logout");

    dispatch({ type: "LOGOUT" });
    toast.success("Logged out Successfully");
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error);
  }
};
