import bcrypt from "bcryptjs";
import DataService from "../services/data.service.js";
import { createAccessToken, createRefreshToken } from "../jwt.const.js";
import { v4 as uuidv4 } from "uuid";

export default class AuthModel {
  async registerUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = {
      id: uuidv4(),
      username: userData.username,
      password: hashedPassword,
    };

    await DataService.saveFile("./data/users.json", [user]);

    const { password, ...everythingElse } = user;

    return everythingElse;
  }

  async loginUser(userData) {
    const users = await DataService.readFile("./data/users.json");

    console.log(users);

    const user = users.find((user) => user.username === userData.username);

    console.log("user", user);
    if (!user) {
      throw new Error("User not found");
    }

    const isSamePassword = await bcrypt.compare(userData.password, user.password);

    console.log("is same pass", isSamePassword);
    if (isSamePassword) {
      //Creating access token
      const token = createAccessToken(user.id);
      console.log("token", token);

      //Creating refresh token
      const refreshToken = createRefreshToken(user.id);
      user.refreshTokens.push(refreshToken);

      //adding refresh token to user
      const index = users.findIndex((u) => u.id === user.id);
      users[index] = user;
      DataService.saveFile("./data/users.json", users);

      const { password, ...whatIsLeftOfUser } = user;
      return { user: whatIsLeftOfUser, token, refreshToken };
    } else {
      throw new Error("Invalid credentials");
    }
  }
}

//"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDE4OWJkOS1mMzgyLTRlOTctOWQ1MS1hNTkxYmMwOTg1ZTEiLCJpYXQiOjE2Nzk2MDAzMzUsImV4cCI6MTY3OTYwMDkzNX0.gB5HdBKp-s2ASEMhhrJuDddyHKjc4HAYFS9PtGbDwW4",
//"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDE4OWJkOS1mMzgyLTRlOTctOWQ1MS1hNTkxYmMwOTg1ZTEiLCJpYXQiOjE2Nzk2MDAzMzUsImV4cCI6MTY4MDIwNTEzNX0.B_3KJh6uvRzH1rwmyvSGtcrKad_mVK0jmPUUclLDC_I"
