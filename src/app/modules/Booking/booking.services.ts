import exp from "constants";
import { TBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";
import { UserModel } from "../Users/user.model";
import { string } from "zod";

//create booking...
const CreateBookingIntoDB = async (payload: TBooking) => {
  const boooking = await BookingModel.create(payload);
  return boooking;
};

//Get all booking data..

const GetBookingDataFromDB = async () => {
  const results = await BookingModel.find().populate("facility");
  return results;
};

//Delete booking

const CancleBooking = async (_id: string) => {
  const canclebooking = await BookingModel.findByIdAndUpdate(
    _id,
    { isBooked: "canceled" },
    { new: true }
  );
  return canclebooking;
};

export const BookingServices = {
  CreateBookingIntoDB,
  GetBookingDataFromDB,
  CancleBooking,
};
