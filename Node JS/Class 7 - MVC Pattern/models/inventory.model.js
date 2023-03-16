import * as dataService from "../services/data.service.js";
import { v4 as uuidv4 } from "uuid";

const inventoryDataPath = "./data/inventory.json";

export default class InvetnoryModel {
  getAllItems() {
    return new Promise((resolve, reject) => {
      const inventoryItems = dataService.readData(inventoryDataPath);
      resolve(inventoryItems);
    });
  }
  addInventoryItem(body) {
    return new Promise(async (resolve, reject) => {
      const items = await this.getAllItems();
      const createdInventoryItem = {
        ...body,
        id: uuidv4(),
      };
      items.push(createdInventoryItem);

      dataService.writeData(inventoryDataPath, items);

      resolve(createdInventoryItem);
    });
  }
  updateInventoryItem(id, body) {
    return new Promise(async (resolve, reject) => {
      const items = await this.getAllItems();

      const index = items.findIndex((item) => item.id === id);

      if (index === -1) {
        reject(`Item with id:${id}can't be found`);
      }

      items[index] = {
        ...body,
        id,
      };

      dataService.writeData(inventoryDataPath, items);

      resolve(items[index]);
    });
  }
}
