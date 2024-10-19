"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from '@/public/Logo.svg'
import Image from "next/image";
const links = [
  { href: "/", label: "Home" },
  { href: "/pip-calculator", label: "Pip Calculator" },
  { href: "/psychology-test", label: "Psychology Test" },
  { href: "/courses", label: "Courses" },
  { href: "/forex", label: "What is Forex?" },
  { href: "/auth", label: "Login / Sign Up" },
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const path = usePathname()

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden"); // Prevent scrolling
    } else {
      document.body.classList.remove("overflow-hidden"); // Allow scrolling
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const renderLinks = (onClick?: () => void) => {
    return links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`relative ${path === link.href ? "text-green-400" : "text-white"} hover:text-green-400 transition duration-300`}
        onClick={onClick}
      >
        <span
          className="pb-1 hover:border-b-4 hover:border-green-400 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full"
        >
          {link.label}
        </span>
      </Link>
    ));
  };

  return (
    <>
      <nav
        className={`bg-glass backdrop-blur-md shadow-lg py-2 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 m-4 rounded-lg ${
          showNavbar ? "translate-y-0" : "-translate-y-20"
        }`}
      >
        <div className="mx-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <Link href="/"><Image src={Logo} alt="logo" height={60} width={200} /></Link>
          </div>
          <div className="hidden md:flex space-x-6">{renderLinks()}</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className="text-white focus:outline-none grid justify-end"
            >
              {isDrawerOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-80 transition-opacity duration-300 ease-in-out ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-64 bg-glass backdrop-blur-md h-full p-4 shadow-lg transition-transform duration-500 ease-in-out transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col space-y-4">
            {renderLinks(toggleDrawer)}
          </div>
        </div>
      </div>
    </>
  );
}