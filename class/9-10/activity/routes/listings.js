import Router from 'express';
import db from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  const collection = db.collection('listingsAndReviews');
  const result = await collection.find({}).limit(10).toArray();
  res.send(result);
});

export default router;
