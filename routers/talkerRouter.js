const express = require('express');
const fs = require('fs').promises;

const talkerJson = './talker.json';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const fileContent = await fs.readFile(talkerJson, 'utf-8');
    const talkers = JSON.parse(fileContent);
    
    if(talkers.length === 0) {
      return res.status(200).json([]);
    }
    
    return res.status(200).json(talkers);
  } catch(err) {
    return res.status(500).end();
  }
});

module.exports = router;