import React from "react";
import { useNavigate } from "react-router-dom";
import LittleLemonSeating from "../assets/Foods.jpg";
import BookingForm from "../components/BookingForm";
import "../styles/Booking.css";

const Booking = () => {
    const navigate = useNavigate();

    return (
        <main className="booking">
            <h1>Booking</h1>
            <section>
                <img src={LittleLemonSeating}
                    alt="Little lemon restauraunt indoor"
                    style={{ borderRadius: "8px", width: "65%" }}
                />
            </section>
            <section>
                <BookingForm navigate={navigate} />
            </section>
        </main>
    );
};

export default Booking;