import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

function Shipping() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-12">

        <div className="max-w-6xl mx-auto px-5">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800">
              Shipping Policy
            </h1>

            <p className="text-gray-500 mt-4 text-lg">
              Fast, Secure and Reliable Delivery for Every Order.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl p-10">

            {/* Processing Time */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                📦 Order Processing
              </h2>

              <p className="text-gray-600 leading-8">
                All orders are processed within <b>24 hours</b> after
                successful payment confirmation. Orders placed on weekends
                or public holidays will be processed on the next working day.
              </p>
            </div>

            {/* Delivery */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                🚚 Delivery Time
              </h2>

              <ul className="list-disc pl-6 text-gray-600 leading-8">
                <li>Metro Cities : 2-4 Business Days</li>
                <li>Other Cities : 3-7 Business Days</li>
                <li>Remote Areas : 5-10 Business Days</li>
              </ul>
            </div>

            {/* Shipping Charges */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                💳 Shipping Charges
              </h2>

              <p className="text-gray-600 leading-8">
                Shipping charges depend on your delivery location and
                the total value of your order. Free shipping may be
                available during special offers and promotions.
              </p>
            </div>

            {/* Tracking */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                📍 Order Tracking
              </h2>

              <p className="text-gray-600 leading-8">
                Once your order is shipped, you will receive a tracking
                number via SMS or Email so you can monitor your shipment
                in real time.
              </p>
            </div>

            {/* Delay */}
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                ⚠ Delivery Delays
              </h2>

              <p className="text-gray-600 leading-8">
                Delivery may be delayed due to weather conditions,
                public holidays, transportation issues, or other
                unforeseen circumstances. We appreciate your patience
                and understanding.
              </p>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Shipping;