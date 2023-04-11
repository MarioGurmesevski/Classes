import { Schema, model } from "mongoose";

const songSchema = new Schema({
  title: {
    type: String,
    minLenght: 2,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  genre: {
    type: String,
    minLenght: 2,
    required: true,
  },
});

const Songs = model("Songs", songSchema);

export default Songs;
