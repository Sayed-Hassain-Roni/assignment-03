import { Router } from "express";
import { userRoutes } from "../modules/Users/user.route";
import { FacilitiesRoutes } from "../modules/Facilities/facilities.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
