import { Router } from "express";
const router = Router();
import controller from "../controller/index.controller";

router.get("/", controller.get);

export default router;