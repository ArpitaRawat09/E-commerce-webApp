import axios from "../../api/axiosconfig"
import { toast } from "react-toastify"
import { loadproduct } from "../reducers/ProductSlice"

export const asyncLoadProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products")
    // console.log(data)
    dispatch(loadproduct(data))
  } catch (error) {
    toast.error("Load product error")
  }
}

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product)
    dispatch(asyncLoadProduct())
  } catch (error) {
    toast.error("Create product error!")
  }
}

export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
  try {
    await axios.patch("/products/" + id, product)
    dispatch(asyncLoadProduct())
    toast.success("Product update successfully...")
  } catch (error) {
    toast.error("update product  error!")
  }
}

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id)
    dispatch(asyncLoadProduct())
    toast.success("Product delete successfully...")
  } catch (error) {
    toast.error("Delete product  error!")
  }
}