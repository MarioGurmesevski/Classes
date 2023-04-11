import Songs from "../models/songs.model.js";

export default class songsServices {
  static async getSong(title) {
    const song = await Songs.findOne({ title: title });

    return song;
  }
  static async getSongByArtist() {
    const songs = await Songs.findOne().populate("songs", "-artists");

    return songs;
  }
  static async addNewSong(songData) {
    const song = new Songs(songData);

    const createdSong = await song.save();

    return createdSong;
  }
  static async getSongsByGenre(genre) {
    const song = await Songs.find({ genre: genre });
    console.log(song);
    return song;
  }
}
