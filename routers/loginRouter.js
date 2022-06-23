const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const validateEmail = require('../middlewares/middValidate/validateEmail');
const validatePassword = require('../middlewares/middValidate/validatePassword');

router.post('/', 
  validateEmail,
  validatePassword,
  (_req, res) => {
  try {
    token = crypto.randomBytes(8).toString('hex');

    return res.status(200).json({ token: token })
  } catch(err) {
    return res.status(500).end();
  }
});

module.exports = router;
