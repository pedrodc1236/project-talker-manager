const express = require('express');
const fs = require('fs').promises;

const talkerJson = './talker.json';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const fileContent = await fs.readFile(talkerJson, 'utf-8');
    const talkers = JSON.parse(fileContent);
    
    if (talkers.length === 0) {
      return res.status(200).json([]);
    }
    
    return res.status(200).json(talkers);
  } catch (err) {
    return res.status(500).end();
  }
});

router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const fileContent = await fs.readFile(talkerJson, 'utf-8');
    const talkers = JSON.parse(fileContent);

    if (!q) {
      return res.status(200).json(talkers);
    }

    const newTalkers = talkers.filter((t) => t.name.includes(q));

    if (!newTalkers) {
      return res.status(200).json([]);
    }
    return res.status(200).json(newTalkers);
  } catch (err) {
    return res.status(500).end();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fileContent = await fs.readFile(talkerJson, 'utf-8');
    const talkers = JSON.parse(fileContent);

    const talker = talkers.find((t) => t.id === Number(id));

    if (!talker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(talker);
  } catch (err) {
    return res.status(500).end();
  }
});

const validateName = require('../middlewares/middValidate/validateName');
const validateAge = require('../middlewares/middValidate/validateAge');
const validateTalk = require('../middlewares/middValidate/validateTalk');
const validateWatchedAt = require('../middlewares/middValidate/validateWatchedAt');
const validateRate = require('../middlewares/middValidate/validateRate');

router.post('/', validateName, validateAge, validateTalk, validateWatchedAt, validateRate,
  async (req, res) => {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const fileContent = await fs.readFile(talkerJson, 'utf-8');
    const talkers = JSON.parse(fileContent);
    const lastTalker = talkers.length;
    const newObj = { name, age, id: lastTalker + 1, talk: { watchedAt, rate } };
    const newTalkers = [...talkers, newObj];
    await fs.writeFile(talkerJson, JSON.stringify(newTalkers, null, 2));
    return res.status(201).json(newObj);
  } catch (err) {
    return res.status(500).end();
  }
});

router.put('/:id', 
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, age, talk: { watchedAt, rate } } = req.body;
      const fileContent = await fs.readFile(talkerJson, 'utf-8');
      
      const talkers = JSON.parse(fileContent);
      const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

      talkers[talkerIndex] = { ...talkers[talkerIndex], name, age, talk: { watchedAt, rate } };

      await fs.writeFile(talkerJson, JSON.stringify(talkers, null, 2));

      return res.status(200).json(talkers[talkerIndex]);
    } catch (err) {
      return res.status(500).end();
    }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fileContent = await fs.readFile(talkerJson, 'utf-8');
    const talkers = JSON.parse(fileContent);
  
    const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

    const newTalkers = talkers.slice(talkerIndex, 1);

    await fs.writeFile(talkerJson, JSON.stringify(newTalkers, null, 2));

    return res.status(204).end();
  } catch (err) {
    return res.status(500).end();
  }
});

module.exports = router;