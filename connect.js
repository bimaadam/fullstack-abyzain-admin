require('dotenv').config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI; // Mengambil dari .env file
const client = new MongoClient(uri);

async function connectMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");

    // Tes ambil data dari koleksi 'pajak' dalam database 'akuntansi'
    const database = client.db("akuntansi"); // Database baru
    const collection = database.collection("pajak"); // Collection baru
    const sampleDoc = await collection.findOne(); // Ambil data pertama
    console.log("Sample Document:", sampleDoc);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    console.error("Full Error:", err);
  } finally {
    await client.close();
  }
}

connectMongo();
