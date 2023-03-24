import express, { urlencoded } from "express";
import cors from "cors";
import router from "./router.const.js";

const app = express();

const PORT = 3000;
const HOSTNAME = "localhost";

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs")

app.use(router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server start listening on http://${HOSTNAME}:${PORT}`);
});
