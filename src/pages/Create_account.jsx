import { useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create_account() {

    const navigate = useNavigate();

    const [user_name, setUserName] = useState("");
    const [user_mobile, setUserMobile] = useState("");
    const [user_email, setUserEmail] = useState("");
    const [user_password, setUserPassword] = useState("");

    function formSubmit(e) {
        e.preventDefault();

        var obj = {
            user_name,
            user_mobile,
            user_email,
            user_password
        };

        axios.post("https://a2zithub.org/dairy/abi/user_register", obj).then((res) => {
            console.log("Server Response", res.data);
            navigate("/login");
        });
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex justify-center items-center py-12 px-4">

                <form
                    onSubmit={formSubmit}
                    className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8"
                >

                    <h1 className="text-4xl font-bold text-center mb-2">
                        Create Account
                    </h1>

                    <p className="text-center text-gray-500 mb-8">
                        Join our Shoes Store today
                    </p>

                    <div className="space-y-5">

                        <div>
                            <label className="font-semibold block mb-2">
                                Username
                            </label>

                            <input
                                type="text"
                                placeholder="Enter Your Username"
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-2">
                                Mobile Number
                            </label>

                            <input
                                type="number"
                                placeholder="Enter Mobile Number"
                                onChange={(e) => setUserMobile(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter Email"
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter Password"
                                onChange={(e) => setUserPassword(e.target.value)}
                                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                required
                                className="w-4 h-4"
                            />

                            <span className="text-sm text-gray-600">
                                I accept the Terms & Conditions
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg text-lg font-semibold duration-300"
                        >
                            Create Account
                        </button>

                        <p className="text-center text-gray-600">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-blue-600 font-bold hover:underline"
                            >
                                Login
                            </Link>
                        </p>

                    </div>

                </form>

            </div>

            <Footer />
        </>
    );
}

export default Create_account;