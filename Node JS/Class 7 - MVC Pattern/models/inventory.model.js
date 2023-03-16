import * as dataService from "../services/data.service.js";

const inventoryDataPath = "./data/inventory.json";

export default class InvetnoryModel {
  getAllItems() {
    return new Promise((resolve, reject) => {
      const inventoryItems = dataService.readData(inventoryDataPath);
      resolve(inventoryItems);
    });
  }
}