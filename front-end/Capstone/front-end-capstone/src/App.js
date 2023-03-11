import React from "react";
import './App.css';
import { useFormContext } from "./store/FormStore";
import Home from "./layouts/Home";
import Footer from "./components/Footer";
import BookingConfirmation from "./components/BookingConfirmation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Reservation from "./layouts/Booking";

function App() {
  const { form } = useFormContext();

  const formProps = {
    name: form.name,
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
    occasion: form.occasion,
    table: form.tablePreference,
    request: form.message,
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route
          path="/reservation-confirmed"
          element={<BookingConfirmation {...formProps} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
