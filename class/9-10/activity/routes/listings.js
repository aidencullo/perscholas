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

router.get('/query', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const result = await collection.find(req.query).limit(10).toArray();
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

router.post('/', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const newListing = req.body;
    newListing.createdAt = new Date();
    const result = await collection.insertOne(newListing);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
