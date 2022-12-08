import { Router } from "express";
const router = Router();
import controller from "../controller/index.controller";

router.delete("/:id", controller.delete);
router.patch("/:id", controller.patch);
router.post("/", controller.post);
router.get("/:id", controller.getById);
router.get("/", controller.get);

export default router;
