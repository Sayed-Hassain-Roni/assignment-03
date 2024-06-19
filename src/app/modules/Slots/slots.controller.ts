import { Request, Response } from "express";
import { TimeSlotsServices } from "./slot.services";

const creatSlots = async (req: Request, res: Response) => {
  try {
    const Slots = await TimeSlotsServices.CreateTimeSlotsIntoDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Slots added successfully",
      data: Slots,
    });
  } catch (err) {
    console.log(err);
  }
};

//Get by date

const CheackAvability = async (req: Request, res: Response) => {
  try {
    const results = await TimeSlotsServices.CheackavailableDate(req.query);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Availability checked successfully",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const TimeSlotsController = {
  creatSlots,
  CheackAvability,
};
