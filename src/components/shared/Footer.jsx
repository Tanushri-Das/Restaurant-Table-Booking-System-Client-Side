"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUtensils,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Link href="/">
              <div className="flex justify-center md:justify-start items-center space-x-3">
                <FaUtensils className="text-4xl" />
                <h2 className="text-2xl font-bold">SpiceBox</h2>
              </div>
            </Link>
          </div>
          <p className="text-gray-300 mb-2 flex justify-center md:justify-start items-center">
            <FaMapMarkerAlt className="mr-2" /> 123 Uttara, Dhaka, Bangladesh
          </p>
          <p className="text-gray-300 mb-2 flex justify-center md:justify-start items-center">
            <FaPhoneAlt className="mr-2" /> +1-555-123-4567
          </p>
          <p className="text-gray-300 flex justify-center md:justify-start items-center">
            <FaEnvelope className="mr-2" /> dastanushri402@gmail.com
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Our Menu</Link>
            </li>
            <li>
              <Link href="/">Reservations</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">View Guides</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Blog Posts</Link>
            </li>
            <li>
              <Link href="/">Our Branches</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-600"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-600"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-600"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-600"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {date.getFullYear()} SpiceBox. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
