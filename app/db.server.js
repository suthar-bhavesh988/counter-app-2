import { MongoClient } from "mongodb";

console.log("Mongo_url", process.env.MONGO_URL);


const uri = process.env.MONGO_URL;

if (!uri) {
    throw new Error("MONGO_URL environment variable is not set. Please set the connection string.");
}

const client = new MongoClient(uri);

async function connectToMongo() {
    try {
        await client.connect(uri);
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.error("Failed to connect to MongoDB. Check MONGO_URL and network settings:", err);
        process.exit(1);
    }
}

connectToMongo();

const db = client.db();

export default db;




//import { PrismaClient } from "@prisma/client";

// if (process.env.NODE_ENV !== "production") {
//   if (!global.prismaGlobal) {
//     global.prismaGlobal = new PrismaClient();
//   }
// }

// const prisma = global.prismaGlobal ?? new PrismaClient();

// export default prisma;
