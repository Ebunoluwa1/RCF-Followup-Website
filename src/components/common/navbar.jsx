"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button, ButtonLinks } from "./button";
import { rcfLogo } from "../../assets";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
  const { pathname } = useLocation();
  const { isAuthenticated, logout } = useAuth();

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
              <div className="ml-10 flex items-baseline text-sm lg:text-lg lg:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm md:text-[16px] lg:text-lg block opacity-65 hover:opacity-100 ${
                      pathname === item.href && "opacity-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {isAuthenticated ? (
                <Button size="md" onClick={logout} className="px-5 lg:px-8">
                  Log out
                </Button>
              ) : (
                <ButtonLinks href="/log-in" size="md" className="px-5 lg:px-8">
                  Sign In
                </ButtonLinks>
              )}
            </>
          )}
        </div>
      </div>

      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="absolute bg-white w-full top-20 px-2 pt-2 pb-5 space-y-1 sm:px-3 shadow-lg z-50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(!isOpen)}
                className={`block px-3 py-2 opacity-65 hover:opacity-100 rounded-md text-base ${
                  pathname === item.href && "opacity-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <Button
                size="sm"
                className="w-full mt-2"
                onClick={() => {
                  setIsOpen(!isOpen);
                  logout();
                }}
              >
                Log out
              </Button>
            ) : (
              <ButtonLinks
                href="log-in"
                size="sm"
                className="w-full mt-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                Sign In
              </ButtonLinks>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
