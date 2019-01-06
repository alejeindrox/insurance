import express from 'express';
const router = express.Router();

// @route   GET api/*
// @desc    Code Error 404 Not Found
// @access  Public
router.get('/', (req, res) => {
  return res.status(404).json({ success: false, message: 'Error: 404 Not Found' });
});

// @route   POST api/*
// @desc    Code Error 404 Not Found
// @access  Public
router.post('/', (req, res) => {
  return res.status(404).json({ success: false, message: 'Error: 404 Not Found' });
});

export default router;