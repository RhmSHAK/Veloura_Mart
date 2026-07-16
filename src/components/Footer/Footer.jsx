import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-blue-200">
      <div className="max-w-7xl mx-auto px-5 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

         
          <div>
            <h2 className="text-3xl font-bold text-blue-700">
              VeLoUrA MART
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              Premium men's fashion crafted for modern lifestyle.
              Explore timeless style with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-700"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-blue-700"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-gray-700 hover:text-blue-700"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-700">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 hover:text-blue-700">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 hover:text-blue-700">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-700 shadow transition hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-pink-600 shadow transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-800 shadow transition hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-blue-300 pt-6 md:flex-row">

          <p className="text-center text-sm text-gray-700">
            © 2026 VeLoUrA MART. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
          >
            <FaArrowUp />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;