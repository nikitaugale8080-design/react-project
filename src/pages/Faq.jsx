import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">

        <div className="max-w-5xl mx-auto px-5">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800">
              Frequently Asked Questions
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Find answers to the most common questions about shopping with ShopEase.
            </p>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-blue-600">
                🛒 How can I place an order?
              </h2>

              <p className="text-gray-600 mt-3 leading-7">
                Browse products, click <b>Add to Cart</b>, proceed to
                Checkout, enter your delivery address and confirm your order.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-green-600">
                💳 Which payment methods are available?
              </h2>

              <p className="text-gray-600 mt-3 leading-7">
                We currently support Online Payment and Cash on Delivery (Offline Payment).
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-red-600">
                ❌ Can I cancel my order?
              </h2>

              <p className="text-gray-600 mt-3 leading-7">
                Yes. You can cancel your order before it has been shipped.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-purple-600">
                🚚 How long does delivery take?
              </h2>

              <p className="text-gray-600 mt-3 leading-7">
                Orders are usually delivered within <b>3–7 business days</b>,
                depending on your location.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-orange-600">
                🔄 What is the return policy?
              </h2>

              <p className="text-gray-600 mt-3 leading-7">
                Products can be returned within <b>7 days</b> if they are unused,
                undamaged and in their original packaging.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-pink-600">
                📦 How can I track my order?
              </h2>

              <p className="text-gray-600 mt-3 leading-7">
                Go to your <b>Profile → Order List → Order Details</b> to view
                your order information.
              </p>
            </div>

            <div className="bg-blue-600 rounded-2xl text-center text-white p-8 mt-10">

              <h2 className="text-3xl font-bold">
                Still Need Help?
              </h2>

              <p className="mt-3 text-blue-100">
                If your question isn't listed here, feel free to contact our
                support team anytime.
              </p>
<Link to="/contact">
              <button className="mt-6 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Contact Support
              </button>
              </Link>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Faq;