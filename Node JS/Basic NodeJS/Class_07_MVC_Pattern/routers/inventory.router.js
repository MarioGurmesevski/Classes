import express from "express";
import InvetnoryController from "../controllers/inventory.controller.js";

const inventoryController = new InvetnoryController();

const router = express.Router();

//api/inventory
router.get("/:id", inventoryController.getAllItems);
router.post("", inventoryController.addInventoryItem);
router.put("/:id", inventoryController.updateInventoryItem);
router.delete("/:id", inventoryController.deleteInventoryItem);

export default router;
