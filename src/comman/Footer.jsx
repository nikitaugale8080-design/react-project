import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "@remixicon/react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h2 className="text-2xl font-bold text-white">
                Subscribe to our Newsletter
              </h2>

              <p className="text-gray-400 mt-2">
                Get updates about new products and special offers.
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 px-4 py-3 rounded-l-lg border border-gray-600 bg-gray-800 text-white outline-none"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg text-white font-semibold">
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              ShopEase
            </h2>

            <p className="text-gray-400 leading-7">
              Your one-stop destination for premium shoes. Discover quality,
              comfort and the latest trends at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Customer Service */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Customer Service
            </h3>

           <ul className="space-y-3">

  <li>
    <Link to="/faq" className="hover:text-white">
      FAQs
    </Link>
  </li>

  <li>
    <Link to="/shipping" className="hover:text-white">
      Shipping Policy
    </Link>
  </li>

  <li>
    <Link to="/return" className="hover:text-white">
      Return Policy
    </Link>
  </li>

  <li>
    <Link to="/privacy" className="hover:text-white">
      Privacy Policy
    </Link>
  </li>

</ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Info
            </h3>

            <p className="mb-2">
              📍 Ahmednagar, Maharashtra
            </p>

            <p className="mb-2">
              📞 +91 9876543210
            </p>

            <p>
              ✉ support@shopease.com
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-6">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <RiFacebookCircleFill size={22} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <RiInstagramFill size={22} />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"
              >
                <RiWhatsappFill size={22} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition"
              >
                <RiYoutubeFill size={22} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Copyright */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-5 text-center">

          <p className="text-gray-400">
            © 2026 <span className="font-semibold text-white">ShopEase</span>. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;