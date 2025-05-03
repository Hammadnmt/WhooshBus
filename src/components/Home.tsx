"use client";
import React from "react";
import { format } from "date-fns";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import useInputHandlerHook from "../hooks/useInputHandlerHook";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { formData, handleInputChange } = useInputHandlerHook();
  console.log("form", formData);
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-9/12 p-8 bg-indigo-200 rounded-3xl shadow-md flex flex-col gap-8">
        <div className="flex justify-center gap-8 flex-wrap">
          <Select name="Origin" onValueChange={(value) => handleInputChange("Origin", value)}>
            <SelectTrigger className="w-[280px] bg-white border-gray-300 shadow-sm">
              <SelectValue placeholder="Select Origin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            </SelectContent>
          </Select>
          <Select name="Destination" onValueChange={(value) => handleInputChange("Destination", value)}>
            <SelectTrigger className="w-[280px] bg-white border-gray-300 shadow-sm">
              <SelectValue placeholder="Select Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className="w-[280px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => alert("Clicked")}
            className="w-40 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg shadow-md"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
