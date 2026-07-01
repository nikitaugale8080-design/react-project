import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";

function Product_det() {

    const { product_id } = useParams();
    const [product_info, setProduct_info] = useState({});

    useEffect(() => {

        var obj = {
            product_id: product_id,
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/product_by_id", obj).then((res) => {

            setProduct_info(res.data);
            console.log("Server Response", res.data);

        });

    }, []);

    function addTocart() {

        var obj = {
            product_id: product_id,
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/addtocart", obj).then((res) => {

            console.log("Server Response", res.data);
            window.location.reload();

        });

    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 py-12">

                <div className="max-w-7xl mx-auto px-5">

                    <h1 className="text-5xl font-bold text-center mb-12">
                        Product Details
                    </h1>

                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2 gap-10">

                        {/* Product Image */}

                        <div className="p-8 flex justify-center items-center bg-gray-50">

                            <img
                                src={product_info.product_img}
                                alt={product_info.product_name}
                                className="w-full max-w-md h-[450px] object-contain hover:scale-105 duration-300"
                            />

                        </div>

                        {/* Product Information */}

                        <div className="p-10 flex flex-col justify-center">

                            <h2 className="text-4xl font-bold mb-5">
                                {product_info.product_name}
                            </h2>

                            <p className="text-gray-600 leading-7 mb-8">
                                Premium quality footwear designed for comfort,
                                durability and everyday style. Perfect for
                                casual wear, sports and outdoor activities.
                            </p>

                            <h3 className="text-4xl font-bold text-green-600 mb-8">
                                ₹ {product_info.price}
                            </h3>

                            <div className="space-y-4">

                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">
                                        Category
                                    </span>

                                    <span>Shoes</span>
                                </div>

                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">
                                        Delivery
                                    </span>

                                    <span className="text-green-600">
                                        Free Delivery
                                    </span>
                                </div>

                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-semibold">
                                        Availability
                                    </span>

                                    <span className="text-green-600">
                                        In Stock
                                    </span>
                                </div>

                            </div>

                            <div className="mt-10">

                                {
                                    product_info.cart === "No" ?

                                        <button
                                            onClick={addTocart}
                                            className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl text-lg font-bold duration-300"
                                        >
                                            Add To Cart
                                        </button>

                                        :

                                        <button
                                            className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-bold cursor-not-allowed"
                                        >
                                            ✓ Already Added To Cart
                                        </button>
                                }

                            </div>

                        </div>

                    </div>

                  

                

                </div>

            </div>

            <Footer />

        </>
    );
}

export default Product_det;