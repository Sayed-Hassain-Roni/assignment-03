import { Request, Response } from "express";
import { FacillitiesServices } from "./facilities.services";
import catchAsync from "../../utils/catchasync";
import sendResponseData from "../../utils/sendResponseData";

//Create Facility..
const CreateFacilies = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.user);

  const Facility = await FacillitiesServices.CreateFacilityIntoDB(req.body);

  const message = "Facility added successfully";
  sendResponseData(res, Facility, message);
});

//Get Facility

const GetAllFacilitiesData = catchAsync(async (req: Request, res: Response) => {
  const results = await FacillitiesServices.GetFacilityFromDB();

  const message = "Get All Facilites successfully";
  sendResponseData(res, results, message);
});

//Update Facility..
const UpdateFacilies = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const results = await FacillitiesServices.UpdateFacilityIntoDB(id, req.body);

  const message = "Facility Updated successfully";
  sendResponseData(res, results, message);
});

//delete Facility..
const deleteFacillity = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const results = await FacillitiesServices.deleteFacillity(id);

  const message = "Facility deleted successfully";
  sendResponseData(res, results, message);
});

export const FacilitiesController = {
  CreateFacilies,
  GetAllFacilitiesData,
  UpdateFacilies,
  deleteFacillity,
};
