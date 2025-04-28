import React from "react";
import { Button } from "./ui/button";

interface TripProps {
  departureDate?: string;
  departureTime?: string;
  departureCity?: string;
  arrivalDate?: string;
  arrivalTime?: string;
  arrivalCity?: string;
  economyPrice?: number;
  businessPrice?: number;
  onBookNow?: () => void;
}

export default function Trip({
  departureDate,
  departureTime,
  departureCity,
  arrivalDate,
  arrivalTime,
  arrivalCity,
  economyPrice,
  businessPrice,
  onBookNow,
}: TripProps) {
  return (
    <div className="mb-6 mt-4 border border-gray-300 rounded-2xl bg-[#f9fafb] p-8 w-[90%] max-w-4xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 shadow-lg">
      {/* Left: Departure and Arrival Info */}
      <div className="flex flex-col sm:flex-row gap-12 border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pb-0 lg:pr-8">
        {/* Departure */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
          <small className="text-gray-500 text-xs">{departureDate || "N/A"}</small>
          <h4 className="text-gray-800 font-bold text-xl">{departureTime || "N/A"}</h4>
          <small className="text-gray-600 text-sm">{departureCity || "N/A"}</small>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex items-center justify-center">
          <span className="text-gray-400 text-2xl">→</span>
        </div>

        {/* Arrival */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
          <small className="text-gray-500 text-xs">{arrivalDate || "N/A"}</small>
          <h4 className="text-gray-800 font-bold text-xl">{arrivalTime || "N/A"}</h4>
          <small className="text-gray-600 text-sm">{arrivalCity || "N/A"}</small>
        </div>
      </div>

      {/* Middle: Pricing */}
      <div className="flex flex-col gap-6 text-center border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pb-0 lg:pr-8">
        <div>
          <span className="text-gray-500 text-sm">Economy Class</span>
          <h5 className="text-gray-800 font-bold text-lg">
            PKR {economyPrice !== undefined ? economyPrice : "N/A"}
          </h5>
        </div>
        <div>
          <span className="text-gray-500 text-sm">Business Class</span>
          <h5 className="text-gray-800 font-bold text-lg">
            PKR {businessPrice !== undefined ? businessPrice : "N/A"}
          </h5>
        </div>
      </div>

      {/* Right: Book Now Button */}
      <div className="flex justify-center items-center">
        <Button
          className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-full px-8 py-3 transition-all duration-300"
          onClick={onBookNow}
          disabled={!onBookNow}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
