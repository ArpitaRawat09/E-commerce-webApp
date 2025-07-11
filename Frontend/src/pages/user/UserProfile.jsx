import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from "../../store/actions/UserAction";

const UserProfile = () => {
  const { id } = useParams()
  // console.log(id);
  const { users } = useSelector((state) => state.userReducer)

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password
    }
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const updateUserHandler = (user) => {
    dispatch(asyncUpdateUser(users.id, user))
  }

  const deleteHandler = () => {
    dispatch(asyncDeleteUser(users.id))
    navigate("/login")
  }
  return users ? (
    <div className="ml-50 mr-50 mt-10 mb-10 border rounded-md px-10 py-5">
      <h1 className="text-center font-semibold text-3xl mb-5">Update User</h1>
      <form onSubmit={handleSubmit(updateUserHandler)}
        className="flex flex-col md:flex-row gap-6">
        {/* Left Side */}
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              {...register('username')}
              type="text"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              {...register('email')}
              type="text"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              {...register('password')}
              type="number"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="enter passsword"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#1e39c0] hover:bg-[#1e39c0e8] rounded-lg font-semibold mt-5"
          >
            Update User
          </button>
          <button
            onClick={deleteHandler}
            type="button"
            className="w-full  py-2 bg-[#ff6060] hover:bg-[#c01e1ee8] rounded-lg font-semibold mt-4"
          >
            Delete User
          </button>
        </div>
      </form>
    </div>
  ) : "Loading..."
}

export default UserProfile
