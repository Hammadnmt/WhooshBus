// SeatBadgeList.tsx
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Seat = {
  seatNumber: number;
  gender: string;
};

interface SeatBadgeListProps {
  bookingInfo: Seat[];
  handleUnselectSeat: (seatNumber: number) => void;
}

export const SeatBadgeList: React.FC<SeatBadgeListProps> = ({ bookingInfo, handleUnselectSeat }) => {
  return (
    <div className="flex flex-wrap gap-2 items-center mt-[1.5rem]">
      {bookingInfo.map((seat) => (
        <Badge
          key={seat.seatNumber}
          className={`${seat.gender === "male" ? "bg-[#364F6B]" : "bg-[#FC5185]"}`}
        >
          {seat.gender === "male" ? "Male " : "Female "}
          {seat.seatNumber}
          <Button
            variant="outline"
            className="ms-2 p-0 bg-transparent border-none hover:bg-transparent"
            onClick={() => handleUnselectSeat(seat.seatNumber)}
          >
            ×
          </Button>
        </Badge>
      ))}
    </div>
  );
};
