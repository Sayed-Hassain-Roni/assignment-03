import { Router } from "express";
import { BookingController } from "./booking.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../Users/user.constance";
import validationRequest from "../../middlewares/validationRequest";
import { BookingValidationSchema } from "./booking.validation";

const router = Router();

router.post(
  "/",
  auth(USER_ROLE.user),
  validationRequest(BookingValidationSchema),
  BookingController.CreateBooking
);
router.get("/", auth(USER_ROLE.admin), BookingController.GetAllbookingsData);
router.delete("/:id", auth(USER_ROLE.user), BookingController.cancleBooking);

router.get(
  "/:user",
  auth(USER_ROLE.user),
  BookingController.GetUserbookingsData
);
export const BookingRoutes = router;
