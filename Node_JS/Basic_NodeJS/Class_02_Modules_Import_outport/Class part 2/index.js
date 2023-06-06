const {
  writeToFile,
  readFile,
  appendToObject,
  removeFile,
  appStart,
} = require("./src/helpers");
const path = require("path");
const { appendFile } = require("fs");
const fileName = path.join(__dirname, "people.json");

const someObject = {
  name: "Arnold",
};
// writeToFile(fileName, someObject);
const fileFromStorage = readFile(fileName);

console.log(fileFromStorage);

appendToObject(fileName, "strafciger");

removeFile(fileName);

appStart();
