import { nanoid } from '@reduxjs/toolkit'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncCreateProduct } from '../../store/actions/ProductAction'

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createProductHandler = (product) => {
    product.id = nanoid()
    // console.log(product);

    dispatch(asyncCreateProduct(product))
    navigate('/products')
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center  relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center  ">
        <div className="p-10 rounded-xl shadow-lg w-full max-w-5xl text-white border backdrop-blur-md">
          <h2 className="text-3xl font-semibold mb-8 text-center">Create Product</h2>

          <form
            onSubmit={handleSubmit(createProductHandler)}
            className="flex flex-col md:flex-row gap-6">
            {/* Left Side */}
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm mb-1">Image URL</label>
                <input
                  {...register('image')}
                  type="url"
                  className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Title</label>
                <input
                  {...register('title')}
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter product title"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Price</label>
                <input
                  {...register('price')}
                  type="number"
                  className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter product price"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Category</label>
                <input
                  {...register('category')}
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="e.g. men's clothing"
                />
              </div>

            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <label className="block text-sm mb-1">Description</label>
                <textarea
                  {...register('description')}
                  rows="7"
                  className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter product description"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#1e39c0] hover:bg-[#1e39c0e8] rounded-lg font-semibold"
              >
                Create Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct


