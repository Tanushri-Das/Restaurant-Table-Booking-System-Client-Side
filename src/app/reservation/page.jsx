import React from "react";
import BookingForm from "./Form";

const TableBooking = () => {
  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold text-center mb-4">
        Restaurant Table Booking
      </h1>
      <BookingForm />
    </div>
  );
};

export default TableBooking;
