"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const queryClient = useQueryClient();
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
        `https://resturant-table-booking-server-side.vercel.app/available-timeslots?date=${date}`
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
      return axios.post(
        "https://resturant-table-booking-server-side.vercel.app/create-booking",
        newBooking
      );
    },
    onSuccess: () => {
      // Invalidate the bookings query to refetch updated data
      queryClient.invalidateQueries({ queryKey: ["bookings"] });

      Swal.fire({
        title: "Success!",
        text: "Your booking is confirmed!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      // After success, optionally redirect or reset form
      reset();
      setPhoneNumber("");
      router.push("/bookings"); // Redirect to bookings page
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
    let countryCode = "";
    let phone = "";

    // Extract country code and phone number
    if (phoneNumber.startsWith("+")) {
      countryCode = phoneNumber.slice(1, phoneNumber.length - 10); // Get the country code
      phone = phoneNumber.slice(-10); // Get the phone number
    } else {
      countryCode = phoneNumber.slice(0, phoneNumber.length - 10); // Get the country code
      phone = phoneNumber.slice(-10); // Get the phone number
    }

    const newBooking = {
      date: data.date,
      time: data.time,
      guests: data.guests,
      name: data.name,
      email: data.email,
      countryCode: countryCode,
      phone: phone,
    };

    bookingMutation.mutate(newBooking);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white p-8 border rounded-xl shadow-lg space-y-4"
      >
        <div className="mb-4">
          <div className="flex items-center space-x-1 mb-2">
            <label className="block font-medium">Date</label>
            <span className="text-red-600">*</span>
          </div>

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
          <div className="flex items-center space-x-1 mb-2">
            <label className="block font-medium">Time</label>
            <span className="text-red-600">*</span>
          </div>
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
          <div className="flex items-center space-x-1 mb-2">
            <label className="block font-medium">Guests</label>
            <span className="text-red-600">*</span>
          </div>

          <input
            type="number"
            {...register("guests", {
              required: "Number of guests is required",
              min: { value: 1, message: "At least 1 guest required" },
            })}
            placeholder="1 Person"
            className="w-full p-3 border rounded"
            min="1"
          />
          {errors.guests && (
            <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
          )}
        </div>
        <div className="mb-4">
          <div className="flex items-center space-x-1 mb-2">
            <label className="block font-medium">Name</label>
            <span className="text-red-600">*</span>
          </div>
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
          <div className="flex items-center space-x-1 mb-2">
            <label className="block font-medium">Email</label>
            <span className="text-red-600">*</span>
          </div>
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 border rounded"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <div className="flex items-center space-x-1 mb-2">
            <label className="block font-medium">Phone</label>
            <span className="text-red-600">*</span>
          </div>
          <PhoneInput
            country={"in"}
            value={phoneNumber} // Set the value manually
            onChange={(value) => setPhoneNumber(value)} // Update the state directly
            inputProps={{
              required: true,
              className:
                "border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-md w-full ps-12 py-2 outline-none",
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white py-2 px-4 rounded-md bg-gradient-to-r from-[#835D23] to-[#B58130] hover:opacity-90"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
