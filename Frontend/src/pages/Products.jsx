import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  // console.log(products);

  const renderProducts = products.map((product) => {
    return (
      <div
        className="w-[23%] bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-2 hover:shadow-xl transition-shadow duration-300"
        key={product.id}
      >
        {product?.image && (
          <img
            src={product.image}

            className="w-full h-50 object-fit rounded-lg mb-2"
          />
        )}
        <h1 className="text-lg font-bold text-gray-800 line-clamp-1">
          {product.title}
        </h1>
        <p className="text-sm text-gray-600 line-clamp-3">
          {product.description.slice(0, 100)}...
        </p>
        <Link className="text-blue-100 text-sm hover:text-blue-300" to={`/admin/products/${product.id}`}>More Info</Link>
        <div className="flex justify-between items-center mt-8">
          <p className="text-indigo-600 font-bold text-lg">₹{product.price}</p>
          <button className="bg-indigo-600 text-white px-4 py-1 rounded-xl hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return products?.length > 0 ? (
    <div className="w-full p-4 overflow-auto flex gap-6 flex-wrap  bg-gray-100">
      {renderProducts}
    </div>
  ) : (
    <div className="text-center text-lg text-gray-500 mt-20">Loading...</div>
  );
};

export default Products;
