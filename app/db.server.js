// import { MongoClient } from "mongodb";

// // CRITICAL: The MongoDB connection string must be provided via the environment variable MONGO_URL
// const originalUri = process.env.MONGO_URL;

// if (!originalUri) {
//     throw new Error("MONGO_URL environment variable is not set. Cannot connect to MongoDB.");
// }

// // 1. Trim whitespace: This is the most common cause of the MongoParseError on deployment platforms.
// const uri = originalUri.trim();

// // 2. Diagnostic Log: Helps us see exactly what Node is reading from the environment.
// const redactedUri = uri.substring(0, 30) + (uri.length > 30 ? '...' : '');

// console.log(`[MONGO_DEBUG] Attempting to connect with URI length: ${uri.length}`);
// console.log(`[MONGO_DEBUG] URI start (redacted): ${redactedUri}`);

// if (uri.length === 0) {
//     throw new Error("MONGO_URL is set but is empty after trimming whitespace.");
// }

// // 3. Verify scheme prefix
// if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
//     throw new Error(`MONGO_URL must start with "mongodb://" or "mongodb+srv://". Found: ${redactedUri}`);
// }

// // Initialize the MongoClient
// const client = new MongoClient(uri);

// // Connect once when the server starts
// async function connectToMongo() {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB successfully!");
//     } catch (err) {
//         console.error("Failed to connect to MongoDB. Check MONGO_URL and network settings.", err);
//         // It's crucial to exit if the app cannot connect to the database
//         process.exit(1);
//     }
// }

// // Execute the connection function
// connectToMongo();

// // Export the database instance.
// // It uses the database specified in the URI, or defaults to 'shopify_sessions' if none is specified.
// const db = client.db();

// export default db;





import { PrismaClient } from "@prisma/client";

if (process.env.NODE_ENV !== "production") {
  if (!global.prismaGlobal) {
    global.prismaGlobal = new PrismaClient();
  }
}

const prisma = global.prismaGlobal ?? new PrismaClient();

export default prisma;
