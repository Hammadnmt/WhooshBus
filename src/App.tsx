import React, { Suspense, lazy } from "react";
import MainNav from "./components/MainNav";
import Trip from "./components/Trip";
import Booking from "./components/Booking";
import Login from "./components/Login";
import Fallback from "./components/Fallback";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "@/components/ui/sonner";

const LoginRegisterPage = React.lazy(() => import("./pages/LoginRegisterPage"));
const TripReview = React.lazy(() => import("./components/TripReview"));
const Home = React.lazy(() => import("./components/Home"));
const UserInformation = React.lazy(() => import("./components/UserInformation"));
const VerificationScreen = React.lazy(() => import("./components/VerificationScreen"));
function App() {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/login" element={<LoginRegisterPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/signingin" element={<VerificationScreen />} />
            <Route path="/information" element={<UserInformation />} />
            <Route path="/review" element={<TripReview />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
