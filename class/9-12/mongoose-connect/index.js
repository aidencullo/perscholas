import express from 'express';
import connect from './db/connect.js';

import Grade from './models/grade.js';

const app = express();

app.get('/', async (req, res) => {
  const results = await Grade.find({ class_id: 311 }).limit(5);
  res.send(results);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connect();
});
