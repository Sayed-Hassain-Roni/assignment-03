import exp from "constants";
import { TBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";
import { UserModel } from "../Users/user.model";
import jwt from "jsonwebtoken";
import { string } from "zod";
import { FacilitiesModel } from "../Facilities/facilities.model";
import { TLoginUser } from "../Auth/auth.interface";
import config from "../../config";

//create booking...
const CreateBookingIntoDB = async (payload: TBooking) => {
  const facility = await FacilitiesModel.findById(payload.facility);
  const FacilitiesPrice = facility?.pricePerHour as number;
  const startTime = payload.startTime;
  const endTime = payload.endTime;

  // Convert start and end times to Date objects
  const startTimeDate = new Date(`1970-01-01T${startTime}:00Z`);
  const endTimeDate = new Date(`1970-01-01T${endTime}:00Z`);

  // Calculate the duration in hours
  const duration =
    (endTimeDate.getTime() - startTimeDate.getTime()) / (1000 * 60 * 60);

  //Do Sum for Payableamount..
  const payAbleAmount = duration * FacilitiesPrice;

  // Repleace Payableabmount..
  payload.payableAmount = payAbleAmount;

  // console.log("test", idd);
  const User = await UserModel.findOne();
  const ID = User?._id;
  payload.user = ID;
  console.log(payload.user);

  const boooking = await BookingModel.create(payload);

  return boooking;
};

//Get all booking data..

const GetBookingDataFromDB = async () => {
  const results = await BookingModel.find()
    .populate("facility")
    .populate("user");
  return results;
};
//Get User booking data..

const GetUserBookingDataFromDB = async () => {
  const results = await BookingModel.find();
  console.log(results);
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
  GetUserBookingDataFromDB,
};
