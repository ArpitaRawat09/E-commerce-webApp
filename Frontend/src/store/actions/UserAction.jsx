import { toast } from 'react-toastify';
import axios from '../../api/axiosconfig'
import { loaduser, removeuser } from '../reducers/UserSlice';


export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) dispatch(loaduser(user))
    // else console.log("User not logged in!");
  } catch (error) {
    toast.error("CurrentUser error!")
  }
}

export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user")
    dispatch(removeuser())
    toast.success("User logged Out!");
    console.log("logout user");

  } catch (error) {
    toast.error("Logout error!")
  }
}

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`)

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]))
      dispatch(loaduser(data[0]))
    }
  } catch (error) {
    // toast.error("Login error!")
    console.log(error);

  }
}



export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res.data);

  } catch (error) {
    toast.error("Register error!")
  }
}

