import React from "react";

const BookingConfirmation = ({
    name,
    date,
    time,
    guests,
    occasion = false,
    table = false,
    request = false,
}) => {

    return (
        <main>
            <section
                style={{}}>
                <h1>Your booking is confirmed, {name}!</h1>
                <p>You are booked for {date} at {time} for {guests}(s).</p>

                {occasion && (
                    <p>
                        Are you celebrating a {occasion}? We will handle your cherished event with the upmost importance!
                    </p>
                )}

                {table && (
                    <p>Table: {table}</p>
                )}

                {request && (
                    <p>
                        Thank you for your special request. We will be in contact if we have further questions.
                    </p>
                )}
            </section>
        </main>
    );
};

export default BookingConfirmation;