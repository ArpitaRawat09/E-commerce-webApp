import { Route, Routes } from "react-router-dom"
import Products from '../pages/Products'
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Register from "../pages/Register"
import CreateProduct from "../pages/admin/CreateProduct"
import ProductDetails from "../pages/admin/ProductDetails"
import UserProfile from "../pages/user/UserProfile"
import PageNotFound from "../pages/PageNotFound"
import AuthWrapper from "./AuthWrapper"

const MainRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/admin/create-product" element={<AuthWrapper><CreateProduct /></AuthWrapper>}></Route>
      <Route path="/admin/user-profile" element={<AuthWrapper><UserProfile /></AuthWrapper>}></Route>
      <Route path="/admin/products/:id" element={<AuthWrapper><ProductDetails /></AuthWrapper>}></Route>
      <Route path="*" element={<PageNotFound />}></Route>



    </Routes>
  )
}

export default MainRoutes
