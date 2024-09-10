import express from 'express';
import dotenv from 'dotenv';

import listingsRouter from './routes/listings.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/listings', listingsRouter);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
