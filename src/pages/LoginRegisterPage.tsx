import React, { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import GoogleIcon from "../assets/googleSvg";
import useInputHandlerHook from "../hooks/useInputHandlerHook";
import { useLoginUserMutation, useRegisterUserMutation } from "../features/auth/authSlice";
import { sendMagicLink } from "../config/passwordlessAuth";

export default function LoginRegisterPage() {
  const { handleInputChange, formData } = useInputHandlerHook();
  const [loginUser, { data, error, isLoading, isSuccess }] = useLoginUserMutation();
  const [registerUser, { isSuccess: userRegistered }] = useRegisterUserMutation();
  const signInUser = () => {
    try {
      loginUser(formData).then((result) => {
        console.log("result", result);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const signUpUser = () => {
    try {
      registerUser(formData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("hurraaaaah");
  }, [isSuccess, userRegistered]);
  console.log("form", formData);
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-50 px-4 overflow-visible">
      <div className="flex flex-col justify-center items-start gap-[1rem] bg-red-300 w-[80%] px-[4rem]">
        <div>
          <h1 className="text-3xl">WhooshBus</h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            Travel Smart, <br /> Travel Safe
          </h1>
        </div>
        <div>
          <i className="text-sm text-muted-foreground mt-2">
            Join a growing community of happy travelers. Our platform
            <br /> is built on reliability, transparency, and your satisfaction.
          </i>
        </div>
      </div>

      <div className="w-full md:w-1/2 px-10">
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
                <Input
                  name="email"
                  placeholder="john@example.com"
                  className="bg-gray-100 rounded-md"
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 mt-[4px] ">
                <Button
                  onClick={() => sendMagicLink(formData)}
                  className="w-full bg-blue-700 hover:bg-blue-800 transition font-semibold"
                >
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
                <Input
                  name="fname"
                  placeholder="First Name"
                  className="bg-gray-100 rounded-md"
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="bg-gray-100 rounded-md"
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 rounded-md"
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
                <Input
                  name="cpassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-gray-100 rounded-md"
                  onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 mt-6">
                <Button
                  onClick={signUpUser}
                  className="w-full bg-blue-700 hover:bg-blue-800 transition font-semibold"
                >
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
