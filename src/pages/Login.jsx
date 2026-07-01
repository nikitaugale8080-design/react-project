import { Link, useNavigate } from "react-router-dom";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { useState } from "react";
import axios from "axios";

function Login() {

    const navigate = useNavigate();

    const [user_mobile, setUserMobile] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [error, setError] = useState("");

    function LoginProcess(e) {

        e.preventDefault();

        const obj = {
            user_mobile,
            user_password
        };

        axios.post("https://a2zithub.org/dairy/abi/user_login", obj).then((res) => {

            if (res.data.status === "success") {

                localStorage.setItem("token", res.data.token);
                navigate("/products");

            } else {

                setError("Invalid Mobile Number or Password");

            }

        });

    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex justify-center items-center py-12 px-4">

                <form
                    onSubmit={LoginProcess}
                    className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8"
                >

                    <div className="text-center mb-8">

                        <h1 className="text-4xl font-bold">
                            Welcome Back
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Login to continue shopping
                        </p>

                    </div>

                    {
                        error &&
                        <p className="text-center text-red-600 font-semibold mb-5">
                            {error}
                        </p>
                    }

                    <div className="space-y-5">

                        <div>

                            <label className="block font-semibold mb-2">
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

                            <label className="block font-semibold mb-2">
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
                                className="w-4 h-4"
                            />

                            <span className="text-sm text-gray-600">
                                Remember Me
                            </span>

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg text-lg font-semibold duration-300"
                        >
                            Login
                        </button>

                        <p className="text-center text-gray-600">

                            Don't have an account?

                            <Link
                                to="/create_account"
                                className="text-blue-600 font-bold ml-2 hover:underline"
                            >
                                Create Account
                            </Link>

                        </p>

                    </div>

                </form>

            </div>

            <Footer />
        </>
    );
}

export default Login;