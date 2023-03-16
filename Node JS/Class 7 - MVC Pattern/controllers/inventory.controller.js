import InvetnoryModel from "../models/inventory.model.js";

const invetnoryModel = new InvetnoryModel();

export default class InvetnoryController {
  async getAllItems(req, res) {
    const shouldGetAllItems = !req.params.id;
    try {
      if (shouldGetAllItems) {
        const items = invetnoryModel.getAllItems();
        res.status(200).send(items);
      } else {
        const item = await invetnoryModel.getItemById(req.params.id);
        res.status(200).send(item);
      }
    } catch (error) {
      res.sendStatus(500);
    }
  }
  async addInventoryItem(req, res) {
    const body = req.body;
    try {
      const createdItem = await invetnoryModel.addInventoryItem(body);
      res.status(201).send(createdItem);
    } catch (error) {
      res.status(400).send("Creating item failed");
    }
  }

  async updateInventoryItem(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      const updatedItem = await invetnoryModel.updateInventoryItem(id, body);
      res.status(200).send(updatedItem);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
