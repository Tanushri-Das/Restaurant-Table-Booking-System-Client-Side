import React from "react";
import BookingForm from "./Form";

const TableBooking = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Restaurant Table Booking
      </h1>
      <BookingForm />
    </div>
  );
};

export default TableBooking;
