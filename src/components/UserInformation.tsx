import React, { useEffect } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import useInputHandlerHook from "../hooks/useInputHandlerHook";
import { useLocation, useNavigate } from "react-router";
import { useHandleUserMutation } from "../features/auth/authSlice";
import { toast } from "sonner";

export default function UserInformation() {
  const { formData, handleInputChange } = useInputHandlerHook();
  const [triggerQuery, { isSuccess, error, isError }] = useHandleUserMutation();
  const location = useLocation();
  const navigate = useNavigate();
  const { payload } = location.state;

  const userInformation = z.object({
    fName: z.string().min(5, "First Name should be atleast 5 charaters").trim(),
    lName: z.string().nonempty().trim(),
    pNumber: z.string().startsWith("+92").length(13),
  });

  const submitInformation = () => {
    const user = userInformation.safeParse(formData);
    if (!user.success) {
      toast.error("Validation failed");
      return;
    }
    triggerQuery({
      fName: formData.fName,
      lName: formData.lName,
      pNumber: formData.pNumber,
      email: payload.email,
      token: payload.token,
      isNew: payload.isUserNew,
    }).then((result) => {
      console.log("result", result);
    });
    console.log("user", user);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.message);
    }
    if (isSuccess) {
      toast.success("Signing you in few moments..");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isSuccess, isError, navigate, error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create your account</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your details to get started</p>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="fName" className="text-sm">
              First Name
            </Label>
            <Input
              name="fName"
              placeholder="John"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="lName" className="text-sm">
              Last Name
            </Label>
            <Input
              name="lName"
              placeholder="Doe"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="pNumber" className="text-sm">
              Phone Number
            </Label>
            <Input
              name="pNumber"
              placeholder="+923001234567"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
        <Button
          className="mt-6 w-full text-white bg-[#611f69] hover:bg-[#53185c]"
          onClick={submitInformation}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
