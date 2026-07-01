import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { RiEyeLine } from "@remixicon/react";
import { Link } from "react-router-dom";

function Order_list() {

    const [orderinfo, setOrder_info] = useState([]);

    useEffect(() => {

        const obj = {
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/order_list", obj)
            .then((res) => {
                setOrder_info(res.data.order_det || []);
            })
            .catch(() => {
                setOrder_info([]);
            });

    }, []);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 py-10">

                <div className="max-w-7xl mx-auto px-5">

                    <h1 className="text-5xl font-bold text-center mb-10">
                        My Orders
                    </h1>

                    {
                        orderinfo.length === 0 ?

                            <div className="bg-white shadow-xl rounded-2xl p-12 text-center">

                                <h2 className="text-3xl font-bold mb-4">
                                    No Orders Found
                                </h2>

                                <p className="text-gray-500 mb-8">
                                    Looks like you haven't placed any orders yet.
                                </p>

                                <Link to="/products">
                                    <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 duration-300">
                                        Shop Now
                                    </button>
                                </Link>

                            </div>

                            :

                            <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">

                                <table className="w-full">

                                    <thead className="bg-black text-white">

                                        <tr>

                                            <th className="p-4">Order Date</th>
                                            <th className="p-4">Payment</th>
                                            <th className="p-4">Amount</th>
                                            <th className="p-4">Delivery Address</th>
                                            <th className="p-4">View</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {
                                            orderinfo.map((val, index) => (

                                                <tr
                                                    key={index}
                                                    className="border-b hover:bg-gray-50 duration-300"
                                                >

                                                    <td className="p-4 text-center">
                                                        {val.entry_date}
                                                    </td>

                                                    <td className="p-4 text-center">
                                                        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-semibold">
                                                            {val.payment_type}
                                                        </span>
                                                    </td>

                                                    <td className="p-4 text-center font-bold text-green-600">
                                                        ₹ {val.ttl_amount}
                                                    </td>

                                                    <td className="p-4">
                                                        {val.area}, {val.city}, {val.district}, {val.state}, {val.country} - {val.pincode}
                                                    </td>

                                                    <td className="p-4 text-center">

                                                        <Link to={`/order_det/${val.product_order_id}`}>

                                                            <button className="bg-black hover:bg-gray-800 text-white p-3 rounded-full duration-300">

                                                                <RiEyeLine />

                                                            </button>

                                                        </Link>

                                                    </td>

                                                </tr>

                                            ))
                                        }

                                    </tbody>

                                </table>

                            </div>

                    }

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Order_list;