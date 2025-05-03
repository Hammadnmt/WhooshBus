// src/pages/FinishSignIn.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // your firebase.js
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const FinishSignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // ask the user for email again (or redirect)
        alert("No email found. Please sign in again.");
        return;
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          console.log("Signed in!", result.user);
          window.localStorage.removeItem("emailForSignIn");
          navigate("/dashboard"); // or wherever
        })
        .catch((error) => {
          console.error("Error signing in:", error);
        });
    }
  }, []);

  return <p>Signing you in...</p>;
};

export default FinishSignIn;
