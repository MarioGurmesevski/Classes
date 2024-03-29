import songsServices from "../services/songs.services.js";

export default class songsController {
  static async getSongByArtist(req, res) {
    try {
      const song = await songsServices.getSongByArtist();
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async getSong(req, res) {
    try {
      const song = await songsServices.getSong(req.query.title);
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addNewSong(req, res) {
    try {
      const song = await songsServices.addNewSong(req.body);
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async getSongsByGenre(req, res) {
    try {
      const song = await songsServices.getSongsByGenre(req.query.genre);
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
