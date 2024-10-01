"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button, ButtonLinks } from "./button";
import { rcfLogo } from "../../assets";
import { useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Attendance", href: "/attendance" },
  { name: "Resources", href: "/resources" },
  { name: "30 days of discipleship", href: "/discipleship" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={rcfLogo} alt="RCF logo" width={40} height={40} />
            </Link>
          </div>
          {isMobile ? (
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          ) : (
            <>
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm block opacity-65 hover:opacity-100 ${
                      pathname === item.href && "opacity-100"
                    } `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <ButtonLinks href="/log-in" size="sm">Sign In</ButtonLinks>
            </>
          )}
        </div>
      </div>

      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 opacity-65 hover:opacity-100 rounded-md text-base ${
                  pathname === item.href && "opacity-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ButtonLinks href='log-in' size="sm" className="w-full mt-2">
              Sign In
            </ButtonLinks>
          </div>
        </div>
      )}
    </nav>
  );
}
