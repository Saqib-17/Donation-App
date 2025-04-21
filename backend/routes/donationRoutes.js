const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// POST /donate
router.post('/donate', async (req, res) => {
  try {
    const { cause, amount } = req.body;
    const newDonation = new Donation({ cause, amount });
    await newDonation.save();
    res.status(201).json({ message: 'Donation saved!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save donation' });
  }
});

// GET /history
router.get('/history', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

module.exports = router;
