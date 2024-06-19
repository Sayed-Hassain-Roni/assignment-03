import { Router } from "express";
import { TimeSlotsController } from "./slots.controller";

const router = Router();

router.post("/slots", TimeSlotsController.creatSlots);

router.get("/check-availability", TimeSlotsController.CheackAvability);

export const TimeSlotsRoutes = router;
