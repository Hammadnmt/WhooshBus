import React from "react";
import Home from "./components/Home";
import MainNav from "./components/MainNav";
import Trip from "./components/Trip";
import TripReview from "./components/TripReview";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <MainNav />
      {/* <Home />
      <Trip />
      <TripReview /> */}
      <Booking />
    </>
  );
}

export default App;
