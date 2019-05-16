const express = require('express');

const Rockstars = require('../rockstars/rockstarsModel')

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/rockstars', async (req, res) => {
  const rows = await Rockstars.getAll();

  res.status(200).json(rows);
});

module.exports = server;
