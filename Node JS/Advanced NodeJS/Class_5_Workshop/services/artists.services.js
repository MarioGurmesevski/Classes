import Artist from "../models/artists.model.js";

export default class artistServices {
  static async getArtist(artistName) {
    const artist = await Artist.find({ artistName: artistName });
    return artist;
  }
  static async addNewArtist(artistData) {
    const artist = new Artist(artistData);

    const createdArtist = await artist.save();

    return createdArtist;
  }
}
