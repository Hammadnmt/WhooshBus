import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Timeline from "./ui/timeline";
import { useGetTripByIdQuery } from "../features/trip/tripSlice";
import { useLocation, useNavigate } from "react-router";
import { SeatBadgeList } from "./SeatBadgeList";
import { format } from "date-fns";
export default function TripReview() {
  const location = useLocation();
  const { bookingInfo, id } = location.state;
  const { data: tripData } = useGetTripByIdQuery(id);
  const navigate = useNavigate();
  return (
    <div className="p-[10px] bg-cyan-50">
      <div className="flex flex-col p-[10px]">
        <div className="flex flex-col gap-4 bg-blue-700 p-4 rounded-t-[25px]">
          <h2 className="text-white font-bold text-3xl">Review Your Trip</h2>
          <p className="p-0 text-white opacity-50">Check you travel details</p>
        </div>
        <div className="w-full flex pl-[20px] bg-white rounded-bl-[25px]">
          <div className="w-[70%] p-[25px]">
            <div className="flex gap-10">
              <div className="flex gap-5">Icon</div>
              <div className="text-blue-700 text-[18px] font-semibold">Daweo Express</div>
            </div>
            <div className="mt-[2.75rem] w-[20%]">
              <div className="flex justify-center items-center mt-3">
                <Timeline />
                <div className="flex flex-col gap-[1.75rem] ml-3">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-gray-800">{tripData?.Route?.source}</h3>
                    <h3 className="text-gray-800">{tripData?.departure_time.split("T")[0]}</h3>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-gray-800">{tripData?.Route?.destination}</h3>
                    <h3 className="text-gray-800">{tripData?.arrival_time.split("T")[0]}</h3>
                  </div>
                </div>
              </div>
              <div className="flex gap-[2rem] mt-[2.75rem]">
                <Badge className="bg-[#f0f0fd] w-[6rem] text-[13px] font-medium text-[#3a36e0] pt-[4px]">
                  Luxury
                </Badge>
                <Badge className="bg-[#e9f9ee] w-[6rem] text-[13px] font-medium text-[#28a745] pt-[4px]">
                  Refundable
                </Badge>
              </div>
            </div>
            <div className="flex flex-col gap-5 bg-[#f0f0fd] w-[50%] mt-[2rem] p-[20px] rounded-[10px]">
              <div className="flex justify-between">
                <span className="text-[14px] opacity-50">Pickup Point</span>
                <span>Point</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[14px] opacity-50">Travel Duration</span>
                <span>{tripData?.Route.duration} hrs</span>
              </div>
            </div>
            <div>
              <SeatBadgeList bookingInfo={bookingInfo} handleUnselectSeat={() => console.log("cant")} />
            </div>
          </div>
          <div className="w-[30%] pl-[25px]  pr-[25px] flex flex-col gap-[2rem] rounded-br-[25px] bg-red-400">
            <div className="flex flex-col gap-5">
              <div className="flex justify-center items-center gap-5 pt-[25px] pl-[25px]">
                <span className="font-light text-[18px]">PKR</span>
                <h2 className="text-[18px] font-medium">Price Summary</h2>
              </div>
              <div className="flex justify-between">
                <h2>Passenger</h2>
                <span>{bookingInfo.length}</span>
              </div>
              <div className="flex justify-between">
                <h2>Base Fare</h2>
                <span>{tripData?.Route?.fare}</span>
              </div>
            </div>

            <div className="flex justify-between">
              <h1>Total Amount</h1>
              <h3>{bookingInfo.length * tripData?.Route?.fare}</h3>
            </div>
            <div className="flex justify-center items-center">
              <Button
                className="bg-blue-900 hover:bg-green-900 w-full"
                onClick={() => {
                  navigate("/payment", {
                    state: {
                      bookingInfo,
                      tripData,
                      fare: bookingInfo.length * tripData?.Route?.fare,
                    },
                  });
                }}
              >
                Continue Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
