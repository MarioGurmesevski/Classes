import { Router } from "express";
import artistController from "../controllers/artists.controllers.js";

const router = Router();

router.get("/", artistController.getArtist);
router.post("/", artistController.addNewArtist);

export default router;
