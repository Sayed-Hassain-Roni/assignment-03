import { UserModel } from "../Users/user.model";
import { TFacilities } from "./facilities.interface";
import { FacilitiesModel } from "./facilities.model";

//Create Facility in DB..
const CreateFacilityIntoDB = async (payload: TFacilities) => {
  const results = await FacilitiesModel.create(payload);
  console.log(results);
  return results;
};
//Get Facility ..
const GetFacilityFromDB = async () => {
  const results = await FacilitiesModel.find();
  return results;
};

//Update Facility...

const UpdateFacilityIntoDB = async (_id: string, payload: TFacilities) => {
  const results = await FacilitiesModel.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });

  return results;
};

//Delete Facility

const deleteFacillity = async (_id: string) => {
  const deletedFacility = await FacilitiesModel.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true }
  );
  return deletedFacility;
};

export const FacillitiesServices = {
  CreateFacilityIntoDB,
  UpdateFacilityIntoDB,
  GetFacilityFromDB,
  deleteFacillity,
};
