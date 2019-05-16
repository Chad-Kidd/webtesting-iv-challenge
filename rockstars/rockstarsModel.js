const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(rockstar) {
  const [id] = await db('rockstars').insert(rockstar);
//for heroku .insert(hobbit, 'id');
  return db('rockstars')
  .where({id})
  .first();
  
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('rockstars');
}

function findById(id) {
  return null;
}
