import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { BadgePercent, Bus, CalendarDays, Users } from "lucide-react";

export default function Booking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-5xl mx-auto">
        {/* Form Section */}
        <Card className="w-full bg-white border border-gray-200 shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-800">
              <Bus className="w-5 h-5" />
              Passenger Information
            </CardTitle>
            <p className="text-sm text-gray-500">Fill in your details to reserve your seat</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" placeholder="First Name" className="bg-gray-100" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" placeholder="Last Name" className="bg-gray-100" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="you@example.com" className="bg-gray-100" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+923xxxxxxxxx" className="bg-gray-100" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="cnic">CNIC / ID Number *</Label>
              <Input id="cnic" placeholder="35201-1234567-8" className="bg-gray-100" />
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="from">Departure City *</Label>
                <Input id="from" placeholder="e.g. Lahore" className="bg-gray-100" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="to">Destination City *</Label>
                <Input id="to" placeholder="e.g. Islamabad" className="bg-gray-100" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="date">Departure Date *</Label>
                <Input id="date" type="date" className="bg-gray-100" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="time">Departure Time *</Label>
                <Input id="time" type="time" className="bg-gray-100" />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="passengers">Number of Passengers *</Label>
              <Input id="passengers" type="number" min={1} placeholder="e.g., 2" className="bg-gray-100" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any special requests..." className="bg-gray-100" />
            </div>
          </CardContent>
        </Card>

        {/* Booking Summary */}
        <Card className="w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-800">
              <CalendarDays className="w-5 h-5" />
              Booking Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-semibold text-gray-800">Operator: Daewoo Express</p>
              <p className="text-sm text-gray-500">From: Lahore</p>
              <p className="text-sm text-gray-500">To: Islamabad</p>
              <p className="text-sm text-gray-500">Date: 12 May 2025</p>
              <p className="text-sm text-gray-500">Time: 10:30 AM</p>
              <p className="text-sm text-gray-500">Seats: A1, A2</p>
              <p className="text-sm text-gray-500">Terminal: Main Bus Terminal, Lahore</p>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <BadgePercent className="w-4 h-4 text-gray-400" />
              <a href="#" className="text-sm underline text-blue-600 hover:text-blue-700">
                Add a promo code
              </a>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Ticket Price</span>
                <span className="font-medium">Rs. 2,000</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Taxes</span>
                <span className="font-medium">Rs. 200</span>
              </div>
              <div className="flex justify-between font-semibold text-sm text-gray-900">
                <span>Total</span>
                <span>Rs. 2,200</span>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md rounded-xl">
              Confirm & Pay
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
