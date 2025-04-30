import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useSeatSelection } from "../hooks/useSeatInformationHook";
import { SeatBadgeList } from "./SeatBadgeList";
import { SeatBox } from "./SeatBox";
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
type Seat = {
  seatNumber: number;
  gender: string;
};
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
  const [bookingInfo, setBookingInfo] = useState<Seat[]>([]);
  const [selectSeat, setSelectedSeat] = useState<number | null>(null);
  const { getSeatInfo, handleGenderSelect, handleSeatClick, handleUnselectSeat } = useSeatSelection({
    bookingInfo,
    setBookingInfo,
    selectSeat,
    setSelectedSeat,
  });
  return (
    <>
      <Dialog>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Select Seat Number</DialogTitle>
          </DialogHeader>
          <div>
            <SeatBadgeList bookingInfo={bookingInfo} handleUnselectSeat={handleUnselectSeat} />
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="container-fluid p-0">
              <h5 className="mb-4 text-primary">Select Your Seats</h5>
              <div className="grid grid-cols-5 gap-3 max-w-600px">
                {Array.from({ length: 20 }, (_, i) => {
                  const seatNum = i + 1;
                  const isSelected = bookingInfo.some(
                    (seat: { seatNumber: number }) => seat.seatNumber === seatNum
                  );
                  const { gender, reserved } = getSeatInfo(seatNum);

                  return (
                    <SeatBox
                      key={seatNum}
                      seatNum={seatNum}
                      reserved={reserved}
                      gender={gender}
                      isSelected={isSelected}
                      onSeatClick={handleSeatClick}
                      onGenderSelect={handleGenderSelect}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => alert("proceed")} className="bg-green-900">
              Proceed
            </Button>
          </DialogFooter>
        </DialogContent>
        <div className="mb-6 mt-4 border border-gray-300 rounded-2xl bg-[#f9fafb] p-8 w-[90%] max-w-4xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 shadow-lg">
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
          <div className="flex flex-col gap-6 text-center border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pb-0 lg:pr-8">
            <div>
              <span className="text-gray-500 text-sm">Economy className</span>
              <h5 className="text-gray-800 font-bold text-lg">
                PKR {economyPrice !== undefined ? economyPrice : "N/A"}
              </h5>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Business className</span>
              <h5 className="text-gray-800 font-bold text-lg">
                PKR {businessPrice !== undefined ? businessPrice : "N/A"}
              </h5>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <DialogTrigger asChild>
              <Button
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-full px-8 py-3 transition-all duration-300"
                onClick={onBookNow}
              >
                Show Seats
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </Dialog>
    </>
  );
}
