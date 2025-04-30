import React from "react";
import Home from "./components/Home";
import MainNav from "./components/MainNav";
import Trip from "./components/Trip";
import TripReview from "./components/TripReview";

function App() {
  return (
    <>
      <MainNav />
      <Home />
      <Trip />
      <TripReview />
    </>
  );
}

export default App;
