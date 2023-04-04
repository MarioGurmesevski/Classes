import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLenght: 2,
  },
  NumberOfClasses: {
    type: Number,
    min: 1,
    required: true,
  },
  trainer: {
    tyep: String,
    required: true,
  },
  assistent: {
    tyep: String,
    required: true,
  },
});

const Course = model("Course", courseSchema);

export default Course;
