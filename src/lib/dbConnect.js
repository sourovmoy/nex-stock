const { MongoClient, ServerApiVersion } = require("mongodb");
export const collections = {
  USERS: "users",
  PRODUCTS: "products",
};
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri) {
  throw new Error("❌ Please add MONGO_URI to environment variables");
}

if (!dbName) {
  throw new Error("❌ Please add DB_NAME to environment variables");
}
let clientPromise;
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function dbConnect(collectionName) {
  const client = await clientPromise;
  const db = client.db(dbName);
  return db.collection(collectionName);
}
