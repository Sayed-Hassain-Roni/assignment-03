import { Router } from "express";
import { FacilitiesController } from "./facilities.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../Users/user.constance";
import validationRequest from "../../middlewares/validationRequest";
import { facilitiesValidationSchema } from "./facilities.validation";

const router = Router();

router.post(
  "/",
  auth(USER_ROLE.admin),
  validationRequest(facilitiesValidationSchema),
  FacilitiesController.CreateFacilies
);
router.get("/", FacilitiesController.GetAllFacilitiesData);
router.put("/:id", auth(USER_ROLE.admin), FacilitiesController.UpdateFacilies);
router.delete(
  "/:id",
  auth(USER_ROLE.admin),
  FacilitiesController.deleteFacillity
);

export const FacilitiesRoutes = router;
