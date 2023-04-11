import { Router } from "express";
import songsController from "../controllers/songs.controllers.js";

const router = Router();

router.get("/", songsController.getSong);
router.post("/", songsController.addNewSong);

export default router;
