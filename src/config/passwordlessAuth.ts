import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "./firebase";

export const sendMagicLink = async (email) => {
  console.log("email", email);
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:5173/finishSignIn",
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email.email, actionCodeSettings);
    // Save the email locally to complete the sign-in process later
    window.localStorage.setItem("emailForSignIn", email.email);
    console.log("Magic link sent! Check your email.");
  } catch (error) {
    console.error("Error sending magic link:", error.message);
  }
};
