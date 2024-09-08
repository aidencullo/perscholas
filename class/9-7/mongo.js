const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    console.log('Connected to MongoDB!');
    
    // Specify the database you want to access
    const db = client.db('yourDatabaseName');

    // Perform database operations
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
    // Close the connection when done
    await client.close();
  }
}

connectToDatabase();
