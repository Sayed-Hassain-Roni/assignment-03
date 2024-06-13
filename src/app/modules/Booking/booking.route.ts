import { Router } from "express";
import { BookingController } from "./booking.controller";

const router = Router();

router.post("/", BookingController.CreateBooking);
router.get("/", BookingController.GetAllbookingsData);
router.delete("/:id", BookingController.cancleBooking);

export const BookingRoutes = router;
