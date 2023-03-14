import express from "express";
import * as reviewsService from "./reviews.service.js";

const rounter = express.Router();

// /api

const reviewsRoute = "/reviews";

//Method === GET
rounter.get(reviewsRoute, (req, res) => {
  try {
    //get data from the service
    const reviews = reviewsService.getReview.res //return data as reponse
      .status(200)
      .send(reviews);
  } catch (error) {
    //return error
    res.sendStatus(500).send("Problem While Fetching");
  }
});

//Method === POST
rounter.post(reviewsRoute, (req, res) => {
  //Prepare data
  const body = req.body;
  try {
    //Business logic(in service)
    const review = reviewsService.addReview(body);
    //send responce
    res.sendStatus(200).send(review);
  } catch (error) {
    //Send error
    res.status(500).send(error.message);
  }
});

//Method === PUT
rounter.put(reviewsRoute, (req, res) => {
  try {
    const body = req.body;
  } catch (error) {}
});

//Method === PATCH
rounter.patch(reviewsRoute, (req, res) => {
  try {
  } catch (error) {}
});

//Method === DELETE
rounter.delete(reviewsRoute, (req, res) => {
  try {
  } catch (error) {}
});

export default rounter;
