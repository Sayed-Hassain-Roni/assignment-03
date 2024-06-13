import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  const user = await UserServices.CreateUserIntoDB(req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User registered successfully",
    data: user,
  });
};

export const UserController = {
  createUser,
};
