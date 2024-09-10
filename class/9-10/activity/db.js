import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const CONNECTION_STRING = process.env.MONGODB_URI;

const client = new MongoClient(CONNECTION_STRING);

export const connectToDatabase = async () => {
  try {
    const conn = await client.connect();
    console.log('Connected to database');
    return conn;
  } catch (error) {
    console.error('Error connecting to database', error);
  }
};

const conn = await connectToDatabase();
const db = conn.db('sample_airbnb');

export default db;
