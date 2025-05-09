import React, { useEffect, useState } from "react";
import { getAdditionalUserInfo, signInWithEmailLink, isSignInWithEmailLink } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function VerificationScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = localStorage.getItem("emailForSignIn");
      if (!email) {
        email = prompt("Enter Email");
      }
      signInWithEmailLink(auth, email, window.location.href).then(async (results) => {
        const user = results.user;
        const UId = await user.getIdToken();
        const userInfo = getAdditionalUserInfo(results);
        const isUserNew = userInfo?.isNewUser;
        if (isUserNew) {
          navigate("/information", {
            state: {
              payload: {
                UId,
                email,
                isUserNew,
              },
            },
          });
        } else {
          navigate("/");
        }
        console.log("results", results);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <CardContent className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">Verifying your link...</h2>
          <p className="text-sm text-gray-500 text-center">
            Please wait while we confirm your authentication.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
