import express from 'express';

import db from './db.js';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  let collection  = await db.collection('posts');
  let results = await collection.find({}).limit(1).toArray();
  res.send(results).status(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
