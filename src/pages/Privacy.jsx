import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

function Privacy() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-12">

        <div className="max-w-6xl mx-auto px-5">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800">
              Privacy Policy
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Your privacy and personal information are important to us.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl p-10">

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                🔒 Information We Collect
              </h2>

              <p className="text-gray-600 leading-8">
                We collect information such as your name, mobile number,
                email address, shipping address, and payment details
                when you create an account or place an order.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                📦 How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 text-gray-600 leading-8">
                <li>Process your orders quickly.</li>
                <li>Deliver products to your address.</li>
                <li>Provide customer support.</li>
                <li>Improve your shopping experience.</li>
                <li>Send important order updates.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                🛡 Data Security
              </h2>

              <p className="text-gray-600 leading-8">
                We use secure technologies to protect your personal
                information. Your payment details and account data are
                kept safe and confidential.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                🤝 Third Party Sharing
              </h2>

              <p className="text-gray-600 leading-8">
                We do not sell or share your personal information with
                third parties except when required for shipping,
                payment processing, or legal purposes.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                📞 Contact Us
              </h2>

              <p className="text-gray-600 leading-8">
                If you have any questions regarding this Privacy Policy,
                please contact us at
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

export default Privacy;