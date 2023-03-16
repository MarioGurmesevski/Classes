import InvetnoryModel from "../models/inventory.model.js";

const invetnoryModel = new InvetnoryModel();

export default class InvetnoryController {
  getAllItems(req, res) {
    console.log("Inventory controller get method called");
    try {
      const items = invetnoryModel.getAllItems();
      console.log("items", items);

      res.status(200).send(items);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
