import { BusSVG } from "@/assets/busSVG";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Home, MapPin, Clock } from "lucide-react"; // Importing icons from lucide-react for better clarity
import { useState } from "react";

// Toggle for mobile menu
const MainNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500">
      <nav className="flex justify-between items-center w-full p-6 max-w-screen-xl sticky top-0 z-50">
        {/* Logo */}
        <div
          className="logo-container flex cursor-pointer transition-all transform hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BusSVG width={50} height={50} />
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:flex gap-8 items-center text-white font-medium">
          <Button
            variant="link"
            size="lg"
            className="text-lg hover:text-teal-200 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Home className="w-5 h-5 mr-2" />
            Home
          </Button>
          <Button
            variant="link"
            size="lg"
            className="text-lg hover:text-teal-200 transition-colors"
            onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
          <Button
            variant="link"
            size="lg"
            className="text-lg hover:text-teal-200 transition-colors"
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
          >
            <Clock className="w-5 h-5 mr-2" />
            Schedules
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="text-white border-white hover:bg-teal-600 transition-all"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
    </div>
  );
};

export default MainNav;
