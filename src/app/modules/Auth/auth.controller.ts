import { Request, Response } from "express";
import { AuthLoginServices } from "./auth.services";
import catchAsync from "../../utils/catchasync";

const atuhLogin = catchAsync(async (req: Request, res: Response) => {
  const results = await AuthLoginServices.AuthLoging(req.body);
  console.log(results);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User loging successfully",
    token: results.accessToken,
    data: results,
  });
});

export const AuthController = {
  atuhLogin,
};
