import { Router } from "express";
import { userRoutes } from "../modules/Users/user.route";
import { FacilitiesRoutes } from "../modules/Facilities/facilities.route";
import { BookingRoutes } from "../modules/Booking/booking.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/facility",
    route: FacilitiesRoutes,
  },
  {
    path: "/bookings",
    route: BookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
