import { useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const navigate = useNavigate();

    const [area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [payment_type, setPayment_Type] = useState("");

    function place_order(e) {
        e.preventDefault();

        var obj = {
            area,
            city,
            district,
            state,
            country,
            pincode,
            payment_type,
            "token": localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/place_order", obj).then((res) => {
            navigate("/order_list");
        });
    }

    return (
        <>
            <Navbar />

            <div className="bg-gray-100 min-h-screen py-10">

                <h1 className="text-5xl font-bold text-center mb-10">
                    Checkout
                </h1>

                <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10">

                    {/* Delivery Address */}

                    <div className="bg-white rounded-2xl shadow-xl p-8">

                        <h2 className="text-3xl font-bold mb-8">
                            Delivery Address
                        </h2>

                        <form onSubmit={place_order} className="space-y-5">

                            <input
                                type="text"
                                placeholder="Enter Area"
                                onChange={(e) => setArea(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Enter City"
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Enter District"
                                onChange={(e) => setDistrict(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Enter State"
                                onChange={(e) => setState(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Enter Country"
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />

                            <input
                                type="number"
                                placeholder="Enter Pincode"
                                onChange={(e) => setPincode(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />

                            <select
                                onChange={(e) => setPayment_Type(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            >
                                <option value="">Select Payment Method</option>
                                <option value="Online">Online Payment</option>
                                <option value="Offline">Cash On Delivery</option>
                            </select>

                            <button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-lg text-lg font-bold duration-300">
                                Place Order
                            </button>

                        </form>

                    </div>

                    {/* Order Summary */}

                    <div className="bg-white rounded-2xl shadow-xl p-8">

                        <h2 className="text-3xl font-bold mb-8">
                            Order Summary
                        </h2>

                        <div className="space-y-6">

                            <div className="flex justify-between text-lg">
                                <span>Delivery</span>
                                <span className="text-green-600 font-semibold">
                                    Free
                                </span>
                            </div>

                            <div className="flex justify-between text-lg">
                                <span>Estimated Shipping</span>
                                <span>2 - 4 Days</span>
                            </div>

                            <div className="flex justify-between text-lg">
                                <span>Payment</span>
                                <span>Secure</span>
                            </div>

                            <hr />

                            <div className="bg-gray-100 rounded-xl p-5">

                                <h3 className="text-xl font-bold mb-3">
                                    Why Shop With Us?
                                </h3>

                                <ul className="space-y-3 text-gray-700">

                                    <li>✅ 100% Original Shoes</li>
                                    <li>🚚 Free Delivery</li>
                                    <li>🔄 Easy Returns</li>
                                    <li>🔒 Secure Payment</li>
                                    <li>⭐ 24/7 Customer Support</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Checkout;