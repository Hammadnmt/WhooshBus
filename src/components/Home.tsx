import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-9/12 p-8 bg-indigo-200 rounded-3xl shadow-md flex flex-col gap-8">
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Origin Select */}
          <Select>
            <SelectTrigger className="w-[280px] bg-white border-gray-300 shadow-sm">
              <SelectValue placeholder="Select Origin" />
            </SelectTrigger>
            <SelectContent>
              {/* Same select items... */}
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              {/* ... */}
            </SelectContent>
          </Select>

          {/* Destination Select */}
          <Select>
            <SelectTrigger className="w-[280px] bg-white border-gray-300 shadow-sm">
              <SelectValue placeholder="Select Destination" />
            </SelectTrigger>
            <SelectContent>
              {/* Same select items... */}
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              {/* ... */}
            </SelectContent>
          </Select>

          {/* Date Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] bg-white border-gray-300 justify-start text-left font-normal shadow-sm",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-5 w-5 text-indigo-600" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
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
