import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {

    const [cartinfo, setCartinfo] = useState([]);
    const [subtotal, setSubTotal] = useState(0);

    function getData() {

        const obj = {
            token: localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {

            setCartinfo(res.data);

            let sum = 0;

            res.data.map((val) => {
                sum = sum + val.price * val.qty;
            });

            setSubTotal(sum);

        });

    }

    useEffect(() => {
        getData();
    }, []);

    function removeCart(product_econ_cart_id) {

        const obj = {
            product_econ_cart_id,
            token: localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj).then(() => {
            getData();
        });

    }

    function incQty(product_econ_cart_id) {

        const obj = {
            product_econ_cart_id,
            token: localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj).then(() => {
            getData();
        });

    }

    function decQty(product_econ_cart_id) {

        const obj = {
            product_econ_cart_id,
            token: localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty", obj).then(() => {
            getData();
        });

    }

    return (
        <>
            <Navbar />

            <div className="bg-gray-100 min-h-screen py-10">

                <h1 className="text-5xl font-bold text-center mb-10">
                    🛒 My Cart
                </h1>

                {
                    cartinfo.length === 0 ?

                        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">

                            <h2 className="text-3xl font-bold mb-4">
                                Your Cart is Empty
                            </h2>

                            <p className="text-gray-500 mb-8">
                                Looks like you haven't added any shoes yet.
                            </p>

                            <Link to="/products">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold duration-300">
                                    Shop Now
                                </button>
                            </Link>

                        </div>

                        :

                        <div className="max-w-7xl mx-auto px-5">

                            <div className="bg-white shadow-xl rounded-xl overflow-hidden">

                                <table className="w-full text-center">

                                    <thead className="bg-black text-white">

                                        <tr>
                                            <th className="py-4">Product</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Action</th>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        {
                                            cartinfo.map((val, index) => (

                                                <tr key={index} className="border-b hover:bg-gray-100">

                                                    <td className="py-4 flex justify-center">
                                                        <img
                                                            src={val.product_img}
                                                            alt=""
                                                            className="w-24 h-24 object-cover rounded-lg shadow"
                                                        />
                                                    </td>

                                                    <td className="font-semibold">
                                                        {val.product_name}
                                                    </td>

                                                    <td className="font-bold text-green-600">
                                                        ₹ {val.price}
                                                    </td>

                                                    <td>

                                                        <button
                                                            onClick={() => decQty(val.product_econ_cart_id)}
                                                            className="bg-red-500 text-white w-8 h-8 rounded-full"
                                                        >
                                                            -
                                                        </button>

                                                        <span className="mx-4 font-bold">
                                                            {val.qty}
                                                        </span>

                                                        <button
                                                            onClick={() => incQty(val.product_econ_cart_id)}
                                                            className="bg-green-500 text-white w-8 h-8 rounded-full"
                                                        >
                                                            +
                                                        </button>

                                                    </td>

                                                    <td>

                                                        <button
                                                            onClick={() => removeCart(val.product_econ_cart_id)}
                                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg duration-300"
                                                        >
                                                            Remove
                                                        </button>

                                                    </td>

                                                </tr>

                                            ))
                                        }

                                    </tbody>

                                </table>

                            </div>

                            <div className="bg-white shadow-xl rounded-xl mt-10 p-8 flex flex-col md:flex-row justify-between items-center">

                                <div>

                                    <h2 className="text-3xl font-bold">
                                        Total : ₹ {subtotal}
                                    </h2>

                                </div>

                                <Link to="/checkout">

                                    <button className="mt-5 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-lg font-bold duration-300">
                                        Proceed to Checkout
                                    </button>

                                </Link>

                            </div>

                        </div>

                }

            </div>

            <Footer />
        </>
    );
}

export default Cart;