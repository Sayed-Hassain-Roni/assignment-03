import { Schema, model } from "mongoose";
import { TFacilities } from "./facilities.interface";

// Define the TUser schema
const facilitiesSchema = new Schema<TFacilities>({
  name: { type: String, required: true },
  description: { type: String },
  pricePerHour: { type: Number, required: true },
  location: { type: String, required: true },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const FacilitiesModel = model<TFacilities>("Facility", facilitiesSchema);
