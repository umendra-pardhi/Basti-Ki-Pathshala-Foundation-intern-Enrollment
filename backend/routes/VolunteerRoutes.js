const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');
const verifyToken = require('../middleware/auth');

// Register a volunteer
router.post('/', async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer Registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.post('/', async (req, res) => {
//   const { email } = req.body;

//   try {
//     const existing = await Volunteer.findOne({ email });

//     if (existing) {
//       return res.status(409).json({ message: 'Email already registered' });
//     }

//     const newVolunteer = new Volunteer(req.body);
//     await newVolunteer.save();

//     res.status(201).json({ message: 'Volunteer Registered' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Get all volunteers (for admin)
router.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ date: -1 });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/', verifyToken, async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ date: -1 });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
