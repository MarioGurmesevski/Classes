import express from "express";
import cors from "cors";
import router from "./router.const.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

const PORT = 3000;
const HOSTNAME = "localhost";

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server start listening on http://${HOSTNAME}:${PORT}`);
});
