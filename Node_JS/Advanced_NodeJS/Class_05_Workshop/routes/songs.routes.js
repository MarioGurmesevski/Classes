import { Router } from "express";
import songsController from "../controllers/songs.controllers.js";

const router = Router();

router.get("/", songsController.getSong);
router.get("/", songsController.getSongByArtist);
router.get("/genre", songsController.getSongsByGenre);
router.post("/", songsController.addNewSong);

export default router;
