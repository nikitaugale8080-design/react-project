import { Link } from "react-router-dom";

function ProductCard(props) {

  const { product_tbl_id, product_img, product_name, price } = props.data;

  return (
    <Link to={`/product_det/${product_tbl_id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

        <div className="overflow-hidden">
          <img
            src={product_img}
            alt={product_name}
            className="w-full h-60 object-cover hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">

          <h3 className="text-lg font-bold text-gray-800 truncate">
            {product_name}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Product ID : {product_tbl_id}
          </p>

          <div className="flex justify-between items-center mt-4">

            <span className="text-2xl font-bold text-blue-600">
              ₹ {price}
            </span>

            <span className="text-yellow-500 text-xl">
              ⭐ 4.8
            </span>

          </div>

          <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            View Product
          </button>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;