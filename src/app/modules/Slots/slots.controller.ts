import { Request, Response } from "express";
import { TimeSlotsServices } from "./slot.services";
import catchAsync from "../../utils/catchasync";
import sendResponseData from "../../utils/sendResponseData";

const creatSlots = catchAsync(async (req: Request, res: Response) => {
  const Slots = await TimeSlotsServices.CreateTimeSlotsIntoDB(req.body);

  const message = "Slots added successfully";
  sendResponseData(res, Slots, message);
});

//Get by date

const CheackAvability = catchAsync(async (req: Request, res: Response) => {
  const results = await TimeSlotsServices.CheackavailableDate(req.query);

  const message = "Availability checked successfully";
  sendResponseData(res, results, message);
});

export const TimeSlotsController = {
  creatSlots,
  CheackAvability,
};
