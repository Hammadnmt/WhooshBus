"use client";
import React from "react";
import { format } from "date-fns";
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import useInputHandlerHook from "../hooks/useInputHandlerHook";
import { cn } from "@/lib/utils";
import { useLazyGetTripByRouteQuery } from "../features/trip/tripSlice";
import Trip from "./Trip";
export default function Home() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { formData, handleInputChange } = useInputHandlerHook();
  const [triggerQuery, { data: tripData, isLoading }] = useLazyGetTripByRouteQuery();

  const TIME_ZONE = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
  ];
  function filteredDestination() {
    const array = TIME_ZONE.filter((zone) => zone != formData.Origin);
    return array.map((zone) => (
      <SelectItem key={zone} value={zone}>
        {zone}
      </SelectItem>
    ));
  }
  function searchTrips() {
    try {
      triggerQuery({
        to: formData.Destination,
        from: formData.Origin,
        date: formData.date,
      }).unwrap();
    } catch (error) {
      console.log("error", error);
    }
  }
  console.log("form", formData);
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div className="w-9/12 p-8 bg-indigo-200 rounded-3xl shadow-md flex flex-col gap-8">
        <div className="flex justify-center gap-8">
          <Select name="Origin" onValueChange={(value) => handleInputChange("Origin", value)}>
            <SelectTrigger className="w-[280px] bg-white border-gray-300 shadow-sm">
              <SelectValue placeholder="Select Origin" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {TIME_ZONE.map((zone, index) => (
                <SelectItem key={index} value={zone}>
                  {zone}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select name="Destination" onValueChange={(value) => handleInputChange("Destination", value)}>
            <SelectTrigger className="w-[280px] bg-white border-gray-300 shadow-sm">
              <SelectValue placeholder="Select Destination" />
            </SelectTrigger>
            <SelectContent className="max-h-60">{filteredDestination()}</SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "w-[120px] flex justify-start items-center gap-[5px] text-left text-[13px] p-1 bg-white border-gray-300 rounded-[8px] shadow-sm",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon /> {date ? format(date, "PPP") : <span>Pick a date</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(selectedDate) => {
                  console.log("Date selecting");
                  setDate(selectedDate);
                  handleInputChange("date", selectedDate ? format(selectedDate, "yyyy-MM-dd") : "");
                }}
                fromDate={new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => searchTrips()}
            className="w-40 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg shadow-md"
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        {tripData?.map((trip) => (
          <Trip
            id={trip._id}
            key={trip._id}
            description={trip.description}
            busNumber={trip.Bus.bus_no}
            totalSeats={trip.Bus.total_seats}
            source={trip.Route.source}
            destination={trip.Route.destination}
            fare={trip.Route.fare}
            departureDate={new Date(trip.travel_date).toDateString()}
            departureTime={new Date(trip.departure_time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            arrivalDate={new Date(trip.travel_date).toDateString()}
            arrivalTime={new Date(trip.arrival_time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            onBookNow={() => console.log(`Booking trip ${trip._id}`)}
          />
        ))}
      </div>
    </div>
  );
}
