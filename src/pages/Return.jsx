import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

function Return() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-12">

        <div className="max-w-6xl mx-auto px-5">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800">
              Return Policy
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Easy Returns and Hassle-Free Refunds.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl p-10">

            {/* Return Eligibility */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                🔄 Return Eligibility
              </h2>

              <p className="text-gray-600 leading-8">
                Products can be returned within <b>7 days</b> of delivery.
                The item must be unused, undamaged, and in its original
                packaging with all tags attached.
              </p>
            </div>

            {/* Non Return */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                ❌ Non-Returnable Items
              </h2>

              <ul className="list-disc pl-6 text-gray-600 leading-8">
                <li>Used or damaged products.</li>
                <li>Products without original packaging.</li>
                <li>Items returned after 7 days.</li>
              </ul>
            </div>

            {/* Refund */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                💰 Refund Policy
              </h2>

              <p className="text-gray-600 leading-8">
                Once your returned product is received and inspected,
                the refund will be processed within <b>5 business days</b>.
                The amount will be credited to your original payment method.
              </p>
            </div>

            {/* Exchange */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                🔁 Exchange Policy
              </h2>

              <p className="text-gray-600 leading-8">
                If you receive a damaged or incorrect product,
                you can request an exchange. Our support team
                will assist you with the replacement process.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                📞 Need Help?
              </h2>

              <p className="text-gray-600 leading-8">
                If you have any questions regarding returns or refunds,
                please contact our support team at
                <span className="font-semibold text-blue-600">
                  {" "}support@shopease.com
                </span>
                {" "}or call
                <span className="font-semibold text-blue-600">
                  {" "}+91 9876543210
                </span>.
              </p>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Return;