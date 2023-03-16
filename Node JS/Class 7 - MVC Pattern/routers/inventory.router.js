import express from "express";
import InvetnoryController from "../controllers/inventory.controller.js";

const inventoryController = new InvetnoryController();

const router = express.Router();
//api/inventory
router.get("", inventoryController.getAllItems);

export default router;
