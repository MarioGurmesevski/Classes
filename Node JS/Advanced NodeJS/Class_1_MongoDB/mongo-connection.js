import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://MarioG:tJZSTPTCxpTnvqVM@cluster0.ep76ptg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export const connectToDatabase = () => {
  console.log("Connecting to MongoDB...");

  client.db("test");

  console.log("Connected to MongoDB!");
};

client.connect((err) => {
  console.log("connecting to Mongo DB");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
