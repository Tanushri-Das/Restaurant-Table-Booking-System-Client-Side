// "use client";

// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import axios from "axios";

// const BookingForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post("/api/bookings", data);
//       Swal.fire({
//         title: "Success!",
//         text: "Your booking is confirmed!",
//         icon: "success",
//         timer: 1500,
//         showConfirmButton: false,
//       });
//     } catch (err) {
//       Swal.fire({
//         title: "Error!",
//         text: err.response?.data?.message || "Something went wrong!",
//         icon: "error",
//         confirmButtonText: "Retry",
//       });
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold text-center mb-4">
//         Restaurant Table Booking
//       </h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
//       >
//         {/* Date Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Date</label>
//           <input
//             type="date"
//             {...register("date", { required: "Date is required" })}
//             className="w-full p-3 border rounded"
//           />
//           {errors.date && (
//             <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
//           )}
//         </div>

//         {/* Time Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Time</label>
//           <input
//             type="time"
//             {...register("time", { required: "Time is required" })}
//             className="w-full p-3 border rounded"
//           />
//           {errors.time && (
//             <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
//           )}
//         </div>

//         {/* Number of Guests */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Guests</label>
//           <input
//             type="number"
//             {...register("guests", {
//               required: "Number of guests is required",
//               min: { value: 1, message: "At least 1 guest required" },
//             })}
//             className="w-full p-3 border rounded"
//             min="1"
//           />
//           {errors.guests && (
//             <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
//           )}
//         </div>

//         {/* Name Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Name</label>
//           <input
//             type="text"
//             {...register("name", { required: "Name is required" })}
//             className="w-full p-3 border rounded"
//             placeholder="Your Name"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//           )}
//         </div>

//         {/* Contact Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Contact
//           </label>
//           <input
//             type="tel"
//             {...register("contact", {
//               required: "Contact number is required",
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: "Invalid contact number",
//               },
//             })}
//             className="w-full p-3 border rounded"
//             placeholder="Contact Number"
//           />
//           {errors.contact && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.contact.message}
//             </p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };
// export default BookingForm;

"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Mutation for booking submission
  const bookingMutation = useMutation({
    mutationFn: (newBooking) => {
      return axios.post("/api/bookings", newBooking);
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
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
      >
        {/* Date Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full p-3 border rounded"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        {/* Time Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Time</label>
          <input
            type="time"
            {...register("time", { required: "Time is required" })}
            className="w-full p-3 border rounded"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>

        {/* Number of Guests */}
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

        {/* Name Input */}
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

        {/* Contact Input */}
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
