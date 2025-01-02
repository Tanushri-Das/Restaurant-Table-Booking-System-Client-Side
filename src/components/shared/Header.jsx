"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="px-10 lg:px-20 py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-lg font-bold lg:flex-grow-0">
          <Link href="/">
            <div className="flex justify-center items-center space-x-3">
              <FaUtensils className="text-4xl" />
              <h1 className="text-3xl font-bold  tracking-wide transition-all duration-300 ease-in-out hover:scale-105">
                SpiceBox
              </h1>
            </div>
          </Link>
        </div>

        {/* Center: Navigation (Visible only on large screens) */}
        <nav className="hidden lg:flex lg:inset-0 lg:justify-center lg:items-center">
          <div className="flex items-center gap-x-8 font-semibold text-lg">
            <Link href="/" className="text-lg">
              Home
            </Link>
            <Link href="/reservation" className="text-lg">
              Book Reservation
            </Link>
            <Link href="/bookings" className="text-lg">
              Bookings
            </Link>
          </div>
        </nav>

        {/* Right: Menu Icon (Visible only on small to medium screens) */}
        <div className="lg:hidden">
          <button onClick={toggleDrawer}>
            <FiMenu className="text-2xl" />
          </button>
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 transition-transform transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } w-[200px] z-50 lg:hidden`}
        >
          {/* Close Icon inside Drawer */}
          <div className="flex justify-end p-4">
            <button onClick={toggleDrawer}>
              <FaXmark className="text-2xl" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col gap-y-4 p-5 font-semibold text-lg lg:text-[16px]">
            <Link href="/" className="text-lg" onClick={toggleDrawer}>
              Home
            </Link>
            <Link
              href="/reservation"
              className="text-lg"
              onClick={toggleDrawer}
            >
              Book Reservation
            </Link>
            <Link href="/bookings" className="text-lg" onClick={toggleDrawer}>
              Bookings
            </Link>
          </nav>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
