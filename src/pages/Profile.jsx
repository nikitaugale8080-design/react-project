import { Link, useNavigate } from "react-router-dom";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {

    const navigate = useNavigate();

    const [profile, setProfile] = useState({});

    useEffect(() => {

        const obj = {
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/user_profile", obj)
            .then((res) => {

                console.log("Profile", res.data);

                if (res.data.status === "success") {
                    setProfile(res.data.data[0]);
                }

            });

    }, []);

    function logout() {

        localStorage.clear();
        navigate("/login");

    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100">

                {/* Header */}

                <div className="bg-black text-white py-16">

                    <h1 className="text-center text-5xl font-bold">
                        My Profile
                    </h1>

                    <p className="text-center text-gray-300 mt-4">
                        Welcome to your account
                    </p>

                </div>

                <div className="max-w-6xl mx-auto px-5 py-12">

                    <div className="bg-white rounded-2xl shadow-xl p-10">

                        {/* Profile Image */}

                        <div className="flex flex-col items-center">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="profile"
                                className="w-32 h-32 rounded-full border-4 border-gray-300"
                            />

                            <h2 className="text-3xl font-bold mt-5">
                                {profile.user_name}
                            </h2>

                            <p className="text-gray-500">
                                Shoes Store Customer
                            </p>

                        </div>

                        {/* Profile Details */}

                        <div className="grid md:grid-cols-2 gap-8 mt-12">

                            <div className="bg-gray-100 rounded-xl p-8">

                                <h2 className="text-2xl font-bold mb-6">
                                    Personal Information
                                </h2>

                                <div className="space-y-5">

                                    <div>
                                        <p className="text-gray-500 text-sm">
                                            Full Name
                                        </p>

                                        <h3 className="text-xl font-semibold">
                                            {profile.user_name}
                                        </h3>
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-sm">
                                            Mobile Number
                                        </p>

                                        <h3 className="text-xl font-semibold">
                                            {profile.user_mobile}
                                        </h3>
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-sm">
                                            Email Address
                                        </p>

                                        <h3 className="text-xl font-semibold break-all">
                                            {profile.user_email}
                                        </h3>
                                    </div>

                                </div>

                            </div>

                            {/* Quick Actions */}

                            <div className="bg-gray-100 rounded-xl p-8">

                                <h2 className="text-2xl font-bold mb-6">
                                    Quick Actions
                                </h2>

                                <Link to="/order_list">

                                    <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg text-lg font-semibold mb-5 duration-300">

                                        My Orders

                                    </button>

                                </Link>

                                <button
                                    onClick={logout}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-semibold duration-300"
                                >
                                    Logout
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Profile;