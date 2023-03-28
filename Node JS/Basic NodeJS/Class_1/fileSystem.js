const fs = require("fs");

// const path = "./newFileOfSomeKind.txt";
// //Write file

// fs.writeFileSync(path, "Hello from Node.js");

// //Read file

// const dataRead = fs.readFileSync(path, {
//   encoding: "utf-8",
// });

// console.log(dataRead);

// //Append file

// const appendData = fs.appendFileSync(path, "appended some content", {
//   encoding: "utf-8",
// });

// console.log(appendData);

// fs.unlinkSync(path);

// const data =
//   fs /
//   fs.readFileSync(path, {
//     encoding: "utf-8",
//   });
// console.log(data);

const path = "./someJson.json";

const someObject = {
  name: "hehe",
  age: 5,
};

fs.writeFileSync(path, JSON.stringify(someObject));

const objectFromFile = JSON.parse(
  fs.readFileSync(path, {
    encoding: "utf-8",
  })
);
console.log(objectFromFile);

objectFromFile.isDead = false;

fs.writeFileSync(path, JSON.stringify(objectFromFile));

setInterval(() => {
  const objectFromFile = JSON.parse(
    fs.readFileSync(path, {
      encoding: "utf-8",
    })
  );
  console.log(objectFromFile.name, objectFromFile.isDead);
}, 1000);

setTimeout(() => {
  const objectFromFile = JSON.parse(
    fs.readFileSync(path, {
      encoding: "utf-8",
    })
  );
  console.log(objectFromFile.name, objectFromFile.isDead);
}, 5000);
