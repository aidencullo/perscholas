import Router from 'express';
import db from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const listings = await collection.find({}).limit(10).toArray();
    res.render('index', { listings: listings });
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
});

router.get('/query', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const listings = await collection.find(req.query).limit(10).toArray();
    res.send(listings);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const listing = await collection.findOne({ _id: req.params.id });
    res.render('show', { listing: listing });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const newListing = req.body;
    newListing.createdAt = new Date();
    const listings = await collection.insertOne(newListing);
    res.send(listings);
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
    const listings = await collection.deleteOne(filter);
    res.send(listings);
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
      const listings = await collection.replaceOne({ _id: req.params.id }, req.body);
      res.send(listings);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/:id/delete', async (req, res) => {
  try {
    const collection = db.collection('listingsAndReviews');
    const exists = await collection.findOne({ _id: req.params.id });
    if (!exists) {
      res.status(404).send('Not found');
    } else {
      const listings = await collection.deleteOne({ _id: req.params.id });
      res.send(listings);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
