import Songs from "../models/songs.model.js";

export default class songsServices {
  static async getSong(title) {
    const song = await Songs.findOne({ title: title }).populate("songs", "-artists");

    return song;
  }
  static async addNewSong(songData) {
    const song = new Songs(songData);

    const createdSong = await song.save();

    return createdSong;
  }
}
