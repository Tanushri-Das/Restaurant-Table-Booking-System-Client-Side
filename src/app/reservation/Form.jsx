"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const fetchAvailableTimes = async (date) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/available-timeslots?date=${date}`
      );
      setAvailableTimes(response.data);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    fetchAvailableTimes(selectedDate);
  };

  const bookingMutation = useMutation({
    mutationFn: (newBooking) => {
      return axios.post("http://localhost:5000/create-booking", newBooking);
    },
    onSuccess: () => {
      Swal.fire({
        title: "Success!",
        text: "Your booking is confirmed!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    },
    onError: () => {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Retry",
      });
    },
  });

  const onSubmit = (data) => {
    const newBooking = {
      date: data.date,
      time: data.time,
      guests: data.guests,
      name: data.name,
      contact: data.contact,
    };
    console.log("booking", newBooking);
    bookingMutation.mutate(newBooking);
    reset();
    router.push("/bookings");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full p-3 border rounded"
            onChange={handleDateChange}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Time</label>
          <select
            {...register("time", { required: "Time is required" })}
            className="w-full p-3 border rounded"
          >
            <option value="">Select Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Guests</label>
          <input
            type="number"
            {...register("guests", {
              required: "Number of guests is required",
              min: { value: 1, message: "At least 1 guest required" },
            })}
            className="w-full p-3 border rounded"
            min="1"
          />
          {errors.guests && (
            <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border rounded"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Contact
          </label>
          <input
            type="tel"
            {...register("contact", {
              required: "Contact number is required",
            })}
            className="w-full p-3 border rounded"
            placeholder="Contact Number"
          />
          {errors.contact && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contact.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
