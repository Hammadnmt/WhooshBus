import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import { transformSeatsData } from "../utils";
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
  const [bookingInfo, setBookingInfo] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  const COLORS = {
    primary: "#364F6B",
    secondary: "#3FC1C9",
    light: "#F5F5F5",
    accent: "#FC5185",
  };
  const handleSeatClick = (event, seatNumber: number) => {
    const isAlreadySelected = bookingInfo.some(
      (seat: { seatNumber: number }) => seat.seatNumber === seatNumber
    );

    if (isAlreadySelected) {
      setBookingInfo((prev) => prev.filter((seat: { seatNumber: number }) => seat.seatNumber !== seatNumber));
      setSelectedSeat(null);
    } else {
      console.log("elseee");
      setSelectedSeat(selectedSeat == seatNumber ? null : seatNumber);
    }
  };

  const getSeatInfo = (seatNum: number) => {
    if (!bookingInfo) return { reserved: false, gender: null };
    const reservations = transformSeatsData(bookingInfo);

    const existingReservation = reservations.find((reservation) =>
      reservation.seat_numbers.includes(seatNum)
    );

    if (existingReservation) {
      const index = existingReservation.seat_numbers.indexOf(seatNum);
      return {
        reserved: true,
        gender: existingReservation.genders[index],
        seatNumber: null,
      };
    }

    const userSelection = bookingInfo.find((seat: { seatNumber: number }) => seat.seatNumber === seatNum);
    return {
      reserved: false,
      gender: (userSelection && userSelection.gender) || null,
    };
  };

  const handleGenderSelect = (gender: string) => {
    console.log("booking", bookingInfo);
    setBookingInfo((prev: any) => {
      const existingSeat = prev.find((seat: { seatNumber: number }) => seat.seatNumber === selectedSeat);
      if (existingSeat) {
        return prev.map((seat: { seatNumber: number }) =>
          seat.seatNumber === selectedSeat ? { ...seat, gender } : seat
        );
      }
      return [...prev, { seatNumber: selectedSeat, gender }];
    });
    setSelectedSeat(null);
  };
  const handleUnselectSeat = (seatNumber) => {
    setBookingInfo((prev) => prev.filter((seat: { seatNumber: number }) => seat.seatNumber !== seatNumber));
  };
  return (
    <>
      <Dialog>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Select Seat Number</DialogTitle>
          </DialogHeader>
          <div className="flex gap-4 mb-4">
            {[
              { color: COLORS.primary, label: "Male" },
              { color: COLORS.accent, label: "Female" },
              { color: COLORS.light, label: "Available", border: true },
            ].map(({ color, label, border }) => (
              <div key={label} className="flex items-center">
                <div
                  className="me-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "4px",
                    backgroundColor: color,
                    ...(border && { border: "1px solid #ddd" }),
                  }}
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {bookingInfo.map((seat: { seatNumber: number; gender: string }) => (
              <Badge
                key={seat.seatNumber}
                className={`${seat.gender === "male" ? "bg-[#364F6B]" : "bg-[#FC5185]"}`}
              >
                {seat.seatNumber}
                <Button
                  variant="link"
                  className="ms-2 p-0 text-white"
                  onClick={() => handleUnselectSeat(seat.seatNumber)}
                >
                  ×
                </Button>
              </Badge>
            ))}
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
                    <Popover key={seatNum}>
                      <PopoverTrigger asChild>
                        <div
                          className={`p-3 rounded text-center font-bold cursor-pointer ${
                            reserved || isSelected
                              ? gender === "male"
                                ? "bg-[#364F6B]"
                                : "bg-[#FC5185]"
                              : "bg-[#F5F5F5]"
                          }`}
                          onClick={(event) => handleSeatClick(event, seatNum)}
                        >
                          {seatNum}
                        </div>
                      </PopoverTrigger>
                      <PopoverContent side="top" align="center" className="w-80">
                        Select Gender for Seat
                        <div className="flex justify-around gap-3">
                          {["male", "female"].map((gender) => (
                            <div
                              key={gender}
                              className="text-center p-2 rounded cursor-pointer"
                              onClick={() => handleGenderSelect(gender)}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-[20px] h-[20px] rounded-[4px] ${
                                    gender === "male" ? "bg-[#364F6B]" : "bg-[#FC5185]"
                                  }`}
                                />
                                <span>{gender.charAt(0).toUpperCase()}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
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
