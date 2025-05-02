import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BusIcon } from "lucide-react";
import GoogleIcon from "../assets/googleSvg";

export default function LoginRegisterPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-50 px-4 md:px-12">
      {/* Left Side Content */}
      <div className="w-1/2 hidden md:flex justify-center">
        <div className="flex flex-col justify-center items-start gap-10 px-10 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-md max-w-md h-fit">
          <div>
            <h1 className="text-3xl font-semibold text-blue-800">Safe. Reliable. Easy.</h1>
            <p className="text-sm text-gray-600 mt-2">Feel secure every mile you ride.</p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-blue-800">Plan with Confidence</h1>
            <p className="text-sm text-gray-600 mt-2">Book, track, and ride — your way.</p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-blue-800">Trusted Nationwide</h1>
            <p className="text-sm text-gray-600 mt-2">Thousands ride with WhooshBus daily.</p>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 px-4 md:px-10">
        <Tabs defaultValue="Login" className="w-full max-w-md mx-auto">
          <TabsList className="grid grid-cols-2 bg-gray-100 rounded-md mb-6">
            <TabsTrigger
              value="Login"
              className="py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-md transition"
            >
              Log in
            </TabsTrigger>
            <TabsTrigger
              value="Register"
              className="py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-md transition"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="Login">
            <Card className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold">Sign in</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input id="email" placeholder="johndoe@gmail.com" className="bg-gray-100 rounded-md" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="bg-gray-100 rounded-md"
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 mt-6">
                <Button className="w-full bg-blue-700 hover:bg-blue-800 transition font-semibold">
                  Continue →
                </Button>
                <div className="flex items-center justify-center w-full border border-gray-300 rounded-md px-4 py-2 bg-white gap-2">
                  <GoogleIcon width={16.87} height={16.87} />
                  <span className="text-sm font-medium text-black">Continue with Google</span>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Register Form */}
          <TabsContent value="Register">
            <Card className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold">Sign up</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input id="fname" placeholder="First Name" className="bg-gray-100 rounded-md" />
                <Input id="email" type="email" placeholder="Email" className="bg-gray-100 rounded-md" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 rounded-md"
                />
                <Input
                  id="cpassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-gray-100 rounded-md"
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 mt-6">
                <Button className="w-full bg-blue-700 hover:bg-blue-800 transition font-semibold">
                  Continue →
                </Button>
                <div className="flex items-center justify-center w-full border border-gray-300 rounded-md px-4 py-2 bg-white gap-2">
                  <GoogleIcon width={16.87} height={16.87} />
                  <span className="text-sm font-medium text-black">Continue with Google</span>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
