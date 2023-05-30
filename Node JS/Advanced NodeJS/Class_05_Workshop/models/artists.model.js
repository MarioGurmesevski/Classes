import { Schema, model } from "mongoose";

const artistSchema = new Schema({
  firstName: {
    type: String,
    minLenght: 2,
    required: true,
  },
  lastName: {
    type: String,
    minLenght: 2,
    required: true,
  },
  artistName: {
    type: String,
    minLenght: 2,
    required: true,
  },
  age: {
    type: Number,
    min: 16,
    max: 100,
    required: true,
  },
  totalSongs: {
    type: Number,
    min: 0,
    max: 999,
    required: true,
  },
  genre: {
    type: String,
    minLenght: 2,
    required: true,
  },
});

const Artist = model("Artist", artistSchema);

export default Artist;
