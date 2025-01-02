import { useQueryClient } from "@tanstack/react-query";

const bookingMutation = useMutation({
  mutationFn: (newBooking) => {
    return axios.post(
      "https://resturant-table-booking-server-side.vercel.app/create-booking",
      newBooking
    );
  },
  onSuccess: () => {
    Swal.fire({
      title: "Success!",
      text: "Your booking is confirmed!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });

    // ক্যাশ ইনভ্যালিডেট করুন
    queryClient.invalidateQueries({ queryKey: ["bookings"] });

    // রাউটিং করুন
    router.push("/bookings");
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
