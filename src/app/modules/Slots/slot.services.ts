import { TSlots } from "./slots.interface";
import { SlotsModel } from "./slots.model";

const CreateTimeSlotsIntoDB = async (payload: TSlots) => {
  const results = await SlotsModel.create(payload);
  return results;
};

//check avability  date..

const CheackavailableDate = async (query: Record<string, unknown>) => {
  let currentDate: Date = new Date();
  let year: number = currentDate.getFullYear();
  let month: string = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  let day: string = currentDate.getDate().toString().padStart(2, "0");

  let TodayDate: string = `${year}-${month}-${day}`;

  let date = TodayDate;

  if (query?.date) {
    date = query?.date as string;
  }

  const results = await SlotsModel.find({
    $or: ["date"].map((field) => ({
      [field]: { $regex: date, $options: "i" },
    })),
  })
    .select("slots -_id")
    .exec();
  console.log(results);
  return results;
};

export const TimeSlotsServices = {
  CreateTimeSlotsIntoDB,
  CheackavailableDate,
};
