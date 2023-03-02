const fs = require("fs");
const path = require("path");

const newPath = path.join(__dirname, "data", "new.txt");

function create(folderName, fileName, data = "{}") {
  const somePath = path.join(__dirname, folderName);

  if (!fs.existsSync(somePath)) {
    fs.mkdirSync(somePath);

    const fileNamePath = path.join(somePath, fileName);
    fs.writeFileSync(fileNamePath, data);
  } else {
    console.log("Directory with that name exists");
  }
}

function read() {}

function update() {}

function remove() {}

module.exports = {
  create,
  read,
  update,
  remove,
};
