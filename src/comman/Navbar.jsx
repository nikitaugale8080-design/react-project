import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill, RiUserLine } from "@remixicon/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            ShopEase
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <Link to="/" className="hover:text-blue-600 font-medium">
              Home
            </Link>

            <Link to="/products" className="hover:text-blue-600 font-medium">
              Products
            </Link>

            <Link to="/about" className="hover:text-blue-600 font-medium">
              About Us
            </Link>

            <Link to="/contact" className="hover:text-blue-600 font-medium">
              Contact Us
            </Link>

            {localStorage.getItem("token") ? (
              <div className="flex items-center">

                <Link to="/cart">
                  <button className="px-4 py-2 mr-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700">
                    <RiShoppingCart2Fill size={20} />
                  </button>
                </Link>

                <Link to="/profile">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700">
                    <RiUserLine size={20} />
                  </button>
                </Link>

              </div>
            ) : (
              <div className="flex items-center">

                <Link to="/create_account">
                  <button className="px-4 py-2 mr-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700">
                    Sign Up
                  </button>
                </Link>

                <Link to="/login">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700">
                    Login
                  </button>
                </Link>

              </div>
            )}

          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5 border-t pt-4">

            <div className="flex flex-col space-y-4">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Products
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Contact Us
              </Link>

              {localStorage.getItem("token") ? (
                <>
                  <Link
                    to="/cart"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-600"
                  >
                    Cart
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-600"
                  >
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/create_account"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-600"
                  >
                    Sign Up
                  </Link>

                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-600"
                  >
                    Login
                  </Link>
                </>
              )}

            </div>

          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;