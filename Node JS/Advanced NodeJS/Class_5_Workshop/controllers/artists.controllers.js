import artistServices from "../services/artists.services.js";

export default class artistController {
  static async getArtist(req, res) {
    try {
      const artist = await artistServices.getArtist(req.query.artistName);
      res.status(200).send(artist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addNewArtist(req, res) {
    try {
      const artist = await artistServices.addNewArtist(req.body);
      res.status(200).send(artist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
