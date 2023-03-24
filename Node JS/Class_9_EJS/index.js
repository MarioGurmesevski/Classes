import express from "express";
import cors from "cors";

const PORT = 3000;
const HOSTNAME = "localhost";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api");

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server start listening on http://${HOSTNAME}:${PORT}`);
});
