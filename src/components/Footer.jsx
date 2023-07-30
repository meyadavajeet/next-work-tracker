// components/Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-2">123 Awesome Street</p>
          <p className="text-lg mb-2">Awesome City</p>
          <p className="text-lg">Email: contact@example.com</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-auto flex-col items-start ml-44">
            <Link href="#" className="row text-xl flex items-center mb-2">
              <FaFacebook className="row-item mr-2" />
              <span className="row-item">Facebook</span>
            </Link>
            <Link href="#" className="row text-xl flex items-center mb-2">
              <FaTwitter className="row-item mr-2" /> Twitter
            </Link>
            <Link href="#" className="row text-xl flex items-center mb-2">
              <FaInstagram className="row-item mr-2" /> Instagram
            </Link>
            <Link href="#" className="row text-xl flex items-center mb-2">
              <FaLinkedin className="row-item mr-2" /> LinkedIn
            </Link>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-3xl font-semibold mb-4">Newsletter</h2>
          <p className="text-lg mb-2">Subscribe to our newsletter</p>
          <div className="flex items-center justify-center md:justify-end mt-2 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 rounded-l-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="bg-blue-600 text-white rounded-r-md py-2 px-4 ml-2 hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Your Website Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
