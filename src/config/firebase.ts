import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX__T_PgiPlCyqnLzaaGV2J2Ze3mz_Tas",
  authDomain: "http://localhost:5173/finishSignIn",
  projectId: "buspro-auth",
  storageBucket: "buspro-auth.firebasestorage.app",
  messagingSenderId: "859659604443",
  appId: "1:859659604443:web:1b875dce4b35957b0897fe",
  measurementId: "G-76FZTB7Y2N",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
