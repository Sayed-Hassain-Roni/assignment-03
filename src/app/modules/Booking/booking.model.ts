import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";
import { AppError } from "../../Errors/AppError";

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
      type: Number,
    },
    isBooked: {
      type: String,
      enum: ["confirmed", "unconfirmed", "canceled"],
      default: "confirmed",
    },
  },
  { timestamps: true }
);

bookingSchema.pre("save", async function (next) {
  const isSlotsAvaiavle = await BookingModel.findOne({
    date: this.date,
    startTime: this.startTime,
    endTime: this.endTime,
  });

  if (isSlotsAvaiavle) {
    throw new AppError(404, "Sorry,Slot is not avaiable..");
  }
  next();
});

export const BookingModel = model<TBooking>("Booking", bookingSchema);
