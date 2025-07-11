import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/UserAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, reset, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = async (user) => {
    // user.id = nanoid()
    // console.log(user);
    await dispatch(asyncLoginUser(user))
    const loggedInUser = JSON.parse(localStorage.getItem("user"))
    if (loggedInUser) {
      toast.success("User login successfully")
      reset()
      navigate("/")
    }
    else {
      toast.error("Invalid email or password!")

    }
  }

  return (
    <div className="min-h-130 w-full flex items-center justify-center relative overflow-auto">
      {/* Stars or particles could be added here for animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" p-8 rounded-xl shadow-lg w-full max-w-sm text-white border">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <form
            onSubmit={handleSubmit(loginHandler)}
            className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-2 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                {...register('password')}
                type="password"
                className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>
              <a href="#" className="text-blue-300 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#1e39c0] hover:bg-[#1e39c0e8] rounded-lg font-semibold"
            >
              Log In
            </button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-300">
            Don’t have an account?{" "}
            <Link className="text-blue-200 hover:underline" to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
