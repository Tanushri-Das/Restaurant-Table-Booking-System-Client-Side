import clientPromise from "@/lib/MongodbClient";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const newBooking = await request.json();

    // Connect to the MongoDB database
    const client = await clientPromise;
    const db = client.db();
    const bookingsCollection = db.collection("bookings");

    // Insert new booking
    await bookingsCollection.insertOne(newBooking);

    return NextResponse.json(
      { message: "Booking added successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
