const fs = require("fs");
const fsPromises = require("fs/promises");

function writeToFile(fileName, data) {
  if (!fs.existsSync(fileName)) {
    console.log("NEW FILE CREATED", fileName);
  } else {
    console.log("DATA OVERWRITTEN SUCCESSFULY TO FILE", fileName);
  }

  let isObject = true;

  if (data instanceof Array) {
    data.forEach((element) => {
      if (!(element instanceof Object)) isObject = false;
    });
  }
  if (!isObject) return;
  if (typeof data != "object") return;
  fs.writeFileSync(fileName, JSON.stringify(data));
}

function readFile(fileName) {
  if (!fs.existsSync(fileName)) {
    console.log(`File ${fileName} not found`);
    return;
  }
  const fileData = fs.readFileSync(fileName, { encoding: "utf-8" });
  return JSON.parse(fileData);
}

function appendToObject(fileName, data) {
  const objectToAppendTo = readFile(fileName);

  if (!objectToAppendTo) return;
  if (data == undefined || data == null) return;

  const objectWithAppendedData = {
    ...objectToAppendTo,
    data,
  };
  writeToFile(fileName, objectWithAppendedData);
}

function removeFile(fileName) {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  }
}

async function appStart() {
  await fsPromises.writeFile(
    "./NewFileAsync.txt",
    "hello from async file promises"
  );
  const data = await fsPromises.readFile("./NewFileAsync.txt", {
    encoding: "utf-8",
  });
  console.log(data);
}

module.exports = {
  writeToFile,
  readFile,
  appendToObject,
  removeFile,
  appStart,
};
