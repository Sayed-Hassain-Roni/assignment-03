import { Schema, model } from "mongoose";
import { TSlots, TimeSlots } from "./slots.interface";

// Define the TimeSlots schema
const timeSlotsSchema = new Schema(
  {
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  { _id: false }
);

// Define the TSlots schema
const TimeSlotsSchema = new Schema<TSlots>({
  date: { type: [String], required: true, unique: true },
  slots: { type: [timeSlotsSchema], required: true },
});

export const SlotsModel = model<TSlots>("slot", TimeSlotsSchema);
