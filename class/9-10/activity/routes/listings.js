import Router from 'express';
import db from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const result = await collection.find({}).limit(10).toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const result = await collection.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
