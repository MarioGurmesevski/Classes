import express from "express";
import * as reviewsService from "./reviews.service.js";

const rounter = express.Router();

// /api

const reviewsRoute = "/reviews";

//Method === GET
rounter.get(reviewsRoute, (req, res) => {
  try {
  } catch (error) {}
});

//Method === POST
rounter.post(reviewsRoute, (req, res) => {
  //Prepare data
  const body = req.body;
  try {
    //Business logic(in service)
    reviewsService.addReview(body);
    //send responce
  } catch (error) {
    //Send error
  }
});

//Method === PUT
rounter.put(reviewsRoute, (req, res) => {
  try {
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
