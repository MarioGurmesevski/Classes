const { read, create, update, remove } = require("./src/helpers");

create(
  "newFolder2",
  "someFile.json",
  JSON.stringify({
    name: "John",
    lastName: "Wick",
  })
);
