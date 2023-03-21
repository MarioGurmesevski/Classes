import fs from "fs";

export const writeData = (data, path) => {
  const stringifiedData = JSON.stringify(data, null, 2);
  fs.writeFileSync(path, data, stringifiedData, (err) => console.log(err));
};

export const readData = (path) =>
  JSON.parse(fs.readFileSync(path, { encoding: "utf-8" }));
