import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Register from "../pages/Register"
import CreateProduct from "../pages/admin/CreateProduct"
import UpdateProduct from "../pages/admin/ProductDetails"
import ProductDetails from "../pages/admin/ProductDetails"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/admin/create-product" element={<CreateProduct />}></Route>
      {/* <Route path="/admin/update-product/:id" element={<UpdateProduct />}></Route> */}
      <Route path="/admin/products/:id" element={<ProductDetails />}></Route>


    </Routes>
  )
}

export default MainRoutes
