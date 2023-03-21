import express from "express";
import { productsSession } from "../sessions/sessions.const.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Main Page</h1>");
});

router.post("/login", productsSession, (req, res) => {
  const body = req.body;

  const dummyUser = {
    username: "user123",
    password: "user123",
  };

  if (
    body.username === dummyUser.username &&
    body.password === dummyUser.password
  ) {
    req.session.loggedIn = true;
    res.status(200).send("You've logged in.");
  } else {
    req.session.loggedIn = false;
    res.status(400).send("Wrong credetials.");
  }
});

router.post("/logout", productsSession, (req, res) => {
  req.session.destroy();
  res.status(200).send("You've successfull logged out.");
});

export default router;
