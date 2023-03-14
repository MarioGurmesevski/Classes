import express from "express";
import cors from "cors";
import reviewRoutes from "./reviews.routes.js";

// Creating a server
const app = express();

// Handling middleware
// app.use((req, res, next) => {
//   console.log("Middleware has been executed");
//   next();
// });
app.use(express.json()); //to enable working with JSON in body
app.use(cors());

// Rotes
app.use("/api", reviewRoutes);

// Server listening
app.listen(3000, "localhost", () => {
  console.log("The server has started listening on http://localhost:3000");
});
