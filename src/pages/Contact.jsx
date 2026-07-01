import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";

function Contact() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100">

                {/* Hero Section */}

                <div className="bg-black text-white py-20">

                    <div className="max-w-6xl mx-auto text-center px-5">

                        <h1 className="text-5xl md:text-6xl font-bold">
                            Contact Us
                        </h1>

                        <p className="mt-6 text-lg text-gray-300">
                            We'd love to hear from you. Feel free to contact us anytime.
                        </p>

                    </div>

                </div>

                {/* Contact Section */}

                <div className="max-w-7xl mx-auto px-5 py-16">

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* Contact Information */}

                        <div className="bg-white rounded-2xl shadow-xl p-8">

                            <h2 className="text-3xl font-bold mb-8">
                                Get In Touch
                            </h2>

                            <div className="space-y-6">

                                <div className="flex items-center gap-4">

                                    <div className="text-4xl">📍</div>

                                    <div>
                                        <h3 className="font-bold text-xl">
                                            Address
                                        </h3>

                                        <p className="text-gray-600">
                                            Ahmednagar, Maharashtra, India
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4">

                                    <div className="text-4xl">📞</div>

                                    <div>
                                        <h3 className="font-bold text-xl">
                                            Phone
                                        </h3>

                                        <p className="text-gray-600">
                                            +91 98765 43210
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4">

                                    <div className="text-4xl">✉️</div>

                                    <div>
                                        <h3 className="font-bold text-xl">
                                            Email
                                        </h3>

                                        <p className="text-gray-600">
                                            support@shoestore.com
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4">

                                    <div className="text-4xl">🕒</div>

                                    <div>
                                        <h3 className="font-bold text-xl">
                                            Working Hours
                                        </h3>

                                        <p className="text-gray-600">
                                            Monday - Saturday (9:00 AM - 8:00 PM)
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Contact Form */}

                        <div className="bg-white rounded-2xl shadow-xl p-8">

                            <h2 className="text-3xl font-bold mb-8">
                                Send Message
                            </h2>

                            <form className="space-y-5">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                />

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg text-lg font-bold duration-300"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

                {/* Features */}

                <div className="bg-black text-white py-16">

                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-5 text-center">

                        <div>
                            <h2 className="text-5xl">🚚</h2>
                            <h3 className="text-2xl font-bold mt-4">
                                Fast Delivery
                            </h3>
                            <p className="text-gray-300 mt-2">
                                Quick shipping across India.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl">💳</h2>
                            <h3 className="text-2xl font-bold mt-4">
                                Secure Payment
                            </h3>
                            <p className="text-gray-300 mt-2">
                                Safe and secure transactions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl">⭐</h2>
                            <h3 className="text-2xl font-bold mt-4">
                                24/7 Support
                            </h3>
                            <p className="text-gray-300 mt-2">
                                Always ready to help our customers.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Contact;