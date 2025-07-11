import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/UserAction";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer.users);

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/");
  };

  return (
    <div className="flex justify-center">
      <nav className="flex justify-between items-center w-full p-5 text-[#FFFFFF] text-xl px-20">
        {/* Left Section */}
        <div className="flex gap-8 font-thin">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          {user && user.email ? (
            <NavLink to="/admin/create-product">Create Product</NavLink>
          ) : (
            <NavLink to="/cart">Cart</NavLink>
          )}
          <NavLink to="/login">Login</NavLink>
        </div>

        {/* Right Section (Logout Button) */}
        {user && user.email && (
          <button
            className="text-red-600 rounded-md px-2 py-1 font-normal"
            onClick={logoutHandler}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Nav;
