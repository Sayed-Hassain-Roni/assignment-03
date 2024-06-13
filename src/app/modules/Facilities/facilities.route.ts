import { Router } from "express";
import { FacilitiesController } from "./facilities.controller";

const router = Router();

router.post("/", FacilitiesController.CreateFacilies);
router.get("/", FacilitiesController.GetAllFacilitiesData);
router.put("/:id", FacilitiesController.UpdateFacilies);
router.delete("/:id", FacilitiesController.deleteFacillity);

export const FacilitiesRoutes = router;
