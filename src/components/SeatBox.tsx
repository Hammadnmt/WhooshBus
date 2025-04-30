interface SeatBoxProps {
  seatNum: number;
  reserved: boolean;
  gender: string | null;
  isSelected: boolean;
  onSeatClick: (event: React.MouseEvent, seatNumber: number) => void;
  onGenderSelect: (gender: "male" | "female") => void;
}
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const SeatBox = ({
  seatNum,
  reserved,
  gender,
  isSelected,
  onSeatClick,
  onGenderSelect,
}: SeatBoxProps) => {
  const seatColor =
    reserved || isSelected ? (gender === "male" ? "bg-[#364F6B]" : "bg-[#FC5185]") : "bg-[#F5F5F5]";

  return (
    <Popover key={seatNum}>
      <PopoverTrigger asChild>
        <div
          className={`p-3 rounded text-center font-bold cursor-pointer ${seatColor}`}
          onClick={(e) => onSeatClick(e, seatNum)}
        >
          {seatNum}
        </div>
      </PopoverTrigger>
      <PopoverContent side="top" align="center" className="w-80">
        Select Gender for Seat
        <div className="flex justify-around gap-3 mt-2">
          {(["male", "female"] as const).map((g) => (
            <div key={g} className="text-center p-2 rounded cursor-pointer" onClick={() => onGenderSelect(g)}>
              <div className="flex items-center gap-2">
                <div
                  className={`w-[20px] h-[20px] rounded-[4px] ${
                    g === "male" ? "bg-[#364F6B]" : "bg-[#FC5185]"
                  }`}
                />
                <span>{g.charAt(0).toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
