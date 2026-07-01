import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";

function About() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100">

                {/* Hero Section */}

                <div className="bg-black text-white py-20">

                    <div className="max-w-6xl mx-auto text-center px-5">

                        <h1 className="text-5xl md:text-6xl font-bold">
                            About Our Store
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                            Welcome to our Shoes Store, where style meets comfort.
                            We provide premium quality footwear designed for every
                            occasion, helping you walk with confidence every day.
                        </p>

                    </div>

                </div>

                {/* About Content */}

                <div className="max-w-7xl mx-auto px-5 py-16">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left */}

                        <div>

                            <img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                                alt="Shoes"
                                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                            />

                        </div>

                        {/* Right */}

                        <div>

                            <h2 className="text-4xl font-bold mb-6">
                                Who We Are
                            </h2>

                            <p className="text-gray-600 leading-8 mb-5">
                                Our Shoes Store is dedicated to providing high-quality,
                                stylish and comfortable footwear for men, women and kids.
                                Whether you're looking for sports shoes, casual sneakers,
                                running shoes or everyday wear, we have something for everyone.
                            </p>

                            <p className="text-gray-600 leading-8">
                                Customer satisfaction is our top priority. We believe
                                everyone deserves footwear that combines fashion,
                                durability and comfort at an affordable price.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Why Choose Us */}

                <div className="bg-white py-16">

                    <div className="max-w-7xl mx-auto px-5">

                        <h2 className="text-4xl font-bold text-center mb-12">
                            Why Choose Us
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl duration-300">

                                <div className="text-5xl">👟</div>

                                <h3 className="text-xl font-bold mt-5">
                                    Premium Quality
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    Carefully selected premium quality shoes.
                                </p>

                            </div>

                            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl duration-300">

                                <div className="text-5xl">🚚</div>

                                <h3 className="text-xl font-bold mt-5">
                                    Free Delivery
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    Fast and secure delivery across India.
                                </p>

                            </div>

                            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl duration-300">

                                <div className="text-5xl">💳</div>

                                <h3 className="text-xl font-bold mt-5">
                                    Secure Payment
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    100% safe and trusted payment methods.
                                </p>

                            </div>

                            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl duration-300">

                                <div className="text-5xl">⭐</div>

                                <h3 className="text-xl font-bold mt-5">
                                    Customer Support
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    Friendly support whenever you need help.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Statistics */}

                <div className="bg-black text-white py-16">

                    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

                        <div>
                            <h2 className="text-5xl font-bold">10K+</h2>
                            <p className="mt-3 text-gray-300">Happy Customers</p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold">500+</h2>
                            <p className="mt-3 text-gray-300">Premium Products</p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold">24/7</h2>
                            <p className="mt-3 text-gray-300">Support</p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-bold">100%</h2>
                            <p className="mt-3 text-gray-300">Secure Shopping</p>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default About;