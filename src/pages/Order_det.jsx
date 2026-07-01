import { useParams } from "react-router-dom";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Order_det() {

    const { order_id } = useParams();

    const [orderInfo, setOrderInfo] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const obj = {
            token: localStorage.getItem("token"),
            order_id: order_id
        }

        axios.post("https://a2zithub.org/dairy/abi/order_det", obj)
            .then((res) => {

                console.log("Response", res.data);

                setOrderInfo(res.data.order_det[0]);
                setProducts(res.data.order_products);

            });

    }, []);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 py-10">

                <div className="max-w-6xl mx-auto px-5">

                    <h1 className="text-5xl font-bold text-center mb-10">
                        Order Details
                    </h1>

                    <div className="bg-white rounded-2xl shadow-xl p-8">

                        <div className="flex flex-col md:flex-row justify-between border-b pb-5">

                            <div>
                                <h2 className="text-2xl font-bold">
                                    Order ID
                                </h2>

                                <p className="text-gray-600 mt-2">
                                    #{order_id}
                                </p>
                            </div>

                            <div className="mt-5 md:mt-0">

                                <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                                    Order Placed
                                </span>

                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-10">

                            <div className="bg-gray-50 rounded-xl p-6">

                                <h3 className="text-xl font-bold mb-4">
                                    Delivery Address
                                </h3>

                                <p><b>Area :</b> {orderInfo.area}</p>
                                <p><b>City :</b> {orderInfo.city}</p>
                                <p><b>District :</b> {orderInfo.district}</p>
                                <p><b>State :</b> {orderInfo.state}</p>
                                <p><b>Country :</b> {orderInfo.country}</p>
                                <p><b>Pincode :</b> {orderInfo.pincode}</p>

                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">

                                <h3 className="text-xl font-bold mb-4">
                                    Payment Details
                                </h3>

                                <p className="mb-2">
                                    <b>Payment :</b> {orderInfo.payment_type}
                                </p>

                                <p className="mb-2">
                                    <b>Total :</b> ₹ {orderInfo.ttl_amount}
                                </p>

                                <p>
                                    <b>Order Date :</b> {orderInfo.entry_date}
                                </p>

                            </div>

                        </div>

                        <div className="mt-10">

                            <h2 className="text-2xl font-bold mb-5">
                                Ordered Products
                            </h2>

                            {
                                products.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row justify-between items-center border rounded-xl p-5 mb-5 shadow hover:shadow-lg transition">

                                        <div className="flex items-center gap-5">

                                            <img
                                                src={item.product_img}
                                                alt={item.product_name}
                                                className="w-28 h-28 rounded-lg object-cover border"
                                            />

                                            <div>

                                                <h3 className="text-xl font-bold">
                                                    {item.product_name}
                                                </h3>

                                                <p className="mt-2">
                                                    Quantity : {item.qty}
                                                </p>

                                                <p className="text-green-600 font-bold text-lg">
                                                    ₹ {item.price}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Order_det;