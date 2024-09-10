import express from 'express';
import { ObjectId } from 'mongodb';
import bodyParser from 'body-parser';

import db from './db.js';

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  let collection  = await db.collection('posts');
  let results = await collection.find({}).limit(1).toArray();
  res.send(results).status(200);
});

app.get('/:id', async (req, res) => {
  let collection  = await db.collection('posts');
  let query = { _id: new ObjectId(req.params.id) };
  let results = await collection.findOne(query);

  if (!results) res.send('Post not found').status(404);
  else res.send(results).status(200);
});

app.post('/', async (req, res) => {
  let collection  = await db.collection('posts');
  let newDoc = req.body;
  newDoc.createdAt = new Date();
  let result = await collection.insertOne(newDoc);
  res.send(result).status(204);
});

app.patch('/comment/:id', async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = { $push: { comments: req.body } };
  
  const collection = await db.collection('posts');
  const result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
