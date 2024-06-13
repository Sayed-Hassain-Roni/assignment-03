import { Request, Response } from "express";
import { BookingServices } from "./booking.services";

//Create Facility..
const CreateBooking = async (req: Request, res: Response) => {
  try {
    const booking = await BookingServices.CreateBookingIntoDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (err) {
    console.log(err);
  }
};

//Get Booking

const GetAllbookingsData = async (req: Request, res: Response) => {
  try {
    const results = await BookingServices.GetBookingDataFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Bookings retrieved successfully",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

//delete Facility..
const cancleBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const results = await BookingServices.CancleBooking(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Booking cancelled successfully",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const BookingController = {
  CreateBooking,
  GetAllbookingsData,
  cancleBooking,
};
