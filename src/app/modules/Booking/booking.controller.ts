import { Request, Response } from "express";
import { BookingServices } from "./booking.services";
import catchAsync from "../../utils/catchasync";
import sendResponseData from "../../utils/sendResponseData";

//Create Facility..
const CreateBooking = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.user);

  const booking = await BookingServices.CreateBookingIntoDB(req.body);

  const message = "Booking created successfully";
  sendResponseData(res, booking, message);
});

//Get Booking

const GetAllbookingsData = catchAsync(async (req: Request, res: Response) => {
  const results = await BookingServices.GetBookingDataFromDB();

  const message = "Bookings retrieved successfully";
  sendResponseData(res, results, message);
});
//Get Booking by user

const GetUserbookingsData = catchAsync(async (req: Request, res: Response) => {
  // const user = req.body;
  const results = await BookingServices.GetUserBookingDataFromDB();

  const message = "Bookings retrieved by User successfully";
  sendResponseData(res, results, message);
});

//delete Facility..
const cancleBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const results = await BookingServices.CancleBooking(id);

  const message = "Booking cancelled successfully";
  sendResponseData(res, results, message);
});

export const BookingController = {
  CreateBooking,
  GetAllbookingsData,
  cancleBooking,
  GetUserbookingsData,
};
