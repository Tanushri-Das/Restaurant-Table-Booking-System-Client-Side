"use client";

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const BookingsPage = () => {
  const queryClient = useQueryClient();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await axios.get(
        "https://resturant-table-booking-server-side.vercel.app/bookings"
      );
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(
        `https://resturant-table-booking-server-side.vercel.app/bookings/${id}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      Swal.fire({
        title: "Success!",
        text: "Booking deleted",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    },
    onError: (error) => {
      console.error("Error deleting booking:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete booking",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(id);
      }
    });
  };

  return (
    <div className="m-6 md:m-12">
      <h1 className="text-black flex justify-center items-center text-4xl font-bold mb-10">
        All Bookings
      </h1>

      {isLoading ? (
        <p className="text-center text-lg font-medium">Loading...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-lg font-medium">No booking found.</p>
      ) : (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full font-light">
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Guests
                </th>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Date
                </th>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Time
                </th>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                    {booking.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                    +{booking.countryCode}-{booking.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                    {booking.guests}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                    {booking.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                    {booking.time}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="bg-red-500 text-white px-4 py-2 hover:bg-red-700 rounded-lg ms-2"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingsPage;
