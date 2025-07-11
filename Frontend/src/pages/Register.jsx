import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncRegisterUser } from "../store/actions/UserAction";
import { useDispatch } from 'react-redux';

const Register = () => {
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const registerHandler = (user) => {
    user.id = nanoid()
    // console.log(user);
    user.isAdmin = false
    dispatch(asyncRegisterUser(user))
    toast.success("User register successfully")
    reset()
    navigate("/login")
  }

  return (
    <div className="min-h-130 w-full flex items-center justify-center relative overflow-auto">
      {/* Stars or particles could be added here for animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" p-8 rounded-xl shadow-lg w-full max-w-sm text-white border">
          <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
          <form
            onSubmit={handleSubmit(registerHandler)}
            className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                {...register('username')}
                type="text"
                className="w-full px-4 py-2 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 focus:blue-pink-400"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:blue-pink-400"
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
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#1e39c0] hover:bg-[#1e39c0e8] rounded-lg font-semibold"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-300">
            Already have an account?{" "}
            <Link className="text-blue-200 hover:underline" to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
