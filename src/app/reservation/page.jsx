import React from "react";
import BookingForm from "./Form";
import Container from "@/components/Container";

const TableBooking = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold text-center mb-4">
        Restaurant Table Booking
      </h1>
      <BookingForm />
    </Container>
  );
};

export default TableBooking;
