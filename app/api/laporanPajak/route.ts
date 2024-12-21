// app/api/laporanPajak/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI; // Ambil URI dari .env
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db("akuntansi"); // Database
    const collection = database.collection("pajak"); // Collection

    const laporanPajak = await collection.find({}).toArray(); // Ambil semua data pajak
    return NextResponse.json(laporanPajak);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching data", error }, { status: 500 });
  } finally {
    await client.close();
  }
}