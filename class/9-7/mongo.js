const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  await collection.insertMany([
    { a: 1 }, { a: 2 }, { a: 3 }
  ]);
  const docs = await collection.find({}).toArray();
  const result = await collection.updateMany({ a: 2 }, { $set: { b: 1 } });
  console.log(result.modifiedCount);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
