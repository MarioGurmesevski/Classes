import { verifyAccessToken } from "../jwt.const.js";
import DataService from "../services/data.service.js";

const tokenValidator = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  //if auth header doesn't exist
  if (!authHeader) res.sendStatus(403);

  const token = authHeader.split("_")[1];

  const { userID } = verifyAccessToken(token);

  const users = await DataService.readFile("./data/users.json");
  const user = users.find((u) => u.id === userID);

  if (!user) res.sendStatus(403);

  next();
};

export default tokenValidator;
