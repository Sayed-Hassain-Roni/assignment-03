import { z } from "zod";
import { Types } from "mongoose";

// Define the Zod schema for TBooking
export const BookingValidationSchema = z.object({
  date: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  user: z.instanceof(Types.ObjectId).optional(),
  facility: z.instanceof(Types.ObjectId),
  payableAmount: z.string().optional(),
  isBooked: z.enum(["confirmed", "unconfirmed", "canceled"]).optional(),
});
