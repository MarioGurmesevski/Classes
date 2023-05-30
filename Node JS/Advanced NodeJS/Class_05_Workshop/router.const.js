import { Router } from "express";
import artistsRouter from "./routes/artists.routes.js";
import songsRouter from "./routes/songs.routes.js";

const router = Router();

router.use("/artists", artistsRouter);

router.use("/songs", songsRouter);

export default router;
