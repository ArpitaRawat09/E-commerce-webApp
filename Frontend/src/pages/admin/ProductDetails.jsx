import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { asyncDeleteProduct, asyncUpdateProduct } from "../../store/actions/ProductAction"

const ProductDetails = () => {
  const { id } = useParams()
  // console.log(id);
  const { productReducer: { products }, userReducer: { users } } = useSelector((state) => state)
  const product = products?.find((product) => product.id === id)
  // console.log(product);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category
    }
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const updateProductHandler = (product) => {
    // console.log(product);
    dispatch(asyncUpdateProduct(id, product))
    reset()
  }

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id))
    navigate("/products")
  }
  return product ? (
    <>
      <div className="container w-full flex border border-white px-10 py-10 pb-0 rounded-md mt-5">
        {product?.image && (
          <div className="w-1/2 ">
            <img className=" w-[70%] h-[90%] object-cover object-top rounded-md" src={product?.image} alt="" />
          </div>
        )}
        <div className="w-1/2 h-1/2">
          <h1 className="text-3xl font-bold mb-6 ">{product?.title}</h1>
          <p className="text-2xl text-blue-600 font-bold mb-6">{product?.price}</p>
          <p className="text-xl text-gray-400 tracking-tighter leading-tight ">{product?.description}</p>
          <button className="bg-orange-500 px-3 py-2 rounded-md mt-8">Add to Cart</button>
        </div>
      </div>
      {/* update form */}
      <div className="mb-15 mt-10">
        {users && users.isAdmin &&
          <form onSubmit={handleSubmit(updateProductHandler)}
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
                  className="w-full px-4 py-4 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                Update Product
              </button>
              <button
                onClick={deleteHandler}
                type="button"
                className="w-full py-2 bg-[#ff6060] hover:bg-[#c01e1ee8] rounded-lg font-semibold"
              >
                Delete Product
              </button>
            </div>
          </form>
        }
      </div>
    </>
  ) : "loading... "
}

export default ProductDetails
