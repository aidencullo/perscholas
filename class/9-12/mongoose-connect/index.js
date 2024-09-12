import express from 'express';
import connect from './db/connect.js';

import Grade from './models/grade.js';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const results = await Grade.find({ class_id: 311 }).limit(5);
  res.send(results);
});

app.post('/', async (req, res) => {
  try {
    const results = await Grade.create(req.body);
    if (!results) return res.status(400).send('Error');
    else res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connect();
});
