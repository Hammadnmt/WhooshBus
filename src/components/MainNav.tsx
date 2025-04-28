import { BusSVG } from "@/assets/busSVG";

export default function MainNav() {
  return (
    <div className="flex justify-center items-center">
      <nav className="flex justify-between w-full p-6 sticky top-0 bg-blue-500 shadow-md z-50">
        {/* Logo */}
        <div
          className="logo-container flex cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BusSVG width={50} height={50} />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-12 ml-4 justify-center items-center">
          <div className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            Home
          </div>
          <div className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            Start Your Journey
          </div>
          <div className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            Schedules
          </div>
        </div>
      </nav>
    </div>
  );
}
