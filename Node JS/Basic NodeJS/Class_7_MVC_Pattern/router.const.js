import express from "express";
import inventoryRounter from "./routers/inventory.router.js";

const router = express.Router();

//inverntory
router.use("/inventory", inventoryRounter);

//products
// router.use("/products");

export default router;
