import express from "express";
import cicomController from "../controller/cicom.controller.js";

const router = express.Router();

router.all("/createtmp", cicomController.createTMP);
router.all("/import/:id", cicomController.importData);

export default router;
