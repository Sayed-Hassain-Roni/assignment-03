import { Request, Response } from "express";
import { FacillitiesServices } from "./facilities.services";

//Create Facility..
const CreateFacilies = async (req: Request, res: Response) => {
  try {
    const Facility = await FacillitiesServices.CreateFacilityIntoDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Facility added successfully",
      data: Facility,
    });
  } catch (err) {
    console.log(err);
  }
};

//Get Facility

const GetAllFacilitiesData = async (req: Request, res: Response) => {
  try {
    const results = await FacillitiesServices.GetFacilityFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get All Facilites successfully",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

//Update Facility..
const UpdateFacilies = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const results = await FacillitiesServices.UpdateFacilityIntoDB(
      id,
      req.body
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Facility Updated successfully",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

//delete Facility..
const deleteFacillity = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const results = await FacillitiesServices.deleteFacillity(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Facility deleted successfully",
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const FacilitiesController = {
  CreateFacilies,
  GetAllFacilitiesData,
  UpdateFacilies,
  deleteFacillity,
};
