import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLenght: 3,
  },
  NumberOfClasses: {
    type: Number,
    required: true,
    min: 1,
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
