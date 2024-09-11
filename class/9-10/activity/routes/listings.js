import Router from 'express';
import db from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const result = await collection.find({}).limit(10).toArray();
    res.render('index', { listings: result });
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
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

router.delete('/:id', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const filter = { _id: req.params.id };
    const exists = await collection.findOne(filter);
    if (!exists) {
      return res.status(404).send('Not found');
    }
    const result = await collection.deleteOne(filter);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const exists = await collection.findOne({ _id: req.params.id });
    if (!exists) {
      res.status(404).send('Not found');
    } else {
      const result = await collection.replaceOne({ _id: req.params.id }, req.body);
      res.send(result);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
