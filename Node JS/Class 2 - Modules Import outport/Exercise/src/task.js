const { writeFile } = require("fs/promises");
const path = require("path");

const tasksPath = path.join(__dirname, ".src/task.json");

const tasksJsonData = JSON.parse(fs.readFileSync(tasksPath));

tasksJsonData.push({
  id: "ID",
  task: "da",
  isFinished: false,
});

fs.writeFileSync(tasksPath, JSON.stringify(tasksJsonData));
