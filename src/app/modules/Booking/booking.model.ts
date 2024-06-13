import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

// Define the booking schema
const bookingSchema = new Schema<TBooking>(
  {
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    facility: {
      type: Schema.Types.ObjectId,
      ref: "Facility",
      required: true,
    },
    payableAmount: {
      type: String,
    },
    isBooked: {
      type: String,
      enum: ["confirmed", "unconfirmed", "canceled"],
      default: "confirmed",
    },
  },
  { timestamps: true }
);

export const BookingModel = model<TBooking>("Booking", bookingSchema);
